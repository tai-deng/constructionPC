<!-- 材料入库 -->
<template>
  <div class="container-putStorage">
    <div class="wrapper">
      <el-row>
        <el-col :span="22" class="title">材料入库</el-col>
        <el-col :span="2">
          <el-button @click="goto()">返回列表</el-button>
        </el-col>
      </el-row>
      <div class="procurementForm">
        <el-form ref="form" :model="form">
          <el-form-item>
            <el-radio-group v-model="form.InType" @change="purchaseChange()">
              <el-radio label="1">计划采购</el-radio>
              <el-radio label="2">临时采购</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-show="purchaseBatch">
            <el-form-item label="采购批次:">
              <div class="originator">
                <el-select v-model="form.Code"  v-loading="buildLoading">
                  <el-option
                    v-for="item in getPurchaseRangeList"
                    :key="item.ID"
                    :label="item.Code"
                    :value="item.Code"
                  ></el-option>
                </el-select>
              </div>
            </el-form-item>
          </div>
          <el-form-item>
            <div v-show="plan">
              <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="num" label="序号" width="60"></el-table-column>
                <el-table-column prop="ResourceName" label="物资名称"></el-table-column>
                <el-table-column prop="Spec" label="规格型号"></el-table-column>
                <el-table-column prop="BuildName" label="楼栋"></el-table-column>
                <el-table-column prop="Floor" label="楼层"></el-table-column>
                <el-table-column prop="ThisPurchaseNum" label="采购需求量"></el-table-column>
                <el-table-column prop="DemandTime" label="需求时间"></el-table-column>
                <el-table-column prop="InNum" label="已入库"></el-table-column>
                <el-table-column label="本次入库">
                  <template slot-scope="scope">
                    <el-input
                      v-model="tableData[scope.$index].CurrentInNum"
                      :placeholder="tableData[scope.$index].Unit"
                      type="number"
                    ></el-input>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <div class="temporary" v-show="temporary">
              <table>
                <thead>
                  <tr>
                    <th style="width:60px;">序号</th>
                    <th>物资名称</th>
                    <th>规格型号</th>
                    <th>楼栋</th>
                    <th>楼层</th>
                    <th>采购需求量</th>
                    <th>需求时间</th>
                    <th>已入库</th>
                    <th>本次入库</th>
                    <th style="width:100px;">单位</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="addData" v-for="(item,index) in tdData" :key="index">
                    <td>
                      <template v-if="index == 0">
                        <span class="add" @click="onAddInput">
                          <i class="el-icon-plus"></i>
                        </span>
                      </template>
                      <template v-else>
                        <span class="add" @click="onDelInput">
                          <i class="el-icon-minus"></i>
                        </span>
                      </template>
                    </td>
                    <td class="addItemInput">
                      <el-input v-model="item.ResourceName" placeholder="物资名称"></el-input>
                    </td>
                    <td class="addItemInput">
                      <el-input v-model="item.Spec" placeholder="规格型号"></el-input>
                    </td>
                    <td class="addItemInput">
                      <el-input v-model="item.BuildName" placeholder="楼栋"></el-input>
                    </td>
                    <td class="addItemInput">
                      <el-input v-model="item.Floor" placeholder="楼层"></el-input>
                    </td>
                    <td class="addItemInput">
                      <el-input v-model="item.ThisPurchaseNum" placeholder="采购需求量"></el-input>
                    </td>
                    <td class="addDate">
                      <el-date-picker v-model="item.DemandTime" type="date" placeholder="选择日期"></el-date-picker>
                    </td>
                    <td class="addItemInput">
                      <el-input v-model="item.InNum" placeholder="已入库"></el-input>
                    </td>
                    <td class="addItemInput">
                      <el-input v-model="item.CurrentInNum" placeholder="本次入库"></el-input>
                    </td>
                    <td class="addItemUnit">
                      <el-select
                        v-loading="unitLoading"
                        v-model="item.Unit"
                        filterable
                        allow-create
                        default-first-option
                        placeholder="请选择单位"
                      >
                        <el-option
                          v-for="(item,index) in units"
                          :key="index"
                          :label="item.text"
                          :value="item.text"
                        ></el-option>
                      </el-select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </el-form-item>
          <el-form-item label="原始凭证:">
            <div class="upload">
              <el-upload
                action
                list-type="picture-card"
                :on-preview="handlePictureCardPreview2"
                :on-remove="handleRemove2"
                multiple
                :limit="3"
                :on-change="uploadPicture"
                :auto-upload="false"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
            </div>
            <el-dialog :visible.sync="dialogVisible2">
              <img width="100%" :src="dialogImageUrl2" alt>
            </el-dialog>
            <span class="tip">(最多上传3张)</span>
          </el-form-item>
          <el-form-item label="入库时间:">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.InDate"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
          <el-form-item>
            <div class="btn">
              <el-button @click="onSubmit">确认入库</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script type='textecmascript-6'>
import {
  UploadImages,
  AddStoreIn, // 提交
  GetPurchaseRangeDetails, // 采购批次下拉
  GetInPurchaseInfo // 批次详情tab
} from "../../../api/api.js";
import { getUnit } from "./util/util.js";

