<template>
  <div class="container-projectMan-main">
    <div class="projectMan_head">
      <el-button class="add_btn_head" @click="returnProject()">
        <i class="icon_return">
          <img src="../../../../assets/imgs/project_return.png" alt>
        </i>
        返回上一页
      </el-button>
      <el-input placeholder="请输入内容" v-model="input_search" class="search_byHead">
        <el-button
          slot="append"
          style="border-radius:0px 4px 4px 0px;position:relative;top:2px;background-color:#435089;"
          @click="searchBtn()"
        >
          <img src="../../../../assets/imgs/search_grass.png" style="position:relative;" alt>
        </el-button>
      </el-input>
      <el-button class="projectMan_right_btn" @click="addPeople()">新增人员</el-button>
    </div>

    <div class="projectMan_main_table">
      <el-table
        :data="tableData"
        v-loading="loading"
        style="width:100%"
        :row-class-name="tableRowClassName"
        :header-cell-style="{'background-color':'#435089','color':'#ffffff'}"
      >
        <el-table-column align="center" label="序号" width="160px" type="index" :index="indexMethod"></el-table-column>
        <el-table-column align="center" prop="cName" label="姓名"></el-table-column>
        <el-table-column align="center" prop="cPhone" label="手机号"></el-table-column>
        <el-table-column align="center" prop="WeChatNo" label="微信号"></el-table-column>
        <el-table-column align="center" prop="Email" label="邮箱"></el-table-column>
        <el-table-column align="center" prop="cUserName" label="用户账号"></el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <span
              class="peoject_table_span peoject_table_span_margin"
              @click="addPeople(scope.row,scope.$index)"
            >编辑</span>
            <!-- <span
              class="peoject_table_span"
              v-if="!scope.row.bDelFlag"
              style="color:red"
              @click="clickDisabled(scope.row,false)"
            >禁用</span>
            <span class="peoject_table_span" v-else @click="clickDisabled(scope.row,true)">启用</span>-->
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="projectMan_main_table_foot">
      <pageList :page="page" @changPage="changPage"></pageList>
    </div>

    <!-- 新增模态框 -->
    <div v-if="showProjectMan" class="projectMan_module">
      <div class="projectMan_body">
        <div class="projectMan_body_title">
          {{isEditor?'编辑人员':'新增人员'}}
          <i>
            <img
              class="model_show_time_img"
              src="../../../../assets/imgs/close_model.png"
              alt="关闭模态框"
              @click="closeShowModel()"
            >
          </i>
        </div>
        <div class="projectMan_body_form_div">
          <el-form
            label-position="right"
            style="width:50%;margin-left:25%;padding-top:60px;font-size:18px;"
            :model="peopleForm"
            :rules="peopleFormRules"
            ref="peopleForm"
            label-width="100px"
            class="demo-ruleForm"
            :hide-required-asterisk="false"
          >
            <!-- <el-form-item label="所属公司">
              <el-select v-model="peopleForm.company" placeholder="选择所属公司">
                <el-option :label="itemCompany.Name" :value="itemCompany.ID" v-for="itemCompany in orgList" :key="itemCompany.index"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="所属部门">
              <el-select v-model="peopleForm.department" placeholder="选择所属部门">
                <el-option :label="itemDepartment.text" :value="itemDepartment.id" v-for="itemDepartment in departmentList" :key="itemDepartment.index"></el-option>
              </el-select>
            </el-form-item>-->
            <el-form-item label="姓名" prop="cName">
              <el-input v-model="peopleForm.cName" placeholder="请输入真实姓名"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
              <el-input v-model="peopleForm.phone" placeholder="请输入手机号码"></el-input>
            </el-form-item>
            <el-form-item label="微信号" prop="weixin">
              <el-input v-model="peopleForm.weixin" placeholder="请输入微信号"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="peopleForm.email" placeholder="请输入邮箱号码"></el-input>
            </el-form-item>
            <el-form-item label="用户账号" prop="number">
              <el-input v-model="peopleForm.number" placeholder="请输入用户账号"></el-input>
            </el-form-item>
            <!-- <el-form-item label="所负责区域">
              <el-select v-model="peopleForm.area" placeholder="选择所负责区域">
                <el-option :label="itemArea.text" :value="itemArea.id" v-for="itemArea in areaList" :key="itemArea.index"></el-option>
              </el-select>
            </el-form-item>-->
            <el-form-item style="margin-top:40px;">
              <el-button class="projectMan_return_btn" @click="closeShowModel">取消</el-button>
              <el-button class="projectMan_submit_btn" @click="onSubmit('peopleForm')">确认</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import pageList from "../components/pageList.vue";
