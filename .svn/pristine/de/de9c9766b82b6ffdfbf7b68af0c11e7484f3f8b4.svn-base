
<template>
  <div class='modify-container'>
    <div class="content-top">
      <!-- 新增按钮 -->
      <button @click="addFunc()"><img src="@/assets/imgs/add_model.png" /><span>新增</span></button>
      <!-- 搜索按钮 -->
      <div class='search-container'>
        <input
          type="text"
          value="名称"
        />
        
        <i class="el-icon-search"></i>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content-bottom">
      <datamodel :list="newData" :dataList="dataList" :dataNameList="titleName"></datamodel>
    </div>
    <!-- 模态框 -->
    <div
      class="layer-container"
      v-show="model_show"
    >
      <div class="contentBox">
        <div class="model_title">
          新增
          <i> <img
              class="model_show_time_img"
              src="../../../../assets/imgs/close_model.png"
              alt="关闭模态框"
              @click="closeUploadModel()"
            > </i>
        </div>
        <div class="model_content">
          <ul>
            <li>
              <span><b>*</b>{{titleName[0]}}</span>
              <input
                v-model="formStatus.itemName"
                type="text"
                name="itemName"
              >
            </li>
          </ul>

        </div>
        <div class="model_bottom">
          <span
            class="cancelBtn"
            @click="model_show = false"
          >取消</span>
          <span
            class="commitBtn"
            @click="addDataCommit()"
          >提交</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script type='textecmascript-6'>
import datamodel from "./subcomponents/dataModel";
// import search from "./subcomponents/search";

export default {
  data() {
    return {
      model_show: false,

      formStatus: {
        itemName: "",
        limitTime: "",
        time: ""
      },
      dataList: [
          { id: 0, itemName: '类型A'},
          { id: 1, itemName: '类型B'},
          { id: 2, itemName: '类型C'},
          { id: 3, itemName: '类型D'},
          { id: 4, itemName: '类型E'},
          { id: 5, itemName: '类型F'},
          { id: 6, itemName: '类型G'},
          { id: 7, itemName: '类型H'},
          { id: 8, itemName: '类型I'}
        ],
      titleName: ["工程类型", "操作"],
      newData: null
    };
  },
  components: {
    datamodel
  },
  methods: {
    //新增按钮
    addFunc() {
      this.model_show = true;
    },
    // 取消模态框函数
    closeUploadModel() {
      this.model_show = false;
    },
    // 字符串去空格符
    trim(str) {
      return str.replace(/(^\s*)|(\s*$)/g, "");
    },
    //添加数据函数
    addDataCommit(data) {
      data = this.formStatus;
      // console.log(data);
      // if (!this.trim(data.floor)) {
      //   this.$toast({
      //     duration: 500,
      //     message: "请输入正确楼层"
      //   });
      //   return;
      // }
      // if (!this.trim(data.limitWorkDay)) {
      //   this.$toast({
      //     duration: 500,
      //     message: "请输入红线工期"
      //   });
      //   return;
      // }
      // if (!this.trim(data.workDay)) {
      //   this.$toast({
      //     duration: 500,
      //     message: "请输入工期"
      //   });
      //   return;
      // }
      this.newData = data;
      this.model_show = false;
      console.log(this.newData);
    }
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>

@import '../../../../assets/stylus/variable.styl';

.modify-container {
  width: 100%;
  height: 100%;
  background-color: #eff3ff;
  padding: 0 0 100px 20px;

  .content-top {
    padding-top: 20px;
    overflow: hidden;
    zoom: 1;

    button {
      width: 120px;
      height: 40px;
      color: #fff;
      font-size: 16px;
      background-color: #4775CA;
      border: none;
      border-radius: 4px;

      img {
        float: left;
        width: 18px;
        height: 18px;
        margin-left: 20px;
        vertical-align: middle;
        background-size: cover;
      }

      span {
        margin-right: 30px;
      }
    }

    .search-container {
      position: relative;
      float: right;
      height: 100%;

      input {
        width: 340px;
        height: 40px;
        padding-left: 60px;
        color: #999999;
        font-size: 16px;
        box-shadow: 0px 1px 7px 0px rgba(216, 223, 238, 0.75);
        border-radius: 20px;
      }

      i {
        position: absolute;
        top: 10px;
        left: 20px;
        font-size $font-size-16;
        color: #999;
      }
    }
  }

  .content-top:after {
    content: '';
    height: 0;
    inline-height: 0;
    display: block;
    visibility: hidden;
    clear: both;
  }

  .content-bottom {
    height: 78%;
    padding-bottom: 100px;
    background-color #fff;
    box-shadow:0px 1px 7px 0px rgba(216,223,238,0.5);
  }

  .layer-container {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.4);

    .contentBox {
      position: relative;
      margin: 270px 0 0 460px;
      width: 1000px;
      height: 540px;
      background: rgba(255,255,255, 1);
      .model_title {
        height: 30px;
        background: -webkit-gradient(linear, left center, right center, from(#548AFF), to(#6956FF));
        text-align: center;
        color: #fff;
        font-size: 18px;
        padding-top: 10px;

        .model_show_time_img {
          float: right;
          display: inline-block;
          width: 18px;
          height: 18px;
          margin-right: 25px;
          margin-top: 5px;
          cursor: pointer;
        }
      }

      .model_content {
        margin-top: 40px;

        ul {
          li {
            margin-bottom: 20px;

            span {
              display: inline-block;
              height: 40px;
              line-height: 40px;
              text-align: right;
              font-size: $font-size-18;
              padding: 0 10px;
              b {
              position: relative;
              top: -0.06rem;
              left: 0;
              color: #FC605C;
              font-size: $font-size-10;
            }
            }

            span:first-child {
              width: 230px;
            }

            input {
              display: inline-block;
              height: 40px;
              width: 600px;
              padding-left: 8px;
              font-size $font-size-18;
              background-color: #E5E5E5;
              border-radius: 4px;
            }

            .others {
              width: 200px !important;
            }
          }
        }
      }

      .model_bottom {
        position: absolute;
        bottom: 85px;
        left: 390px;

        span, submit {
          display: inline-block;
          width: 100px;
          height: 34px;
          line-height: 34px;
          color: #fff;
          text-align: center;
          box-shadow: 0px 1px 7px 0px rgba(188, 188, 188, 0.65);
          border-radius: 4px;
          font-size: $font-size-18;
        }

        .cancelBtn {
          background: rgba(153, 153, 153, 1);
          margin-right: 20px;
        }

        .commitBtn {
          background: rgba(71, 117, 202, 1);
        }
      }
    }
  }
}
</style>
<style >
</style>