export default {
  data() {
    return {
      units: [], // 单位
      userID: localStorage.getItem("userId"), //用户ID
      projectid: localStorage.getItem("projectid"),
      getPurchaseRangeList: [], // 采购批次下拉
      photoList: [], // 凭证
      purchaseBatch: true,
      form: {
        InType: "1",
        InDate: "",
        purchase: { ID: "", Code: "" }, // 采购
        Code: ""
      },
      tdData: [],
      tdDataItem: {
        ResourceName: "",
        Spec: "",
        BuildName: "",
        Floor: "",
        ThisPurchaseNum: "",
        DemandTime: "",
        InNum: "",
        CurrentInNum: ""
      },
      plan: true,
      temporary: false,
      dialogImageUrl2: "", //原始凭证
      dialogVisible2: false, //上传凭证图片列表
      tableData: [], // tab1
      buildLoading:false,
      unitLoading:false,
    };
  },
  methods: {
    // 添加row
    onAddInput() {
      this.tdData.push(Object.assign({}, this.tdDataItem));
    },
    // 删除row
    onDelInput(i) {
      this.tdData.splice(i, 1);
    },

    // 返回列表
    goto() {
      this.$router.go(-1);
    },

    // 采购跳转
    purchaseChange() {
      if (this.form.InType == 1) {
        this.purchaseBatch = true;
        this.plan = true;
        this.temporary = false;
      } else if (this.form.InType == 2) {
        this.purchaseBatch = false;
        this.plan = false;
        this.temporary = true;
      }
    },

    // 导出
    importText() {},

    // 提交
    onSubmit() {
      let listItems = this.tableData;
      if (this.form.InType == "2") {
        listItems = this.tdData;
      }
      for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].ResourceName == "") {
          this.$message({
            message: "资源名称不能为空！",
            type: "warning"
          });
          return;
        }
        // if (listItems[i].Spec == "") {
        //   this.$message({
        //     message: "规格型号不能为空！",
        //     type: "warning"
        //   });
        //   return;
        // }
        if (listItems[i].BuildName == "") {
          this.$message({
            message: "楼栋不能为空！",
            type: "warning"
          });
          return;
        }
        if (listItems[i].Floor == "") {
          this.$message({
            message: "楼层不能为空！",
            type: "warning"
          });
          return;
        }
        // if (listItems[i].CurrentInNum) {
        //   listItems[i].CurrentInNum = 0;
        // }
      }
      if (this.form.InDate == "") {
        this.$message({
          message: "入库时间不能为空！",
          type: "warning"
        });
        return;
      }
      let par = {
        model: {
          InType: this.form.InType, // 入库类型
          InDate: this.form.InDate, // 入库时间
          ProjectID: this.projectid,
          PurchaseID: this.form.purchase.ID, // 批次ID
          PurchaseCode: this.form.purchase.Code // 批次code
        },
        listItems,
        infiles: this.photoList,
        projectid: this.projectid,
        userid: this.userID
      };
      // this.load();
      AddStoreIn(par).then(res => {
        // this.$toast.clear();
        if (res.StatusCode == 200) {
          this.$message({
            message: res.Message,
            type: "success"
          });
          this.goto()
        }
      });
    },

    // 采购批次下拉
    getPurchaseRangeSel() {
      this.buildLoading=true;
      GetPurchaseRangeDetails({ projectid: this.projectid }).then(res => {
      this.buildLoading=false;
        if (res.StatusCode == 200) {
          this.getPurchaseRangeList = res.Detiel;
        }
      },()=>{
        this.buildLoading=false;
      });
    },

    // 批次详情tab
    GetInPurchaseTab(purachseid) {
      // this.load();
      GetInPurchaseInfo({ purachseid, projectid: this.projectid }).then(res => {
        // this.$toast.clear();
        if (res.StatusCode == 200) {
          this.tableData = res.Detiel.map((v, i) => {
            v.DemandTime = v.DemandTime
              ? require("moment")(v.DemandTime).format("YYYY/MM/DD")
              : "/";
            return Object.assign(v, {
              num: i + 1,
              CurrentInNum: 0,
              ResourceName: v.ResourseName
            });
          });
        }
      });
    },

    //原始凭证
    handleRemove2(file, fileList) {
      //图标删除
      this.photoList = fileList;
    },

    //点击文件列表中已上传的文件
    handlePictureCardPreview2(file) {
      this.dialogImageUrl2 = file.url;
      this.dialogVisible2 = true;
    },

    // 上传：文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
    async uploadPicture(file) {
      let params = [
        {
          key: "files",
          value: file.raw
        }
      ];
      let data = await this.Request(UploadImages(params));
      if (data.StatusCode == 200) {
        this.imagesDetiel = data.Detiel;
        this.photoList.push({
          Id: this.imagesDetiel[0].Id, //上传后的文件名
          URL: this.imagesDetiel[0].URL, //文件地址
          smallPhotoURL: this.imagesDetiel[0].smallPhotoURL, //如果存在小图则返回小图地址
          Type: this.imagesDetiel[0].Type, //文件类型
          TokenUrL: this.imagesDetiel[0].TokenUrL //域名地址
        });
      } else {
        this.$message({
          type: "error",
          message: data.message ? data.message : "后台异常",
          center: "true"
        });
      }
    }
  },
  created() {
    // 采购批次下拉
    this.getPurchaseRangeSel();
    // 初始化临时采购
    this.tdData.push(Object.assign({}, this.tdDataItem));
    // 获取单位
    getUnit(this);
  },
  watch: {
    "form.Code": {
      handler(val, oldval) {
        let v = this.getPurchaseRangeList.filter((v, i) => {
          return v.Code == val;
        });
        this.form.purchase = v[0];
        this.GetInPurchaseTab(v[0].ID);
      }
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.container-putStorage {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
}

.container-putStorage .el-radio-group .el-radio__label {
  font-size: 18px;
  color: #333;
}

.container-putStorage .el-input--suffix .el-input__inner {
  font-size: 18px;
}

.container-putStorage .el-table th>.cell, .container-putStorage .temporary thead th {
  font-size: 18px;
}

.container-putStorage .el-form-item .el-form-item__label {
  font-size: 18px;
  color: #333333;
}

.container-putStorage .addDate .el-date-editor--date {
  width: 120px !important;
}

.container-putStorage .addDate .el-date-editor .el-input__inner {
  background: #d8dfee !important;
}

.container-putStorage .temporary tbody .addItemUnit input {
  text-align: left;
}

.container-putStorage .addDate .el-input__prefix {
  display: none;
}

.container-putStorage .procurementForm {
  width: 960px;
  margin: 0 auto;
}

.container-putStorage .el-form-item {
  width: 100% !important;
  height: auto !important;
}

.container-putStorage .el-col {
  text-align: center;
  padding: 16px 0 0 0;
  color: #333;
  font-size: 20px;
  font-weight: bold;
}

.container-putStorage .el-col .el-button--default {
  background: #FDA143;
  padding: 0;
  width: 120px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  border: none;
  font-size: 16px;
}

.container-putStorage .add {
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.container-putStorage .add i {
  color: #435089;
  font-size: 19px;
}

.container-putStorage .el-radio__input.is-checked .el-radio__inner {
  border-color: #FDA143;
  background: #FDA143;
}

.container-putStorage .el-radio__input.is-checked+.el-radio__label {
  color: #000;
}

.container-putStorage .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.container-putStorage .el-upload--picture-card {
  background: #F0F0F0 !important;
  border: 1px solid #D2D2D2 !important;
  width: 180px;
  height: 140px;
  line-height: 140px;
}

.container-putStorage .avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.container-putStorage .el-upload--picture-card i {
  color: #999999;
}

.container-putStorage .avatar {
  width: 132px;
  height: 100px;
  display: block;
}

.container-putStorage .el-input--prefix .el-input__inner {
  padding-left: 15px !important;
  padding-right: 15px !important;
}

.container-putStorage .el-form-item__content .tip {
  color: #999999;
  font-size: 18px;
  padding-left: 10px;
  display: inline-block;
  vertical-align: bottom;
}

.container-putStorage .upload {
  display: inline-block;
}

.container-putStorage .procurementForm .el-select .el-input__suffix {
  width: 0.666667rem;
  background: #435089;
  border-radius: 0 0.066667rem 0.066667rem 0;
  right: 0 !important;
}

.container-putStorage .has-gutter tr th, .container-putStorage .temporary thead th {
  background: #435089;
  color: #fff;
  height: 40px;
  padding: 0;
  text-align: center;
}

.container-putStorage .el-date-editor--date {
  width: 260px !important;
}

.container-putStorage .el-date-editor--date .el-input__prefix {
  right: 5px !important;
  color: #999;
  left: calc(100% - 30px) !important;
}

.container-putStorage .btn {
  text-align: center;
}

.container-putStorage .btn .el-button--default {
  background: #4775CA;
  padding: 0;
  width: 260px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  font-size: 16px;
  border: none;
}

.container-putStorage .btn .el-button--default:hover {
  background: #4775CA;
}

.container-putStorage .el-table__row td, .container-putStorage .temporary tbody td {
  color: #333;
  text-align: center;
}

.container-putStorage .temporary table {
  width: 100%;
  background: #fff;
}

.container-putStorage .el-input {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-putStorage .el-date-editor .el-input__inner {
  background: #F0F0F0 !important;
}

.container-putStorage .el-table__row td:last-child .el-input__inner, .container-putStorage .temporary tbody td input {
  background: #D8DFEE;
  width: 90%;
  height: 36px;
  color: #999;
  line-height: 36px;
  text-align: center;
  padding: 0 !important;
  // margin: 0 auto;
}

.container-putStorage .el-table td, .container-putStorage .temporary tbody td {
  border: none;
  padding: 5px 0;
}

/* 滚动条的宽度 */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: transparent;
}

/* 滚动条的滑块 */
::-webkit-scrollbar-thumb {
  background-color: #a1a3a9;
  border-radius: 6px;
}
</style>

