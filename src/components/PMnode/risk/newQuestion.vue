<!-- risk1风险管理新建问题 -->
<template>
  <div class="container-risk1">
    <div class="leftBox">
      <div class="box-card">
        <div class="title">
          <i class="el-icon-menu icon"></i>
        </div>
        <ul class="statisticsList">
          <li>
            <span class="addicon">
              <img src="../../../assets/imgs/icon.jpg" alt>
            </span>
            <div class="addText">
              <span>本月新增问题</span>
              <span>({{thisMonthCount}}项)</span>
            </div>
          </li>
          <li>
            <span>
              <img src="../../../assets/imgs/img2.png" alt>
            </span>
            <span>待接收</span>
            <span>({{ingPageTotal}}项)</span>
          </li>
          <li>
            <span>
              <img src="../../../assets/imgs/img3.png" alt>
            </span>
            <span>进行中</span>
            <span>({{handlePageTotal}}项)</span>
          </li>
          <li>
            <span>
              <img src="../../../assets/imgs/img4.png" alt>
            </span>
            <span>已完成</span>
            <span>({{overPageTotal}}项)</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="rightBox">
      <div class="box-card">
        <!-- 日常管理 -->
        <div class="dayManagement" v-show="alteration">
          <div class="titleBg notice">
            新建问题
            <i class="el-icon-close" @click="close()"></i>
          </div>
          <el-row>
            <el-col :span="24">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="主题:">
                  <div class="originator">
                    <el-input v-model="form.theme"></el-input>
                  </div>
                </el-form-item>
                <el-form-item label="问题类型:">
                  <div class="originator question">
                    <el-select v-model="form.qt" placeholder="问题类型" @focus="getQuestionType">
                      <el-option v-for="item in questionType" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item label="发起人:">
                  <div class="originator">
                    <el-input v-model="form.initiator" :disabled="true"></el-input>
                  </div>
                </el-form-item>
                <el-form-item label="发起时间">
                  <div class="originator">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="form.startTime"
                      style="width: 100%;"
                    ></el-date-picker>
                  </div>
                </el-form-item>
                <el-form-item label="问题描述:">
                  <el-input type="textarea" v-model="form.describe" placeholder="请输入问题描述"></el-input>
                </el-form-item>
                <el-form-item label="现场照片:">
                  <ul class="uploadImg">
                    <li class="imgWrap">
                      <img src="../../../assets/imgs/img2.jpg" alt>
                    </li>
                    <li class="imgWrap">
                      <img src="../../../assets/imgs/img5.jpg" alt>
                    </li>
                  </ul>
                </el-form-item>
                <el-form-item label="模型视点:">
                  <div class="imgWrap model">
                    <img src="../../../assets/imgs/img.png" alt>
                  </div>
                </el-form-item>
                <el-form-item label="接收人:">
                  <div class="originator">
                    <el-select v-model="form.person" placeholder="接收人" @focus="getReceiver">
                      <el-option v-for="item in receiver" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item label="整改截止时间:">
                  <div class="originator">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="form.completionTime"
                      style="width: 100%;"
                    ></el-date-picker>
                  </div>
                </el-form-item>
                <el-form-item>
                  <div class="btn">
                    <el-button>取消</el-button>
                    <el-button type="primary" @click="onSubmit" :loading="loading">确认</el-button>
                  </div>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script type='textecmascript-6'>
