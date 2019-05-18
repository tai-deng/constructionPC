<template>
  <div class="container-scope-detail">
    <div ref="modelContainer" class="model-container"></div>
    <div class="content">
      <el-form :model="filterForm">
        <el-row>
          <el-col :span="6">
            <el-form-item label="采购批次">
              <span style="width: 180px;margin-right: 18px;" class="code">{{data.Code}}</span>
              <el-button
                v-if="WorkStatus == 3 && isMe"
                type="warning"
                :disabled="true"
                style="cursor: inherit;"
              >有审核</el-button>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-button @click="goto()">返回列表</el-button>
          </el-col>
        </el-row>

        <el-form-item>
          <el-row class="people">
            <el-col :span="4">{{ `申请人：${data.ApplyPersonName}` }}</el-col>
            <el-col :span="4">{{ `发起日期：${data.dCreateTime}` }}</el-col>
            <el-col :span="4">{{ `需要日期：${data.DemandTime}` }}</el-col>
          </el-row>
        </el-form-item>
        <div class="item">
          <el-form-item label="采购审核">
            <el-steps align-center :active="active">
              <el-step
                v-for="(item,index) in data.listFlow"
                :title="item.DeptName?item.DeptName:'/'"
                :description="item.PersonName"
                :key="index"
              ></el-step>
            </el-steps>
          </el-form-item>
        </div>

        <el-form-item label="现场照片:" v-if="0">
          <div class="wrap">
            <div class="upload" style="display: inline-block;">
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
            <el-dialog :modal="false" :visible.sync="dialogVisible2">
              <img width="100%" :src="dialogImageUrl2" alt>
            </el-dialog>
            <span class="tip">(最多上传3张)</span>
          </div>
        </el-form-item>

        <el-form-item class="select">
          <el-select v-model="filterForm.BuildName" placeholder="请选择楼栋">
            <el-option
              v-for="item in BuildNameList"
              :key="item.id"
              :label="item.text"
              :value="item.text"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <div class="teble-wrapper">
            <el-table :data="data.listItems" border>
              <el-table-column label="楼栋" prop="BuildName"></el-table-column>
              <el-table-column label="资源名称" prop="ResourseName"></el-table-column>
              <el-table-column label="规格" prop="Spec"></el-table-column>
              <el-table-column label="预算量" prop="AdjustBOQ"></el-table-column>
              <el-table-column label="已采购" prop="PurchaseNum"></el-table-column>
              <el-table-column label="本次采购" prop="ThisPurchaseNum"></el-table-column>
            </el-table>
          </div>
        </el-form-item>

        <el-form-item label-width="0" align="center" v-if="0">
          <el-button type="primary" @click="onAudit">确认审核</el-button>
        </el-form-item>

        <el-form-item v-if="0">
          <div class="btn">
            <el-button @click="onReceive(2)">拒收</el-button>
            <el-button type="primary" @click="onReceive(1)">接收</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style>
