<template>
    <el-input placeholder="请输入内容" v-model="formData.value" v-if="formData.type === 'text'">
    </el-input>
    <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="formData.value" v-else-if="formData.type === 'textarea'"></el-input>
    <el-input-number v-model="formData.value" v-else-if="formData.type === 'number'"></el-input-number>
    <el-date-picker v-model="formData.value" type="date" placeholder="选择日期" v-else-if="formData.type === 'date'"></el-date-picker>
    <div v-else-if="formData.type === 'radio'">
        <el-radio class="radio" v-model="formData.value" :label="item.label" v-for="item in formData.list">{{item.label}}</el-radio>
    </div>
    <el-checkbox-group v-else-if="formData.type === 'checkbox'" v-model="formData.value">
        <el-checkbox :label="item.label" v-for="item in formData.list">{{item.label}}</el-checkbox>
    </el-checkbox-group>
    <el-select v-model="formData.value" placeholder="请选择" v-else>
        <el-option v-for="item in formData.list" :key="item.value" :label="item.label" :value="item.label"></el-option>
    </el-select>
</template>

<script>
export default {
    name: 'centerForm',
    data() {
        return {
            formData: this.someProps
        }
    },
    props: ['someProps']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import 'main.less';
</style>