import { PublishRisk, GetRiskTypeList, GetAllUserList, GetLoginUserInfo } from "@/api/api.js";
export default {
  data() {
    return {
      data: "",
      thisMonthCount: "",  //本月新问题数
      alteration: true, //变更弹框
      questionType: [],  //所有问题类型
      receiver: [],  //所有接收人
      form: {
        //form表单
        theme: "",
        qt: "",
        initiator: "",
        person: [],
        startTime: "",
        describe: "",
        completionTime: ""
      },
      loading: false
    };
  },
  beforeRouteEnter(to, from, next) {
      next(vm => {
          if (localStorage.getItem('userId') == "") {
              vm.$router.push("/login");
          }
      });
  },
  created(){
    this.getLoginUserInfoDate();
    this.thisMonthCount = this.$route.query.thisMonthCount;
    this.ingPageTotal = this.$route.query.ingPageTotal;
    this.handlePageTotal = this.$route.query.handlePageTotal;
    this.overPageTotal = this.$route.query.overPageTotal;
  },
  methods: {
    /**
     * 获取当前登录用户详情
     */
    getLoginUserInfoDate(){
      this.Request(
        GetLoginUserInfo({curUserId: localStorage.getItem('userId')}),  //当前用户ID
      ).then(data => {
        if (data.StatusCode === 200) {
          console.log("用户信息：", data);
          this.form.initiator = data.Detiel[0].loginUserInfo.cName
        } else {
          this.$message({
            type: "error",
            message: data.Message,
            center: "true"
          });
        }
      });
    },
    /**
     * 获取问题类型
     */
    getQuestionType(){
      this.Request(
        GetRiskTypeList({}),
      ).then(data => {
        if (data.StatusCode === 200) {
          this.questionType = [];
          for (let i = 0; i < data.Detiel.length; i++) {
            let Option1 = {};
            Option1.label = data.Detiel[i].text;
            Option1.value = data.Detiel[i].id;
            this.questionType.push(Option1);
          }
        } else {
          this.$message({
            type: "error",
            message: data.Message,
            center: "true"
          });
        }
      });
    },
    /**
     * 获取接收人数据
     */
    getReceiver(){
      this.Request(
        GetAllUserList({projectId: localStorage.getItem('projectid')}),
      ).then(data => {
        if (data.StatusCode === 200) {
          this.receiver = [];
          for (let i = 0; i < data.Detiel.length; i++) {
            let Option1 = {};
            Option1.label = data.Detiel[i].text;
            Option1.value = data.Detiel[i].id;
            this.receiver.push(Option1);
          }
        } else {
          this.$message({
            type: "error",
            message: data.Message,
            center: "true"
          });
        }
      });
    },
    close() {
      //关闭变更
      this.$router.go(-1);
    },
    onSubmit() {
      //表单提交
      // this.load() //调用加载中蒙层
      this.loading = true;
      let params = {
        CurUserID: Number(localStorage.getItem('userId')),  //当前用户ID
        ProjectID: localStorage.getItem('projectid'),  //项目ID
        Subject: this.form.theme,  //主题
        Category: "1",  //类别 1：质量 2：安全
        ProblemType: this.form.qt,  //问题类型
        Initiator: Number(localStorage.getItem('userId')),  //发起人ID
        InitiateTime: require('moment')(this.form.startTime).format('YYYY-MM-DD'),  //发起时间
        Problem: this.form.describe,  //问题描述
        DeadLine: require('moment')(this.form.completionTime).format('YYYY-MM-DD'),  //整改截止时间
        listViewpoints: [],  //视点列表
        PhotoList: [],  //上传问题照片列表
        ReceiverList: new Array(this.form.person)  //接收人列表
      }
      console.log("风险-发布问题：", params);
      this.Request(
        PublishRisk(params),
      ).then(data => {
        console.log("风险-", data);
        if (data.StatusCode === 200) {
          this.$router.push({ path: "/nav/to/risk" });
          this.$message({
            type: "success",
            message: "添加成功！",
            center: "true"
          });
        } else {
          this.$message({
            type: "error",
            message: data.Message,
            center: "true"
          });
        }
        // this.$toast.clear() //关闭加载中蒙层
        this.loading = false;
      });
    }
  },
  mounted(){
    
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.container-risk1 {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
}

.container-risk1 .el-form-item .el-form-item__label {
  width: 130px !important;
  margin-left: -20px !important;
}

.container-risk1 .el-form-item {
  width: 100%;
  height: auto !important;
}

.container-risk1 .statisticsList {
  position: absolute;
  bottom: 50px;
  right: 20px;
}

.container-risk1 .statisticsList li {
  display: flex;
  flex-flow: row;
  align-items: center;
  margin-bottom: 5px;
}

.container-risk1 .statisticsList li:first-child {
  margin-bottom: 20px;
}

.container-risk1 .statisticsList li span {
  font-size: 12px;
  color: #353535;
  margin-right: 10px;
}

.container-risk1 .statisticsList li .addicon {
  width: 26px !important;
  height: 33px !important;
  margin: 0 0px 0px 2px;
}

.container-risk1 .statisticsList li .addicon img {
  width: 20px !important;
  height: 33px !important;
}

.container-risk1 .statisticsList li .addText {
  display: flex;
  flex-flow: column;
  width: 100%;
  padding-left: 15px;
}

.container-risk1 .statisticsList li .addText span {
  display: block !important;
  width: 100% !important;
  height: 15px !important;
}

.container-risk1 .statisticsList li span:first-child {
  width: 26px;
  height: 26px;
  display: inline-block;
}

.container-risk1 .statisticsList li span:first-child img {
  width: 100%;
  height: 100%;
  display: inline-block;
}

.container-risk1 .imgWrap {
  float: left;
  margin-right: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;
}

.container-risk1 .imgWrap img {
  width: 160px;
  height: 120px;
  display: block;
}

.container-risk1 .model {
  width: 160px !important;
  height: 120px !important;
  display: block;
  background: #F8F8F8;
}

.container-risk1 .model img {
  width: 114px !important;
  height: 115px !important;
  display: block;
  padding: 5px 23px 0 23px;
}

.container-risk1 .el-date-editor--date .el-input__prefix {
  left: calc(100% - 30px) !important;
}

.container-risk1 .originator {
  float: left;
  width: 100%;
}

.container-risk1 .question {
  width: 260px !important;
}

.container-risk1 .el-select {
  width: 100%;
}

.container-risk1 .el-select .el-input__suffix {
  width: 0.666667rem;
  background: #435089;
  border-radius: 0 0.066667rem 0.066667rem 0;
  right: 0 !important;
}

.container-risk1 .question .el-select input {
  background: #fff !important;
}

.container-risk1 .el-step.is-horizontal .el-step__line {
  top: 0.25rem;
  background: #E5E5E5;
}

.container-risk1 .btn {
  padding: 20px 25% 20px 5%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-risk1 .el-step__icon.is-text {
  width: 40px;
  height: 40px;
  border: 1px solid #E5E5E5;
  background: #ddd;
}

.container-risk1 .el-step__main div {
  color: #333 !important;
}

.container-risk1 .el-button {
  width: 100px;
  color: #fff;
}

.container-risk1 .el-button--default {
  background: #999999;
}

.container-risk1 .el-button--default:focus, .container-risk1 .el-button--default:hover {
  background: #999999;
  color: #fff;
}

.container-risk1 .el-button--primary {
  background: #4775CA;
}

.container-risk1 .el-button--primary:focus, .el-button--primary:hover {
  background: #4775CA;
  color: #fff;
}

// 图标颜色
.container-risk1 .container-risk1 .icon {
  color: #ffa147;
}

.container-risk1 .titleBg {
  background: #44508a;
}

.container-risk1 .dayManagement {
  margin-bottom: 26px;
}

.container-risk1 .el-row .el-col-24 {
  font-size: 22px;
  color: #28292b;
}

.container-risk1 .dayManagement .el-row .el-col-24 {
  margin: 20px 0px;
}

.container-risk1 .notice {
  color: #fff;
  font-size: 20px;
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: center;
  position: relative;
}

.container-risk1 .notice i {
  font-size: 20px;
  position: absolute;
  right: 15px;
  line-height: 40px;
  cursor: pointer;
}

.container-risk1 .el-form {
  padding: 0 72px;
}

.container-risk1 .el-input {
}

.container-risk1 .el-input input, .container-risk1 .el-textarea .el-textarea__inner {
  background: #F8F8F8;
  color: #666;
  font-size: 16px;
}

.container-risk1 .el-input--prefix .el-input__inner {
  padding-left: 15px !important;
  padding-right: 15px !important;
}

.container-risk1 .el-select .el-input__inner {
  color: #333;
}

.container-risk1 .el-textarea .el-textarea__inner {
  min-height: 120px !important;
}

.container-risk1 .el-form-item__label {
  color: #333333;
  font-size: 18px;
}

.container-risk1 .leftBox, .container-risk1 .rightBox {
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  background: #f5f6fa;
}

.container-risk1 .add {
  width: 30px;
  height: 30px;
  border: 1px solid #435089;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-risk1 .add i {
  color: #435089;
  font-size: 18px;
}

.container-risk1 .leftBox {
  left: 0;
}

.container-risk1 .rightBox {
  right: 0;
}

.container-risk1 .leftBox .box-card {
  width: calc(100% - 30px);
  height: calc(100% - 42px);
  margin: 20px 10px 20px 20px;
}

.container-risk1 .rightBox .box-card {
  width: calc(100% - 30px);
  height: calc(100% - 42px);
  padding: 20px 20px 20px 10px;
  background: #f5f6fa;
  border: none;
  box-shadow: none;
  background: #fff;
  overflow: auto;
}
</style>