</style>
<script>
import {
  GetBuilding,
  GetSpecialtybyBuilding,
  GetFloorbyBuilding,
  QueryPurchaseInfoItems,
  GetLoginUserInfo
} from "../../../api/api.js";
import {
  dataResetBSF,
  getBuildList,
  getSpecialtyList,
  getFloorList
} from "./util/scopeList.js";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      active: 0,
      isMe: false,
      WorkStatus: 4, // 0 待接收  3进行中  4完成
      userID: localStorage.getItem("userId"), //用户ID
      projectid: localStorage.getItem("projectid"),
      BuildNameList: [], // 楼栋下拉
      SpecialtyList: [], // 专业下拉
      FloorbyList: [], // 楼层下拉
      paging: { page: 1, rows: 5 }, // [采购列表分页]
      filterForm: {
        BuildName: "", // 楼栋
        Specialty: "", // 专业
        Floor: "" // 楼层
      },
      data: [],
      par: {
        Priority: "",
        OrgId: "",
        DepId: "",
        Person: "",
        Status: 1
      },
      photoList: [], //现场照片
      dialogImageUrl2: "", //上传凭证
      dialogVisible2: false //上传凭证图片列表
    };
  },
  methods: {
    // 详情列表
    getPurchaseListDetil() {
      // this.load();
      QueryPurchaseInfoItems({
        ID: this.$route.query.purchaseDetailId,
        BuildName: this.filterForm.BuildName,
        Specialty: this.filterForm.Specialty,
        Floor: this.filterForm.Floor
      }).then(res => {
        this.$toast.clear();
        if (res.StatusCode == 200) {
          // 待接收 进行中 完成
          this.WorkStatus = res.Result.WorkStatus;
          this.active = 0;
          res.Result.dCreateTime = res.Result.dCreateTime
            ? require("moment")(res.Result.dCreateTime).format("YYYY/MM/DD")
            : "/";
          res.Result.DemandTime = res.Result.DemandTime
            ? require("moment")(res.Result.DemandTime).format("YYYY/MM/DD")
            : "/";
          res.Result.listFlow.forEach((element, index) => {
            if (
              this.active == "" &&
              element.ID == res.Result.CurrentStepIndex
            ) {
              this.active = index + 1;
              if (this.userID == element.Person) {
                this.isMe = true;
              } else {
                this.isMe = false;
              }
              this.par = {
                Priority: element.Priority,
                OrgId: element.OrgId,
                DepId: element.DepId,
                Person: element.Person,
                ID: element.ID
              };
            }
          });
          this.data = res.Result;
          console.log()
        }
      });
    },
    // 确认审核/认证
    onAudit() {
      // this.load();
      let val = Object.assign(this.par, {
        listAuthPhoto: this.photoList,
        Status: 4
      });
      PurcahseApprove(val).then(res => {
        this.$toast.clear();
        if (res.StatusCode == 200) {
          this.$emit("close");
          this.$message({
            type: "success",
            message: "处理成功！",
            center: "true"
          });
          this.$router.go(-1);
        }
      });
    },
    // 接收--> 拒收
    onReceive(flag) {
      if (flag == 1) {
        // this.load();
        let val = Object.assign(this.par, {
          listAuthPhoto: this.photoList,
          Status: 3
        });
        PurcahseApprove(val).then(res => {
          // this.$toast.clear();
          if (res.StatusCode == 200) {
            this.$emit("close");
            this.$message({
              type: "success",
              message: "处理成功！",
              center: "true"
            });
            this.$router.go(-1);
          }
        });
      }
      if (flag == 2) {
        // this.load();
        let val = Object.assign(this.par, {
          listAuthPhoto: this.photoList,
          Status: 2
        });
        PurcahseApprove(val).then(res => {
          // this.$toast.clear();
          if (res.StatusCode == 200) {
            this.$emit("close");
            this.$message({
              type: "success",
              message: "处理成功！",
              center: "true"
            });
            this.$router.go(-1);
          }
        });
      }
    },
    /**
     * 获取当前登录用户详情
     */
    getLoginUserInfoDate() {
      // this.load();
      GetLoginUserInfo({ curUserId: this.userID }).then(data => {
        // this.$toast.clear();
        if (data.StatusCode === 200) {
          let item = data.Detiel[0].loginUserInfo;
          this.UserInfo = item;
        }
      });
    },
    // 删除图片
    handleRemove2(file, fileList) {
      this.photoList = fileList;
    },
    handlePictureCardPreview2(file) {
      //点击文件列表中已上传的文件
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
    },
    goto() {
      this.$router.go(-1);
    },
    _initData() {
      /**
       * 模型状态管理
       */
      this.$nextTick(() => {
        this.$util.getDomLocation(this, "modelContainer").then(res => {
          this.modelBox({
            isShowModel: false, //是否显示模型 true:显示模型，如果模型已加载，则显示 false:隐藏模型
            isLoadModel: true, //是否加载模型 true：加载模型，如果已经加载，不会重新加载， false:卸载模型
            top: res.top, //距离顶部距离‘px'
            left: res.left, //距离左边距离‘px'
            width: res.width, //模型宽‘px'
            height: res.height, //模型高 ‘px'
            zIndex: 100, //模型层级
            background: "",
            ElementIDs: [], // 所有要显示的构件数组，包括半隐藏构件
            highLightElementIDs: [], // 高亮显示的构件
            functionNumber: [34] // 需要模型调用的函数编号数组
          });
        });
      });
    },
    ...mapMutations({
      modelBox: "GET_MODEL_BOX"
    })
  },
  computed: {
    id() {
      return this.$route.query.purchaseDetailId;
    }
  },

  created() {
    // 楼栋下拉
    getBuildList(this, GetBuilding);
    this.getPurchaseListDetil();
    this.getLoginUserInfoDate();
    this._initData();
  },
  watch: {
    id(val, oldval) {
      // 获取采购列表详情
      console.log(id);
      if (val != "") this.getPurchaseListDetil();
    },
    // 楼层
    "filterForm.Floor": {
      handler(val, oldval) {
        if (val != "") {
          dataResetBSF(this, "Floor");
          this.getPurchaseListDetil();
        }
      }
    },
    // 专业
    "filterForm.Specialty": {
      handler(val, oldval) {
        if (val != "") {
          dataResetBSF(this, "Specialty");
          getFloorList(this, GetFloorbyBuilding);
          this.getPurchaseListDetil();
        }
      }
    },
    // 楼栋
    "filterForm.BuildName": {
      handler(val, oldval) {
        if (val != "") {
          dataResetBSF(this, "BuildName");
          getSpecialtyList(this, GetSpecialtybyBuilding);
          this.getPurchaseListDetil();
        }
      }
    }
  }
};
</script>
<style>

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

