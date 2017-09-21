<template>
    <div class="wrapper">
        <div class="hd">标题</div>
        <el-input placeholder="请输入内容" v-model="someProps.label"></el-input>
        <div class="hd">ID属性值</div>
        <el-input placeholder="请输入内容" v-model="someProps.id"></el-input>
        <div class="hd">默认值</div>
        <el-date-picker v-model="someProps.value" type="date" placeholder="选择日期"></el-date-picker>
    </div>
</template>

<script>
export default {
    name: 'editText',
    props: ['someProps']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

