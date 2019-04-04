<!-- 采购管理procurement -->
<template>
  <div class="container-putStorage">
    <div class="wrapper">
      <el-row>
        <el-col :span="22">材料入库</el-col>
        <el-col :span="2">
          <el-button @click="goto()">返回列表</el-button>
        </el-col>
      </el-row>
      <div class="procurementForm">
        <el-form ref="form" :model="form">
          <el-form-item>
            <el-radio-group v-model="form.resource" @change="purchaseChange()">
              <el-radio label="1">计划采购</el-radio>
              <el-radio label="2">临时采购</el-radio>
            </el-radio-group>
          </el-form-item>
          <div v-show="purchaseBatch">
            <el-form-item label="采购批次:">
              <div class="originator">
                <el-select v-model="form.people">
                  <el-option label="2019022001" value="2019022001"></el-option>
                  <el-option label="2019022001" value="2019022001"></el-option>
                </el-select>
              </div>
            </el-form-item>
          </div>
          <el-form-item>
            <div v-show="plan">
              <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="num" label="序号" width="60"></el-table-column>
                <el-table-column prop="name" label="物资名称"></el-table-column>
                <el-table-column prop="model" label="规格型号"></el-table-column>
                <el-table-column prop="building" label="楼栋"></el-table-column>
                <el-table-column prop="demand" label="采购需求量"></el-table-column>
                <el-table-column prop="time" label="需求时间"></el-table-column>
                <el-table-column prop="storage" label="已入库"></el-table-column>
                <el-table-column label="本次入库" width="80">
                  <template slot-scope="scope">
                    <el-input
                      v-model="form.warehousing"
                      @change="importText(scope.$index, scope.row)"
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
                    <th>采购需求量</th>
                    <th>需求时间</th>
                    <th>已入库</th>
                    <th style="width:80px;">本次入库</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="addData">
                    <td>
                      <span class="add">
                        <i class="el-icon-plus"></i>
                      </span>
                    </td>
                    <td>
                      <el-input v-model="tdData.td2" @change="importText(scope.$index, scope.row)"></el-input>
                    </td>
                    <td>
                      <el-input v-model="tdData.td3" @change="importText(scope.$index, scope.row)"></el-input>
                    </td>
                    <td>
                      <el-input v-model="tdData.td4" @change="importText(scope.$index, scope.row)"></el-input>
                    </td>
                    <td>
                      <el-input v-model="tdData.td5" @change="importText(scope.$index, scope.row)"></el-input>
                    </td>
                    <td>
                      <el-input v-model="tdData.td6" @change="importText(scope.$index, scope.row)"></el-input>
                    </td>
                    <td>
                      <el-input v-model="tdData.td7" @change="importText(scope.$index, scope.row)"></el-input>
                    </td>
                    <td>
                      <el-input v-model="tdData.td8" @change="importText(scope.$index, scope.row)"></el-input>
                    </td>
                  </tr>
                  <tr v-for="(item,index) in tableData" v-bind:key="index">
                    <td>{{item.num}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.model}}</td>
                    <td>{{item.building}}</td>
                    <td>{{item.demand}}</td>
                    <td>{{item.time}}</td>
                    <td>{{item.storage}}</td>
                    <td>
                      <el-input
                        v-model="item.warehousing"
                        @change="importText(scope.$index, scope.row)"
                      ></el-input>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </el-form-item>
          <el-form-item label="原始凭证:">
            <div class="upload">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview2"
                :on-remove="handleRemove2"
                multiple
                :limit="3"
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
              v-model="form.date1"
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
export default {
  data() {
    return {
      purchaseBatch: true,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "1",
        desc: "",
        warehousing: "20㎡"
      },
      tdData: {
        td2: "混泥土",
        td3: "c20",
        td4: "A1栋",
        td5: "100.00㎡",
        td6: "2019.01.01",
        td7: "80㎡",
        td8: "20㎡"
      },
      plan: true,
      temporary: false,
      dialogImageUrl2: "", //原始凭证
      dialogVisible2: false, //上传凭证图片列表
      tableData: [
        {
          num: "1",
          name: "混泥土",
          model: "c20",
          building: "A1栋",
          demand: "100.00㎡",
          time: "2019.01.01",
          storage: "80㎡",
          warehousing: "20㎡"
        },
        {
          num: "2",
          name: "混泥土",
          model: "c20",
          building: "A1栋",
          demand: "100.00㎡",
          time: "2019.01.01",
          storage: "80㎡",
          warehousing: "20㎡"
        },
        {
          num: "3",
          name: "混泥土",
          model: "c20",
          building: "A1栋",
          demand: "100.00㎡",
          time: "2019.01.01",
          storage: "80㎡",
          warehousing: "20㎡"
        },
        {
          num: "4",
          name: "混泥土",
          model: "c20",
          building: "A1栋",
          demand: "100.00㎡",
          time: "2019.01.01",
          storage: "80㎡",
          warehousing: "20㎡"
        }
      ]
    };
  },
  methods: {
    // 返回列表
    goto() {
      this.$router.go(-1);
    },
    // 采购跳转
    purchaseChange() {
      if (this.form.resource == 1) {
        this.purchaseBatch = true;
        this.plan = true;
        this.temporary = false;
      } else if (this.form.resource == 2) {
        this.purchaseBatch = false;
        this.plan = false;
        this.temporary = true;
      }
    },
    importText() {},
    onSubmit() {
      console.log("submit!");
    },
    //原始凭证
    handleRemove2(file, fileList) {
      //图标删除
      console.log(file, fileList);
    },
    handlePictureCardPreview2(file) {
      //点击文件列表中已上传的文件
      this.dialogImageUrl2 = file.url;
      this.dialogVisible2 = true;
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
  background: #F0F0F0;
}

.container-putStorage .el-table__row td:last-child .el-input__inner, .container-putStorage .temporary tbody td input {
  background: #D8DFEE;
  width: 80px;
  height: 36px;
  color: #999;
  line-height: 36px;
  text-align: center;
  margin: 0 auto;
}

.container-putStorage .el-table td, .container-putStorage .temporary tbody td {
  border: none;
  padding: 5px 0;
}
</style>