.container-scope-detail .el-form-item__label {
  font-size: 20px !important;
}
.container-scope-detail .el-form-item__content {
  font-size: 20px !important;
}
.container-scope-detail .el-step__icon.is-text {
  width: 40px;
  height: 40px;
  font-size: 20px;
}
.container-scope-detail .el-step.is-horizontal .el-step__line {
  top: 0.25rem;
  background: #979797;
  height: 1px;
}
.container-scope-detail .el-step.is-center .el-step__line {
  left: 70%;
  right: -30%;
}
.container-scope-detail .el-step__line-inner {
  border-width: 0 !important;
}
.container-scope-detail .el-step__main div {
  color: #333 !important;
}
</style>
<style scoped lang='stylus' rel='stylesheet/stylus'>
.model-container {
  height: 0px;
}

.people .el-col {
  text-align: left !important;
  padding: 0 !important;
  color: #333 !important;
  font-size: 20px !important;
  font-weight: normal !important;
}

.el-col .el-button--default {
  background: #FDA143;
  padding: 0;
  width: 120px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  border: none;
}

.flex-between {
  display: flex;
  justify-content: space-between;
}

.flex {
  display: flex;
}

.container-scope-detail {
  height: 100%;
  overflow-y: auto;
  font-size: 20px !important;

  .el-col {
    text-align: center;
    padding: 16px 0 0 0;
    color: #333;
    font-size: 20px;
    font-weight: bold;
  }

  .el-col .el-button--default {
    background: #FDA143;
    padding: 0;
    width: 120px;
    height: 40px;
    line-height: 40px;
    color: #fff;
    border: none;
  }

  .btn {
    padding: 20px 25% 20px 5%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .tip {
    color: #999999;
    font-size: 18px;
    padding-left: 10px;
    display: inline-block;
    vertical-align: bottom;
  }

  .el-upload--picture-card {
    background: #F8F8F8 !important;
    width: 132px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .teble-wrapper {
    >>> {
      tr th {
        background: #435089;

        .cell {
          color: #fff;
        }
      }
    }
  }

  .select {
    >>> {
      .el-select .el-input__inner {
        border: 1px solid #ecedf1;
        border-radius: 5px;
        overflow: hidden;
      }

      .el-input__suffix {
        right: 0;
        width: 50px;
        background: #44508a;
        border-radius: 0 5px 5px 0;
      }

      .el-input--suffix {
        overflow: hidden;
      }

      .el-select .el-input .el-select__caret {
        color: #fff;
      }
    }
  }

  >>> {
    .el-icon-dot {
      width: 18px;
      height: 18px;
      background: #4775CA;
      border-radius: 50%;
    }
  }

  .title {
    position: relative;
    background: #4775CA;
    height: 48px;
    line-height: 48px;
    font-size: 20px;
    color: #fff;
    text-align: center;

    span {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .content {
    padding: 30px;
  }
}
</style>