import {
  GetUserList,
  DisableUserByIds,
  EnableUserByIds,
  GetOrgList,
  GetDeptList,
  GetBuilding,
  AddUser,
  MdfUser
} from "@/api/api.js";
import { infaces } from "../modules/interfaces.js";
// vuex
// import { mapMutations } from "vuex";
export default {
  components: { pageList },
  data() {
    return {
      input_search: "", //搜索内容
      showProjectMan: false, //新增模态框显示
      //项目人员名单列表
      tableData: [],
      loading:true,//蒙层
      orgList: [], //公司列表
      departmentList: [], //部门列表
      areaList: [], //负责区域列表
      isEditor: false, //false为新增人员，true为编辑人员
      //新增人员表单
      peopleForm: {
        company: "",
        department: "",
        cName: "",
        phone: "",
        weixin: "",
        email: "",
        number: "",
        area: "",
        ID: "",
        UserType: "1" //用户类型（0普通人员1管理人员）
      },
      //新增人员表单--正则 /^[\u0391-\uFFE5A-Za-z]+$/
      peopleFormRules: {
        company: [{ required: true, message: "请选择公司", trigger: "change" }],
        department: [
          { required: true, message: "请选择部门", trigger: "change" }
        ],
        cName: [
          { required: true, message: "请输入真实姓名", trigger: "blur" },
          {
            min: 2,
            max: 30,
            message: "长度在 2 到 30 个字符",
            trigger: "blur"
          },
          {
            pattern: /^[\u0391-\uFFE5A-Za-z]+$/,
            message: "姓名只可以输入中文/英文",
            trigger: "blur"
          }
        ],
        phone: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          {
            pattern: /^1[3|4|5|7|8][0-9]\d{8}$/,
            message: "手机号码格式不对",
            trigger: "blur"
          }
        ],
        weixin: [
          { required: true, message: "请输入微信号码", trigger: "blur" }
          // {
          //   pattern: /^[a-zA-Z][a-zA-Z0-9_-]{5,19}$/,
          //   message: "微信号码格式不对",
          //   trigger: "blur"
          // }
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
            message: "邮箱格式不对",
            trigger: "blur"
          }
        ],
        number: [
          { required: true, message: "请输入真实姓名", trigger: "blur" }
        ],
        area: [
          { required: true, message: "请选择部负责区域", trigger: "change" }
        ]
      },

      page: {
        //父组件的值要传到子组件
        first: "上一页",
        last: "下一页",
        alltotal: 0, //数据总条数
        currentPage: 1, //当前页码
        currentSize: 14
      }
    };
  },
  created() {
    this._initData();
  },
  // computed:{
  //   company(){
  //     return this.peopleForm.company
  //   }
  // },
  // watch:{
  //   company(orgId){
  //     if(!orgId) return
  //     this.getDept(orgId)
  //   }
  // },
  methods: {
    _initData() {
      // this.modelBox({
      //   isShowModel:false,//是否显示模型 true:显示模型，如果模型已加载，则显示  false:隐藏模型
      //   isLoadModel:true,//是否加载模型  true：加载模型，如果已经加载，不会重新加载，  false:卸载模型
      // })
      this.getUser();
      // this.getOrg()
      // this.getBuild()
    },
    // ...mapMutations({
    //   modelBox: "GET_MODEL_BOX"
    // }),
    /**
     * 获取公司列表
     */
    getOrg() {
      let params = {
        projectId: localStorage.getItem("projectid")
      };
      infaces(this, GetOrgList, params).then(res => {
        console.log(res);
        this.orgList = res.Detiel;
      });
    },
    /**
     * 获取楼栋列表
     */
    getBuild() {
      let params = {
        projectId: localStorage.getItem("projectid")
      };
      infaces(this, GetBuilding, params).then(res => {
        console.log(res);
        this.areaList = res.Detiel;
      });
    },
    /**
     * 按公司获取部门数据列表
     */
    getDept(orgId) {
      let params = {
        orgId
      };
      infaces(this, GetDeptList, params).then(res => {
        console.log(res);
        this.departmentList = res.Detiel;
      });
    },
    /**
     * 获取用户列表
     */
    getUser() {
      let params = {
        projectId: localStorage.getItem("projectid"),
        keyword: this.input_search,
        pageIndex: this.page.currentPage,
        pageSize: this.page.currentSize,
        UserType: "1" //用户类型（0普通人员1管理人员）
      };
      infaces(this, GetUserList, params).then(res => {
        console.log(res);
        this.tableData = res.Detiel;
        this.loading = false //关闭蒙层
        this.page.alltotal = res.Count;
      });
    },
    //返回上一页--项目管理
    returnProject() {
      this.$router.push({ path: "../project" });
    },
    //点击搜索框--按钮
    searchBtn() {
      console.log("搜索", this.input_search);
      this.page.currentPage = 1;
      this.getUser();
    },
    indexMethod(index) {
      return index + 1;
    },
    //表格单双隔层的颜色变化
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 1) {
        return "pojectMan_table_color";
      } else {
        return false;
      }
    },
    //表格操作--编辑
    // clickBywrite(row,i) {
    //   console.log(row,i);
    //   this.editorUser = row

    //   // this.i = i
    // },
    //表格操作--编辑完成
    // clickByOK(row,i) {
    //   console.log(row,i);
    //   console.log(this.$resf[`fon${i}`])
    // },
    //表格操作--禁用
    clickDisabled(row, bDelFlag) {
      console.log(row.cName);
      if (bDelFlag) {
        this.$confirm("是否启用该用户？", "启用提示", {
          distinguishCancelAndClose: true,
          confirmButtonText: "启用",
          cancelButtonText: "取消"
        }).then(() => {
          console.log("启用");
          let params = {
            ids: row.ID
          };
          infaces(this, EnableUserByIds, params).then(res => {
            console.log(res);
            this.getUser();
            this.$message({
              type: "success",
              message: "禁用成功",
              center: "true"
            });
          });
        });
      } else {
        this.$confirm("账户禁用以后，将无法登陆，是否确定禁用？", "禁用提示", {
          distinguishCancelAndClose: true,
          confirmButtonText: "禁用",
          cancelButtonText: "取消"
        }).then(() => {
          console.log("禁用");
          let params = {
            ids: row.ID
          };
          infaces(this, DisableUserByIds, params).then(res => {
            console.log(res);
            this.getUser();
            this.$message({
              type: "success",
              message: "禁用成功",
              center: "true"
            });
          });
        });
      }
    },
    //关闭模态框
    closeShowModel() {
      this.showProjectMan = false;
      this.peopleForm = {
        company: "",
        department: "",
        cName: "",
        phone: "",
        weixin: "",
        email: "",
        number: "",
        area: ""
      };
      // this.orgList=[]//公司列表
      // this.departmentList=[]//部门列表
      // this.areaList=[]//负责区域列表
    },
    //新增人员或编辑人员-按钮-打开模态框
    addPeople(row, i) {
      console.log(row, i);
      this.showProjectMan = true;
      this.isEditor = false;
      if (i || i == 0) {
        this.isEditor = true;
        console.log("编辑");
        this.peopleForm.number = row.UserName;
        this.peopleForm.cName = row.Name || row.cName;
        this.peopleForm.phone = row.Tel || row.cPhone;
        this.peopleForm.email = row.Email;
        this.peopleForm.weixin = row.WeChatNo;
        this.peopleForm.number = row.cUserName;
        this.peopleForm.department = row.iSys_Dep_ID;
        this.peopleForm.company = row.iSys_Company_ID;
        this.peopleForm.area = row.Building;
        this.peopleForm.ID = row.ID;
      }
    },
    //表单重置按钮
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //表单提交按钮
    onSubmit(formName) {
      console.log("aaaa");

      let infaceName = "";
      if (!this.isEditor) {
        infaceName = AddUser;
      } else {
        infaceName = MdfUser;
      }

      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.peopleForm);
          // this.load();
          //新增用户
          let params = {
            CurUserID: this.peopleForm.ID || "",
            ProjectID: localStorage.getItem("projectid") || "",
            UserName: this.peopleForm.number,
            Name: this.peopleForm.cName,
            Tel: this.peopleForm.phone,
            Email: this.peopleForm.email,
            WeChatNo: this.peopleForm.weixin,
            iSys_Dep_ID: this.peopleForm.department,
            iSys_Company_ID: this.peopleForm.company,
            Building: this.peopleForm.area,
            UserType: this.peopleForm.UserType //用户类型（0普通人员1管理人员）
          };
          infaces(this, infaceName, params).then(res => {
            console.log(res);
            this.$message({
              type: "success",
              message: this.isEditor ? "编辑成功" : "添加成功",
              center: "true"
            });
            this.getUser();
            this.closeShowModel();
          });
        } else {
          this.$message({
            type: "error",
            message: this.isEditor ? "编辑失败" : "添加失败",
            center: "true"
          });
          console.log("error submit!!");
          return false;
        }
        // this.$toast.clear();
      });
    },
    //分页查询
    changPage(page) {
      console.log(page);
      this.page.currentPage = page;
      this.getUser();
      this.i = -1;
    }
  }
};
</script>
<style lang="stylus" scoped>
.container-projectMan-main
  width 100%
  height 100%
  background-color #F5F6FA
  padding 20px
  box-sizing border-box
  font-size 18px
  .projectMan_head
    width 100%
  .add_btn_head
    color #ffffff
    background-color #4775CA
    border-radius 5px
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
    box-shadow 0px 2px 4px 0px rgba(176, 148, 119, 0.5)
    border-radius 4px
  .projectMan_main_table
    width 100%
    margin 30px 0
    box-sizing border-box
    font-size 18px
  .peoject_table_span
    font-family SourceHanSansCN-Medium
    font-weight 500
    color rgba(69, 128, 255, 1)
  .projectMan_main_table_foot
    text-align center
  .projectMan_module
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    z-index 200
    background rgba(121, 121, 121, 0.4)
  .projectMan_body
    background-color #fff
    width 50%
    height 670px
    margin-left 25%
    margin-top 6%
    border-radius 6px
  .projectMan_body_title
    width 100%
    height 40px
    background linear-gradient(225deg, rgba(105, 86, 255, 1) 0%, rgba(84, 138, 255, 1) 100%)
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
    border-radius 5px
    height 48px
    vertical-align middle
    font-size 18px
    padding 0px 44px
    margin-left 10%
  .projectMan_submit_btn
    color #ffffff
    background-color #4775CA
    border-radius 5px
    height 48px
    vertical-align middle
    font-size 18px
    padding 0px 44px
    margin-left 30px
</style>
<style>
.projectMan_main_table .pojectMan_table_color {
  background: rgba(244, 246, 255, 1);
}
.projectMan_body_form_div .el-select {
  width: 100%;
}
.projectMan_body_form_div .el-select .el-input__suffix {
  right: 0;
  background: rgba(67, 80, 137, 1);
  border-radius: 0px 4px 4px 0px;
  width: 50px;
  color: white;
}
.projectMan_main_table .el-table__body-wrapper {
  min-height: 650px;
}
.container-projectMan-main .el-input.el-input-group.el-input-group--append {
  border-radius: 0 6px 6px 0;
}
</style>



