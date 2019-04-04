<!-- 材料出库 -->
<template>
  <div class="container-procurement1">
    <div class="wrapper">
      <el-row>
        <el-col :span="22">材料出库</el-col>
        <el-col :span="2">
          <el-button @click="goto()">返回列表</el-button>
        </el-col>
      </el-row>
      <div class="procurementForm">
        <el-form ref="form" :model="form">
          <el-row>
            <el-col :span="24">
              <el-form-item label="楼栋:">
                <div class="originator">
                  <el-select v-model="form.people">
                    <el-option label="A1栋" value="A1栋"></el-option>
                    <el-option label="A2栋" value="A2栋"></el-option>
                  </el-select>
                </div>
              </el-form-item>
              <el-form-item label="楼层:">
                <div class="originator">
                  <el-select v-model="form.people">
                    <el-option label="1F" value="1F"></el-option>
                    <el-option label="2F" value="2F"></el-option>
                  </el-select>
                </div>
              </el-form-item>
              <el-form-item label="物资名称:">
                <div class="originator">
                  <el-select v-model="form.people">
                    <el-option label="混泥土" value="混泥土"></el-option>
                    <el-option label="混泥土" value="混泥土"></el-option>
                  </el-select>
                </div>
              </el-form-item>
              <el-form-item label="规格型号:">
                <div class="originator">
                  <el-select v-model="form.people">
                    <el-option label="C20" value="C20"></el-option>
                    <el-option label="C20" value="C20"></el-option>
                  </el-select>
                </div>
              </el-form-item>
              <span class="add">
                <i class="el-icon-plus"></i>
              </span>
            </el-col>
          </el-row>
          <el-form-item>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="num" label="序号" width="50"></el-table-column>
              <el-table-column prop="name" label="物资名称"></el-table-column>
              <el-table-column prop="model" label="规格型号"></el-table-column>
              <el-table-column prop="building" label="楼栋"></el-table-column>
              <el-table-column prop="floor" label="楼层"></el-table-column>
              <el-table-column prop="budget" label="施工预算量"></el-table-column>
              <el-table-column prop="outbound" label="已出库"></el-table-column>
              <el-table-column prop="storage" label="库存"></el-table-column>
              <el-table-column label="本次出库" width="80">
                <template slot-scope="scope">
                  <el-input
                    v-model="form.warehousing"
                    @change="importText(scope.$index, scope.row)"
                  ></el-input>
                </template>
              </el-table-column>
            </el-table>
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
          <el-form-item label="出库时间:">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="领料人:">
            <div class="person">
              <el-select v-model="form.code">
                <el-option label="张三" value="张三"></el-option>
                <el-option label="张三" value="张三"></el-option>
              </el-select>
            </div>
          </el-form-item>
          <el-form-item>
            <div class="btn">
              <el-button @click="onSubmit">确认出库</el-button>
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
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        warehousing: "20㎡"
      },
      dialogImageUrl2: "", //原始凭证
      dialogVisible2: false, //上传凭证图片列表
      tableData: [
        {
          num: "1",
          name: "混泥土",
          model: "c20",
          building: "A1栋",
          floor: "1F",
          budget: "100.00㎡",
          outbound: "20㎡",
          storage: "80㎡",
          warehousing: "20㎡"
        },
        {
          num: "2",
          name: "混泥土",
          model: "c20",
          building: "A1栋",
          floor: "1F",
          budget: "100.00㎡",
          outbound: "20㎡",
          storage: "80㎡",
          warehousing: "20㎡"
        },
        {
          num: "3",
          name: "混泥土",
          model: "c20",
          building: "A1栋",
          floor: "1F",
          budget: "100.00㎡",
          outbound: "20㎡",
          storage: "80㎡",
          warehousing: "20㎡"
        },
        {
          num: "4",
          name: "混泥土",
          model: "c20",
          building: "A1栋",
          floor: "1F",
          budget: "100.00㎡",
          outbound: "20㎡",
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
.container-procurement1 {
  width: 100%;
  height: 100%;
  background: #f0f2f5;
}

.container-procurement1 .procurementForm {
  width: 960px;
  margin: 0 auto;
}

.container-procurement1 .el-col {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
}

.container-procurement1 .el-col .el-form-item {
  display: flex;
  flex-flow: row;
  align-items: center;
  margin-right: 12px;
}

.container-procurement1 .el-col-24 .el-form-item {
  width: 25%;
}

.container-procurement1 .el-col-24 .el-form-item .el-form-item__label {
  width: auto;
  white-space: nowrap;
}

.container-procurement1 .el-col {
  text-align: center;
  padding: 16px 0 0 0;
  color: #333;
  font-size: 20px;
  font-weight: bold;
}

.container-procurement1 .add {
  width: 30px;
  height: 30px;
  border: 1px solid #435089;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -40px;
  cursor: pointer;
  margin-top: -20px;
  border-radius: 6px;
}

.container-procurement1 .add i {
  color: #435089;
  font-size: 18px;
}

.container-procurement1 .el-input--prefix .el-input__inner {
  padding-left: 15px !important;
  padding-right: 15px !important;
}

.container-procurement1 .el-col .el-button--default {
  background: #FDA143;
  padding: 0;
  width: 120px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  border: none;
}

.container-procurement1 .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.container-procurement1 .el-upload--picture-card {
  background: #F0F0F0 !important;
  border: 1px solid #D2D2D2 !important;
  width: 180px;
  height: 140px;
  line-height: 140px;
}

.container-procurement1 .avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.container-procurement1 .el-upload--picture-card i {
  color: #999;
}

.container-procurement1 .avatar {
  width: 132px;
  height: 100px;
  display: block;
}

.container-procurement1 .el-form-item__content .tip {
  color: #999999;
  font-size: 18px;
  padding-left: 10px;
  display: inline-block;
  vertical-align: bottom;
}

.container-procurement1 .upload {
  display: inline-block;
}

.container-procurement1 .procurementForm .el-select .el-input__suffix {
  width: 0.666667rem;
  background: #435089;
  border-radius: 0 0.066667rem 0.066667rem 0;
  right: 0 !important;
}

.container-procurement1 .has-gutter tr th {
  background: #435089;
  color: #fff;
  height: 40px;
  padding: 0;
  text-align: center;
}

.container-procurement1 .el-date-editor--date {
  width: 260px !important;
}

.container-procurement1 .el-date-editor--date .el-input__prefix {
  right: 5px !important;
  color: #999;
  left: calc(100% - 30px) !important;
}

.container-procurement1 .person {
  width: 240px !important;
  margin-left: 0.2rem;
  display: inline-block;
}

.container-procurement1 .person .el-select {
  width: 100%;
}

.container-procurement1 .btn {
  text-align: center;
}

.container-procurement1 .btn .el-button--default {
  background: #4775CA;
  padding: 0;
  width: 260px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  font-size: 16px;
  border: none;
}

.container-procurement1 .btn .el-button--default:hover {
  background: #4775CA;
}

.container-procurement1 .el-table__row td {
  color: #333;
  text-align: center;
}

.container-procurement1 .el-table__row td:last-child .el-input__inner {
  background: #D8DFEE;
  width: 80px;
  height: 36px;
  color: #999;
  line-height: 36px;
}

.container-procurement1 .el-date-editor--date .el-input__inner {
  background: #F0F0F0;
}

.container-procurement1 .el-table td {
  border: none;
}
</style>