<!-- 范围管理scope -->
<template>
  <div class="initiateChange">
    <div class="leftBox">
      <div class="box-card">
        <div class="title">
          <i class="el-icon-menu icon"></i>
        </div>
        <!-- 模型box -->
        <div class="model-container">
          <div ref="modelContainer" class="model-container"></div>
        </div>
      </div>
    </div>
    <div class="rightBox">
      <div class="box-card">
        <!-- 日常管理 -->
        <div class="dayManagement" v-show="alteration">
          <div class="titleBg notice">
            发起变更
            <i class="el-icon-close" @click="close()"></i>
          </div>
          <el-row>
            <el-col :span="24">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="编码:">
                  <el-input v-model="form.code"></el-input>
                </el-form-item>
                <el-form-item label="主题:">
                  <el-input v-model="form.theme" placeholder="请输入主题(最多30个字)"></el-input>
                </el-form-item>
                <el-form-item label="变更类型:">
                  <el-input v-model="form.changeType"></el-input>
                </el-form-item>
                <el-form-item label="选择:">
                  <div class="changeflowBox">
                    <div class="workflow1">
                      <el-select v-model="form.change1" placeholder="选择楼栋">
                        <el-option label="1" value="1"></el-option>
                        <el-option label="2" value="2"></el-option>
                      </el-select>
                    </div>
                    <div class="workflow1">
                      <el-select v-model="form.change2" placeholder="选择专业">
                        <el-option label="专业" value="专业"></el-option>
                        <el-option label="专业" value="专业"></el-option>
                      </el-select>
                    </div>
                    <div class="workflow1">
                      <el-select v-model="form.change3" placeholder="选择楼层">
                        <el-option label="1" value="1"></el-option>
                        <el-option label="2" value="2"></el-option>
                      </el-select>
                    </div>
                  </div>
                </el-form-item>
                <el-form-item label="详细位置:">
                  <el-input type="textarea" v-model="form.place"></el-input>
                </el-form-item>
                <el-form-item label="发起时间">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="form.startTime"
                    style="width: 100%;"
                  ></el-date-picker>
                </el-form-item>
                <el-form-item label="发起人:">
                  <el-input v-model="form.people"></el-input>
                </el-form-item>
                <el-form-item label="变更内容:">
                  <el-input type="textarea" v-model="form.content"></el-input>
                </el-form-item>
                <el-form-item label="模型视点:">
                  <div class="wrap">
                    <div class="upload">
                      <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview1"
                        :on-remove="handleRemove1"
                        multiple
                        :limit="3"
                      >
                        <i>
                          <img src="../../../assets/imgs/camera.png" alt sizes srcset>
                        </i>
                      </el-upload>
                    </div>
                    <el-dialog :visible.sync="dialogVisible1">
                      <img width="100%" :src="dialogImageUrl1" alt>
                    </el-dialog>
                    <span class="tip">(最多关联3张)</span>
                  </div>
                </el-form-item>
                <el-form-item label="现场照片:">
                  <div class="wrap">
                    <div class="upload">
                      <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview2"
                        :on-remove="handleRemove2"
                        multiple
                        :limit="6"
                      >
                        <i class="el-icon-plus"></i>
                      </el-upload>
                    </div>
                    <el-dialog :visible.sync="dialogVisible2">
                      <img width="100%" :src="dialogImageUrl2" alt>
                    </el-dialog>
                    <span class="tip">(最多上传6张)</span>
                  </div>
                </el-form-item>
                <el-form-item label="构件关联:">
                  <span class="relevance">
                    <img src="../../../assets/imgs/allRelation.png">
                  </span>
                </el-form-item>
                <el-form-item label="工作流程:"></el-form-item>
                <el-form-item>
                  <div class="workflowBox">
                    <div class="workflow1">
                      <el-select v-model="form.priority" placeholder="优先级">
                        <el-option label="优先级" value="shanghai"></el-option>
                        <el-option label="优先级" value="beijing"></el-option>
                      </el-select>
                    </div>
                    <div class="workflow2">
                      <el-select v-model="form.unit" placeholder="责任单位">
                        <el-option label="责任单位" value="shanghai"></el-option>
                        <el-option label="责任单位" value="beijing"></el-option>
                      </el-select>
                    </div>
                    <div class="workflow1">
                      <el-select v-model="form.department" placeholder="岗位部门">
                        <el-option label="岗位部门" value="shanghai"></el-option>
                        <el-option label="岗位部门" value="beijing"></el-option>
                      </el-select>
                    </div>
                    <div class="workflow1">
                      <el-select v-model="form.personnel" placeholder="人员">
                        <el-option label="人员" value="shanghai"></el-option>
                        <el-option label="人员" value="beijing"></el-option>
                      </el-select>
                    </div>
                    <span class="add" @click="addData()">
                      <img src="../../../assets/imgs/add.png" alt>
                    </span>
                  </div>
                </el-form-item>
                <div v-show="dataList">
                  <el-form-item>
                    <div class="bg">
                      <div>
                        <span></span>
                      </div>
                      <div>
                        <span></span>
                      </div>
                      <div>
                        <span></span>
                      </div>
                      <div>
                        <span></span>
                      </div>
                    </div>
                    <ul class="dataList">
                      <li v-for="(item,index) in arrData" v-bind:key="index">
                        <div class="ordinal">
                          <span>{{index+1}}</span>
                        </div>
                        <div class="dataContent">
                          <span>{{item.name1}}</span>
                          <span class="unit">{{item.name2}}</span>
                          <span>{{item.name3}}</span>
                        </div>
                        <div class="dataBtn">
                          <span class="sortDown"></span>
                          <span class="sortUp"></span>
                          <span class="del"></span>
                        </div>
                      </li>
                    </ul>
                  </el-form-item>
                </div>
                <div class="item" v-show="dataStep">
                  <el-form-item>
                    <el-steps align-center>
                      <el-step title="建设单位" description="工程部"></el-step>
                      <el-step title="设计单位" description="工程部"></el-step>
                      <el-step title="建设单位" description="工程部"></el-step>
                      <el-step title="施工单位" description="工程部"></el-step>
                    </el-steps>
                  </el-form-item>
                </div>
                <el-form-item>
                  <div class="btn">
                    <el-button>取消</el-button>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
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
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      data: "",
      alteration: true, //变更弹框
      form: {
        //form表单
        code: "",
        theme: "",
        changeType: "",
        content: "",
        people: "",
        priority: "",
        unit: "",
        department: "",
        personnel: ""
      },
      dataList: false,
      dataStep: false,
      arrData: [
        {
          name1: "李白白",
          name2: "张三",
          name3: "李四"
        }
      ],
      arrData1: [
        {
          name1: "李白白",
          name2: "张三",
          name3: "李四"
        },
        {
          name1: "李白白",
          name2: "张三",
          name3: "李四"
        },
        {
          name1: "李白白",
          name2: "张三",
          name3: "李四"
        }
      ],
      dialogImageUrl1: "", //视点图片
      dialogImageUrl2: "", //上传凭证
      dialogVisible1: false, //视点图片列表
      dialogVisible2: false //上传凭证图片列表
    };
  },
  methods: {
    _initData() {
      /**
       * 模型状态管理
       */
      console.log("aaa");
      this.$nextTick(() => {
        this.$util.getDomLocation(this, "modelContainer").then(res => {
          console.log(res);
          this.modelBox({
            isShowModel: true, //是否显示模型 true:显示模型，如果模型已加载，则显示  false:隐藏模型
            isLoadModel: true, //是否加载模型  true：加载模型，如果已经加载，不会重新加载，  false:卸载模型
            top: res.top, //距离顶部距离‘px'
            left: res.left, //距离左边距离‘px'
            width: res.width, //模型宽‘px'
            height: res.height, //模型高 ‘px'
            zIndex: 100, //模型层级
            background: "",
            ElementIDs: [], // 所有要显示的构件数组，包括半隐藏构件
            highLightElementIDs: [], // 高亮显示的构件
            functionNumber: [] // 需要模型调用的函数编号数组
          });
        });
      });
    },
    ...mapMutations({
      modelBox: "GET_MODEL_BOX"
    }),
    // 添加流程
    addData() {
      this.dataList = true;
      this.dataStep = false;
      for (var i = 0; i < this.arrData1.length; i++) {
        this.arrData.push(this.arrData1[i]);
      }
    },
    close() {
      //关闭变更
      this.$router.go(-1);
    },
    onSubmit() {
      //表单提交
      this.dataList = false;
      this.dataStep = true;
      console.log("submit!");
    },
    // 视点
    handleRemove1(file, fileList) {
      //图标删除
      console.log(file, fileList);
    },
    handlePictureCardPreview1(file) {
      //点击文件列表中已上传的文件
      this.dialogImageUrl1 = file.url;
      this.dialogVisible1 = true;
    },
    //上传凭证
    handleRemove2(file, fileList) {
      //图标删除
      console.log(file, fileList);
    },
    handlePictureCardPreview2(file) {
      //点击文件列表中已上传的文件
      this.dialogImageUrl2 = file.url;
      this.dialogVisible2 = true;
    }
  },
  mounted() {
    this._initData();
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.initiateChange {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
}

.model-container {
  width: 98%;
  height: 966px;
  padding: 0 !important;
  z-index: 90;
}

.initiateChange .dataList {
  background: #EFF3FF;
  display: flex;
  flex-flow: column;
  margin: -30px 0 0 -100px;
  padding: 20px;
}

.initiateChange .bg {
  height: 40px;
  margin-left: -80px;
  display: flex;
}

.initiateChange .bg div {
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row;
}

.initiateChange .bg div span {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #eff3ff;
}

.initiateChange .changeType {
  width: 100%;
}

.initiateChange .changeType .el-select {
  width: 100%;
}

.initiateChange .el-date-editor--date .el-input__prefix {
  left: calc(100% - 30px) !important;
}

.initiateChange .dataList li {
  display: flex;
  flex-flow: row;
  justify-content: flex-end;
  align-content: center;
  margin-left: 14%;
  height: 40px;
  margin-bottom: 20px;
}

.initiateChange .dataList li:last-child {
  margin-bottom: 0px;
}

.initiateChange .dataList li .ordinal {
  display: flex;
  align-items: center;
  margin-right: 20px;
  position: relative;
}

.initiateChange .dataList li .ordinal span {
  background: #4775C9;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
}

.initiateChange .dataList li .ordinal span:before {
  content: '';
  position: absolute;
  top: 31px;
  background: #435089;
  width: 1px;
  height: 38px;
}

.initiateChange .dataList li:last-child .ordinal span:before {
  content: '';
  position: absolute;
  top: 31px;
  background: none;
  width: 0;
  height: 0;
}

.initiateChange .add {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.initiateChange .add img {
  width: 100%;
  height: 100%;
}

.initiateChange .dataList li .dataContent {
  background: #ffffff;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.initiateChange .dataList li .dataContent span {
  background: #ffffff;
  width: 33.33%;
  text-align: center;
  margin: 5px 0;
  height: 30px;
  line-height: 30px;
}

.initiateChange .dataList li .dataContent .unit {
  border-left: 1px dashed #979797;
  border-right: 1px dashed #979797;
}

.initiateChange .dataBtn {
  width: auto;
  display: flex;
  justify-content: flex-end;
  margin-left: 10px;
}

.initiateChange .dataBtn span {
  width: 40px;
  height: 40px;
  display: inline-block;
  margin-left: 10px;
  background-size: 100% 100%;
  cursor: pointer;
}

.initiateChange .sortDown {
  background: url('../../../assets/imgs/down.jpg') no-repeat center center;
  background-size: 100% 100%;
}

.initiateChange .sortUp {
  background: url('../../../assets/imgs/up.jpg') no-repeat center center;
  background-size: 100% 100%;
}

.initiateChange .del {
  background: url('../../../assets/imgs/del_model.png') no-repeat center center;
}

.initiateChange .el-form-item {
  width: 100%;
  height: auto !important;
}

.initiateChange .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.initiateChange .el-upload--picture-card {
  background: #F8F8F8 !important;
  width: 132px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.initiateChange .avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.initiateChange .el-form-item__content .tip {
  color: #999999;
  font-size: 18px;
  padding-left: 10px;
  display: inline-block;
  vertical-align: bottom;
}

.initiateChange .upload {
  display: inline-block;
}

.originator, .wrap {
  float: left;
}

.initiateChange .workflowBox {
  display: flex;
  flex-flow: row;
  align-items: center;
  float: left;
  margin: -20px 0 0 -90px;
}

.initiateChange .changeflowBox {
  display: flex;
  flex-flow: row;
  align-items: center;
  float: left;
  width: 100%;
}

.initiateChange .changeflowBox .workflow1 {
  margin-right: 20px;
  width: 100%;
}

.initiateChange .changeflowBox .workflow1:last-child {
  margin-right: 0;
}

.initiateChange .changeflowBox .workflow1 .el-select {
  width: 100%;
}

.initiateChange .workflowBox .workflow1 {
  width: 22%;
  margin-right: 9px;
}

.initiateChange .workflowBox .workflow2 {
  width: 34%;
  margin-right: 9px;
}

.initiateChange .el-select .el-input__suffix {
  width: 0.666667rem;
  background: #435089;
  border-radius: 0 0.066667rem 0.066667rem 0;
  right: 0 !important;
}

.initiateChange .el-select input {
  background: #fff !important;
}

.initiateChange .el-step.is-horizontal .el-step__line {
  top: 0.25rem;
  background: #E5E5E5;
  height: 1px;
}

.initiateChange .el-steps--horizontal {
  margin: 0 0 0 -100px;
}

.initiateChange .relevance {
  width: 64px;
  height: 40px;
  border: 1px solid #E5E5E5;
  background: #F8F8F8;
  display: flex;
  align-items: center;
  justify-content: center;
}

.initiateChange .btn {
  margin: 20px 0 20px -80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.initiateChange .relevance {
  color: #435089;
  font-size: 18px;
}

.initiateChange .el-step__icon.is-text {
  width: 40px;
  height: 40px;
  border: 1px solid #E5E5E5;
  background: #F8F8F8;
}

.initiateChange .el-step__icon-inner {
  color: #333;
  font-size: 20px;
}

.initiateChange .el-step.is-center .el-step__line {
  left: 70%;
  right: -30%;
}

.initiateChange .el-step__main div {
  color: #333 !important;
}

.initiateChange .el-button {
  width: 100px;
  color: #fff;
}

.initiateChange .el-button--default {
  background: #999999;
}

.initiateChange .el-button--default:focus, .initiateChange .el-button--default:hover {
  background: #999999;
  color: #fff;
}

.initiateChange .el-button--primary {
  background: #4775CA;
}

.initiateChange .el-button--primary:focus, .el-button--primary:hover {
  background: #4775CA;
  color: #fff;
}

// 图标颜色
.initiateChange .initiateChange .icon {
  color: #ffa147;
}

.initiateChange .titleBg {
  background: #44508a;
}

.initiateChange .dayManagement {
  margin-bottom: 26px;
}

.initiateChange .el-row .el-col-24 {
  font-size: 22px;
  color: #28292b;
}

.initiateChange .dayManagement .el-row .el-col-24 {
  margin: 20px 0px;
}

.initiateChange .notice {
  color: #fff;
  font-size: 20px;
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: center;
  position: relative;
}

.initiateChange .notice i {
  font-size: 20px;
  position: absolute;
  right: 15px;
  line-height: 40px;
  cursor: pointer;
}

.initiateChange .el-form {
  padding: 0 72px;
}

.initiateChange .el-input {
}

.initiateChange .el-input input, .initiateChange .el-textarea .el-textarea__inner {
  background: #F8F8F8;
  color: #666;
  font-size: 16px;
}

.initiateChange .el-select .el-input__inner {
  color: #333;
}

.initiateChange .el-input--prefix .el-input__inner {
  padding-left: 15px !important;
  padding-right: 15px !important;
}

.initiateChange .el-textarea .el-textarea__inner {
  min-height: 120px !important;
}

.initiateChange .el-form-item__label {
  color: #333333;
  font-size: 18px;
}

.initiateChange .leftBox, .initiateChange .rightBox {
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  background: #f5f6fa;
}

.initiateChange .leftBox {
  left: 0;
}

.initiateChange .rightBox {
  right: 0;
}

.initiateChange .leftBox .box-card {
  width: calc(100% - 30px);
  height: calc(100% - 42px);
  margin: 20px 10px 20px 20px;
}

.initiateChange .rightBox .box-card {
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