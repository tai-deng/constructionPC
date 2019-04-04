<template>
    <div class='container-projectMan-main'>
        <div class='projectMan_head'>
            <el-button class='add_btn_head' @click="returnProject()"> 
               <i class='icon_return'>
                   <img src="../../../../assets/imgs/project_return.png" alt="">
               </i>
               返回上一页
            </el-button>
            <el-input placeholder="请输入内容"   v-model="input_search" class="search_byHead">
              <el-button slot="append" style="border-radius:0px 4px 4px 0px;position:relative;top:2px;background-color:#435089;height:27px; "
                               @click="searchBtn()">
                    <img src="../../../../assets/imgs/search_grass.png" style="position:relative;top:-3px;" alt="">
              </el-button>
            </el-input>
            <el-button class="projectMan_right_btn" @click="addPeople()">新增人员</el-button>
        </div>

        <div class='projectMan_main_table'>
            <el-table :data="tableData"  style="width:100%"
                    :row-class-name="tableRowClassName" :header-cell-style="{'background-color':'#435089','color':'#ffffff'}">
                    <el-table-column align="center" label="序号" type="index"
                            :index="indexMethod"></el-table-column>
                    <el-table-column align="center" prop="name" label="姓名"></el-table-column> 
                    <el-table-column align="center" prop="phone" label="手机号"></el-table-column> 
                    <el-table-column align="center" prop="weixin" label="微信号"></el-table-column> 
                    <el-table-column align="center" prop="email" label="邮箱"></el-table-column> 
                    <el-table-column align="center" prop="number" label="用户账号"></el-table-column> 
                    <el-table-column align="center"  label="操作">
                        <template slot-scope="scope">
                            <span  class="peoject_table_span peoject_table_span_margin" @click='clickBywrite(scope.row)'>编辑 </span>
                            <span  class="peoject_table_span" @click='clickDisabled(scope.row)'>禁用 </span>
                        </template>
                    </el-table-column> 

            </el-table>
        </div>
        <div class="projectMan_main_table_foot">
            <pageList  :page="page"  @changPage="changPage"></pageList>
        </div>


        <!-- 新增模态框 -->
        <div v-if='showProjectMan' class='projectMan_module'>
            <div class='projectMan_body'>
                <div class="projectMan_body_title">
                    新增人员
                     <i><img  class="model_show_time_img" src="../../../../assets/imgs/close_model.png" alt="关闭模态框" @click="closeShowModel()"> </i>
                </div>
                <div class='projectMan_body_form_div'>
                    <el-form  label-position="right"  style="width:50%;margin-left:25%;padding-top:80px;font-size:18px;"
                            :model="peopleForm"   :rules="peopleFormRules" 
                            ref="peopleForm"   label-width="100px" 
                            class="demo-ruleForm"  :hide-required-asterisk='false'>

                        <el-form-item label="姓名" prop="name">
                                <el-input v-model="peopleForm.name"  placeholder="请输入真实姓名"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号" prop="phone">
                                <el-input v-model="peopleForm.phone"  placeholder="请输入手机号码"></el-input>
                        </el-form-item>
                        <el-form-item label="微信号" prop="weixin">
                                <el-input v-model="peopleForm.weixin"  placeholder="请输入微信号"></el-input>
                        </el-form-item>
                        <el-form-item label="邮箱" prop="email">
                                <el-input v-model="peopleForm.email"  placeholder="请输入邮箱号码"></el-input>
                        </el-form-item>
                        <el-form-item label="用户账号" prop="number">
                                <el-input v-model="peopleForm.number"  placeholder="请输入用户账号"></el-input>
                        </el-form-item>
                        <el-form-item  style='margin-top:80px;'>
                               <el-button class="projectMan_return_btn" @click="resetForm('peopleForm')">取消</el-button>
                               <el-button class="projectMan_submit_btn" @click="onSubmit('peopleForm')">确认</el-button>
                        </el-form-item>

                    </el-form>
                </div>

            </div>

        </div>

    </div>
