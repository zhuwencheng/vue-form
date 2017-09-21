<template>
    <div class="wrapper">
        <slot></slot>
        <div class="hd">标题</div>
        <el-input placeholder="请输入内容" v-model="someProps.label"></el-input>
        <div class="hd">ID属性值</div>
        <el-input placeholder="请输入内容" v-model="someProps.id"></el-input>
        <div class="hd">默认值</div>
        <el-input placeholder="请输入内容" v-model="someProps.value"></el-input>
    </div>
</template>

<script>
export default {
    name: 'editText',
    props: ['someProps']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

