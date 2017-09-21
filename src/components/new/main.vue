<template>
    <div class="newform">
        <div class="topdes">表单设计器 beta 1.0 --by zwc</div>
        <div class="leftsidebar">
            <div class="hd">基础字段
                <span class="c-999">(双击添加)</span>
            </div>
            <ul>
                <li v-for="item in defaultFormType" @dblclick="add(item)">{{item.label}}</li>
            </ul>
        </div>
        <div class="rightsidebar">
            <div class="title">控件属性</div>
            <component v-bind:is="mainData[activeIndex].editCom" :some-props.sync="currentItemDate" v-if="activeIndex!=undefined">
            </component>
        </div>
        <div class="centerForm">
            <div class="tool-btn">
                <el-input placeholder="请输入内容" v-model="formTitle" style="float:left" size="small"></el-input>
                <el-button type="success" size="small" icon="search" @click="openDialog">预览</el-button>
                <el-button type="primary" size="small" icon="document">保存</el-button>
            </div>
            <div class="c-form-wrapper">
                <!--组件区域-->
                <div :class="[{ 'widget-select': index==activeIndex}, 'widget-view']" v-for="(item,index) in mainData" :key="index" @click="setActiveIndex(index)">
                    <div class="fl-label">
                        <span class="label-title">{{item.label}}</span>
                    </div>
                    <CenterForm :some-props="item"></CenterForm>
                    <div class="form-widget-mask">
                        <i class="el-icon-delete" @click.stop="deleteItem(index)"></i>
                    </div>
                </div>
                <!--组件区域-->
            </div>
        </div>
        <!--预览弹窗-->
        <el-dialog :title="formTitle" :visible.sync="dialogVisible">
            <Preview :some-props.sync="copyMainData"></Preview>
        </el-dialog>
    </div>
</template>

<script>
import centerForm from './centerform';
import textEdit from './editform/text';
import textAreaEdit from './editform/textarea';
import numberEdit from './editform/number';
import dateEdit from './editform/date';
import radioEdit from './editform/radio';
import checkboxEdit from './editform/checkbox';
import selectEdit from './editform/select';
import preview from './preview';
export default {
    name: 'hello',
    data() {
        return {
            defaultFormType: [
                { label: '单行文本', value: '', id: '', type: 'text', editCom: 'TextEdit' },
                { label: '多行文本', value: '', id: '', type: 'textarea', editCom: 'TextAreaEdit' },
                { label: '数字', value: '', id: '', type: 'number', editCom: 'NumberEdit' },
                { label: '日期', value: '', id: '', type: 'date', editCom: 'dateEdit' },
                { label: '单选按钮组', value: '选项1', id: '', type: 'radio', list: [{ label: '选项1' }, { label: '选项2' }], editCom: 'radioEdit' },
                { label: '多选按钮组', value: [], id: '', type: 'checkbox', list: [{ label: '选项1' }, { label: '选项2' }], editCom: 'checkboxEdit' },
                { label: '下拉框选项', value: '', id: '', type: 'select', list: [{ label: '选项1' }, { label: '选项2' }], editCom: 'selectEdit' }
            ],
            mainData: [],
            activeIndex: null,
            currentView: 'TextEdit',
            dialogVisible: false,
            formTitle:'未命名表单'
        }
    },
    methods: {
        add(item) {
            const newItem = Object.assign({}, item);
            //JSON.parse(JSON.stringify(this.templateData))
            this.mainData.push(newItem);
            this.activeIndex = this.mainData.length - 1;
        },
        deleteItem(index) {
            this.mainData.splice(index, 1);
            this.activeIndex = this.mainData.length - 1;
        },
        setActiveIndex(index) {
            this.activeIndex = index;
        },
        openDialog() {
            if (this.mainData.length > 0) {
                this.dialogVisible = true;
            } else {
                this.$message('请先添加表单控件！');
            }
        }
    },
    components: {
        CenterForm: centerForm,
        TextEdit: textEdit,
        TextAreaEdit: textAreaEdit,
        NumberEdit: numberEdit,
        DateEdit: dateEdit,
        RadioEdit: radioEdit,
        CheckboxEdit: checkboxEdit,
        SelectEdit: selectEdit,
        Preview: preview
    },
    computed: {
        // a computed getter
        currentItemDate: function () {
            return this.mainData[this.activeIndex];
        },
        copyMainData: function(){
            return JSON.parse(JSON.stringify(this.mainData));
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import 'main.less';
</style>