</template>
<script>
import  pageList from '../modules/pageList'
export default {
    components:{pageList},
    data(){
        return{
            input_search:'', //搜索内容
            showProjectMan:false, //新增模态框显示
            //项目人员名单列表
            tableData:[{name:'张三',phone:'18684770664',weixin:'ycl396232695',email:'396232695@qq.com',number:'xiaomizaixian'},
                {name:'张三',phone:'18684770664',weixin:'ycl396232695',email:'396232695@qq.com',number:'xiaomizaixian'},
                {name:'张三',phone:'18684770664',weixin:'ycl396232695',email:'396232695@qq.com',number:'xiaomizaixian'} ],
            //新增人员表单
            peopleForm:{
                name:"",
                phone:'',
                weixin:'',
                email:'',
                number:'',
            },
            //新增人员表单--正则 /^[\u0391-\uFFE5A-Za-z]+$/
            peopleFormRules:{
                name:[{required: true, message: '请输入真实姓名', trigger: 'blur' }, 
                        { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' },
                        {pattern:/^[\u0391-\uFFE5A-Za-z]+$/,message: '姓名只可以输入中文/英文',trigger: 'blur' }],
                phone:[{required: true, message: '请输入手机号码', trigger: 'blur' },
                    {pattern:/^1[3|4|5|7|8][0-9]\d{8}$/,message: '手机号码格式不对',trigger: 'blur' }],
                weixin:[{required: true, message: '请输入微信号码', trigger: 'blur' },
                    {pattern: /^[a-zA-Z][a-zA-Z0-9_-]{5,19}$/,message: '微信号码格式不对',trigger: 'blur' }],
                email:[{required: true, message: '请输入邮箱', trigger: 'blur' },
                    {pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,message: '邮箱格式不对',trigger: 'blur' }],
                number:[{required: true, message: '请输入真实姓名', trigger: 'blur' }]

            },

            page:{  //父组件的值要传到子组件
                first:'上一页',
                last:'下一页',
                alltotal:10,//数据总条数
                currentPage:1,//当前页码
            },        

        }
    },
    methods:{
        //返回上一页--项目管理
        returnProject(){
            this.$router.push({path: '../project'})
        },
        //点击搜索框--按钮
        searchBtn(){

        },
        indexMethod(index){
            return index+1;
        },
        //表格单双隔层的颜色变化
        tableRowClassName({row, rowIndex}) {
            if (rowIndex%2 == 1) {
                return 'pojectMan_table_color';
            } else{
                return false;
            }
        },
        //表格操作--编辑
        clickBywrite(row){
            console.log(row);
        },
        //表格操作--禁用
        clickDisabled(row){
            console.log(row.name);

            this.$confirm('账户禁用以后，将无法登陆，是否确定禁用？', '禁用提示', {
                distinguishCancelAndClose: true,
                confirmButtonText: '禁用',
                cancelButtonText: '取消'
            }).then(() => {
                console.log('禁用');
           }).catch(action => {
                this.$message({
                    type: 'info',
                    message: action === 'cancel'? '放弃保存并离开页面': '停留在当前页面'
                })
            });


        },
        //关闭模态框
        closeShowModel(){
            this.showProjectMan=false;
        },
        //新增人员-按钮-打开模态框
        addPeople(){
            this.showProjectMan=true;
        },
        //表单重置按钮
        resetForm(formName){
            this.$refs[formName].resetFields();
        },
        //表单提交按钮
        onSubmit(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        //分页查询
        changPage(page){
            console.log(page);
        },

    },
}
</script>
<style lang="stylus" scoped>
.container-projectMan-main
    width 100%
    height 100%
    background-color #F5F6FA
    padding 20px
    box-sizing  border-box
    font-size 18px
    .projectMan_head
        width 100%
    .add_btn_head
        color #ffffff
        background-color #4775CA
        border-radius  5px
        height 40px
        vertical-align middle
        font-size 20px
        padding 0px 28px
        border 0
        line-height 40px
        .icon_return
            margin-right 10px
            display inline-block
            width 22px 
            height 22px
            position relative
            top -1px
    .search_byHead
        width 300px
        margin-left 20px
        overflow hidden
    .projectMan_right_btn
        background-color #FDA143
        color #ffffff
        border 0
        padding 12px 28px
        float right
        box-shadow 0px 2px 4px 0px rgba(176,148,119,0.5)
        border-radius 4px
    .projectMan_main_table
        width 100%
        margin-top 30px
        box-sizing border-box
        height 600px
        font-size 18px
    .peoject_table_span
        font-family SourceHanSansCN-Medium
        font-weight 500
        color rgba(69,128,255,1)
    .peoject_table_span_margin
        margin-right 40px
    .projectMan_main_table_foot
        text-align center
    .projectMan_module
        position fixed 
        top 0
        left 0
        width 100%
        height 100%
        z-index 20
        background rgba(121,121,121,0.4)
    .projectMan_body
        background-color #fff
        width 50%
        height 670px
        margin-left 25%
        margin-top 10%
        border-radius 6px
    .projectMan_body_title
        width 100%
        height 40px
        background linear-gradient(225deg,rgba(105,86,255,1) 0%,rgba(84,138,255,1) 100%)
        color #ffffff
        text-align center
        font-size 18px
        font-family SourceHanSansCN-Medium
        font-weight 600
        line-height 40px
    .model_show_time_img
        float right
        display inline-block
        width 18px
        height 18px
        margin-right 25px
        margin-top 10px
        cursor pointer
    .projectMan_body_form_div
        width 100%
        height 600px
    .projectMan_return_btn
        color #ffffff
        background-color #999999
        border-radius  5px
        height 48px
        vertical-align middle
        font-size 18px
        padding 0px 44px
        margin-left 10%
    .projectMan_submit_btn
        color #ffffff
        background-color #4775CA
        border-radius  5px
        height 48px
        vertical-align middle
        font-size 18px
        padding 0px 44px
        margin-left 30px

  
    



</style>
<style>
    .projectMan_main_table  .pojectMan_table_color {
        background:rgba(244,246,255,1);
    }
</style>



