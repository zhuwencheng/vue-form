<template>
    <div class="wrapper">
        <div class="hd">标题</div>
        <el-input placeholder="请输入内容" v-model="someProps.label"></el-input>
        <div class="hd">ID属性值</div>
        <el-input placeholder="请输入内容" v-model="someProps.id"></el-input>
        <div class="hd">选项</div>
        <el-checkbox-group v-model="someProps.value">
            <p v-for="(item,index) in someProps.list" class="option">
                <el-checkbox :label="item.label">
                    <el-input placeholder="请输入内容" v-model="item.label"></el-input>
                </el-checkbox>
                <i class="el-icon-close delete-icon" @click="deleteItem(index)"></i>
    
            </p>
        </el-checkbox-group>
        <!--<el-checkbox-group v-else-if="formData.type === 'checkbox'" v-model="formData.value">
                <el-checkbox :label="item.value" v-for="item in formData.list">{{item.label}}</el-checkbox>
            </el-checkbox-group>-->
        <p class="add-item" @click="addItem">添加选项</p>
    </div>
</template>

<script>
export default {
    name: 'editText',
    props: ['someProps'],
    methods: {
        deleteItem(item, index) {
            if (this.someProps.list.length > 1) {
                this.someProps.list.splice(index, 1);
            }
        },
        addItem() {
            //console.log(this.someProps.list.length)
            this.someProps.list.push({ label: '未命名选项' + (this.someProps.list.length + 1) });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

