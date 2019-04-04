<!-- 弹窗 popup -->
<template>
  <div class="popup-container flex-row">
    <!-- {{popupValue.title}} -->
    <div class="popup-center" :class="{'popup-center-b':popupValue.title=='禁用'}">
      <div class="popup-center-title flex-row">
        <div class="popup-center-title-m">{{popupValue.title}}</div>
        <div class="popup-center-title-close el-icon-close" @click="onClose"></div>
      </div>
      <div class="popup-center-item flex-row" :class="{'popup-center-item-b':popupValue.title=='禁用'}" >
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="popup-center-item-form flex-column"
          :class="{'popup-center-item-form-b':popupValue.title=='禁用'}"
        >
          <div class="popup-center-item-form-content" :class="{'subjoin':popupValue.title=='新增人员'}">
            <template v-if="popupValue.title=='部门'">
              <el-form-item label="所属公司">
                <el-select v-model="ruleForm.region" placeholder="选择所属公司">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="部门编码">
                <el-input v-model="ruleForm.name" placeholder="请输入部门编码" key="department-code"></el-input>
              </el-form-item>

              <el-form-item label="部门名称">
                <el-input v-model="ruleForm.name" placeholder="请输入部门编码" key="department-title"></el-input>
              </el-form-item>
            </template>

            <template v-else-if="popupValue.title=='新增人员'">
              <el-form-item label="所属公司">
                <el-select v-model="ruleForm.region" placeholder="选择所属公司">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="所属部门">
                <el-select v-model="ruleForm.region" placeholder="选择所属部门">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="用户账号">
                <el-input v-model="ruleForm.name" placeholder="请输入用户账号" key="personnel-account"></el-input>
              </el-form-item>

              <el-form-item label="用户姓名">
                <el-input v-model="ruleForm.name" placeholder="请输入用户姓名" key="personnel-username"></el-input>
              </el-form-item>

              <el-form-item label="联系号码">
                <el-input v-model="ruleForm.name" placeholder="请输入联系号码" key="personnel-phone"></el-input>
              </el-form-item>

              <el-form-item label="微信号码">
                <el-input v-model="ruleForm.name" placeholder="请输入微信号码" key="personnel-wechat"></el-input>
              </el-form-item>

              <el-form-item label="邮箱">
                <el-input v-model="ruleForm.name" placeholder="请输入邮箱" key="personnel-email"></el-input>
              </el-form-item>

              <el-form-item label="所负责区域">
                <el-select v-model="ruleForm.region" placeholder="AI">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </template>

            <template v-else-if="popupValue.title=='角色'">
              <el-form-item label="角色编码">
                <el-input v-model="ruleForm.name" placeholder="请输入角色编码" key="role-code"></el-input>
              </el-form-item>

              <el-form-item label="角色名称">
                <el-input v-model="ruleForm.name" placeholder="请输入角色名称" key="role-title"></el-input>
              </el-form-item>
            </template>

            <template v-else-if="popupValue.title=='禁用'">
              <div class="disabled-label">是否确定禁用该人员?禁用后不可恢复</div>

              <el-form-item class="disabled-form-item">
                <el-select v-model="ruleForm.region" placeholder="选择项目转接人员">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </template>
          </div>
          <el-form-item class="popup-center-item-form-btn">
            <el-button class="popup-center-item-form-btn-cancel" @click="onClose">取消</el-button>
            <el-button
              class="popup-center-item-form-btn-affirm"
              type="primary"
              @click="submitForm('ruleForm')"
            >确认</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "popups",
  data() {
    return {
      ruleForm: {
        name: "",
        region: ""
      },
      rules: {
        // name: [
        //   { required: true, message: "请输入活动名称", trigger: "blur" },
        //   { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        // ],
        // region: [
        //   { required: true, message: "请选择活动区域", trigger: "change" }
        // ]
      }
    };
  },
  props: {
    popupValue: null
  },
  methods: {
    // 关闭
    onClose() {
      this.$emit("onClose");
    },

    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  computed: {}
};
</script>

<style lang='stylus' scoped rel='stylesheet/stylus'>
.popup-container {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);

  .popup-center {
    width: 1000px;
    height: 715px;
    background-color: #fff;

    .popup-center-item {
      height: 675px;

      .popup-center-item-form {
        width: 560px;
        height: 496px;

        .popup-center-item-form-btn {
          font-size: 16px;
          font-family: SourceHanSansCN-Medium;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);

          .popup-center-item-form-btn-cancel {
            width: 120px;
            height: 40px;
            background: rgba(153, 153, 153, 1);
            box-shadow: 0px 2px 4px 0px rgba(81, 81, 81, 0.5);
            border-radius: 4px;
            font-size: 16px;
            font-family: SourceHanSansCN-Medium;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            border-width: 0;
            margin-right: 30px;
          }

          .popup-center-item-form-btn-affirm {
            width: 120px;
            height: 40px;
            background: rgba(71, 117, 202, 1);
            box-shadow: 0px 2px 4px 0px rgba(161, 192, 250, 1);
            border-radius: 4px;
          }
        }

        .popup-center-item-form-content {
          .disabled-label {
            font-size: 24px;
            font-family: SourceHanSansCN-Medium;
            font-weight: 500;
            color: rgba(252, 96, 92, 1);
          }

          .disabled-form-item {
            margin-top: 34px;
          }
        }
      }
    }

    .popup-center-title {
      height: 40px;
      background: linear-gradient(225deg, rgba(105, 86, 255, 1) 0%, rgba(84, 138, 255, 1) 100%);
      font-size: 18px;
      font-family: SourceHanSansCN-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      position: relative;

      .popup-center-title-close {
        position: absolute;
        right: 19px;
        top: 10px;
      }
    }
  }
}
</style>
<style>
.popup-center-item-form-content .el-select .el-input__inner {
  color: rgba(255, 255, 255, 1);
}

.popup-center-item-form-content .el-select {
  width: 100%;
  height: 40px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 7px 0px rgba(229, 229, 229, 1);
  border-radius: 4px;
}
.popup-center-item-form-content .el-input--suffix .el-input__inner {
  border: none;
}
.popup-center-item-form-content .el-input__suffix {
  background: rgba(67, 80, 137, 1);
  border-radius: 0px 4px 4px 0px;
  right: 0;
  width: 40px;
}
.popup-center-item-form-content .el-icon-arrow-up:before {
  /* content: "\e60b"; */
  content: "\e60c";
  color: rgba(255, 255, 255, 1);
}
.popup-center-item-form-content .center-select {
  margin: 0 20px;
}
.popup-center-item-form-content
  .input-number
  .el-input-group--append
  .el-input__inner,
.popup-center-item-form-content .el-input-group__prepend {
  height: 40px;
  background: rgba(248, 248, 248, 1);
  border-radius: 4px;
  border: 1px solid rgba(229, 229, 229, 1);
  border-right: 1px dashed #979797;
}
.popup-center-item-form-content .el-input__inner {
  background: rgba(248, 248, 248, 1);
  border-radius: 4px;
  border: 1px solid rgba(229, 229, 229, 1);
}
.popup-center-item-form-btn .el-form-item__content {
  margin-left: 0 !important;
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.disabled-form-item .el-form-item__content {
  margin-left: 0 !important;
}
.popup-center-item-form-btn .el-form-item::after,
.popup-center-item-form-btn .el-form-item::before {
  display: none;
}
.subjoin {
  margin-top: -20px;
}
.popup-center-b{
  height: 481px !important;

}
.popup-center-item-form-b {
  width: 408px !important;
  height: 200px !important;
}
.popup-center-item-b {
  height: 431px !important;
}
</style>

