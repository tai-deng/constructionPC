<!-- 组织管理模块  interaction-->
<template>
  <div class="interaction-container">
    <!-- 部门 -->
    <department
      class="department"
      ref="department"
      @onPopup="onPopup"
      @get_department_sel="get_department_sel"
    ></department>

    <!-- 人员 -->
    <personnel
      ref="personnel"
      class="personnel"
      @onPopup="onPopup"
      :department_sel="department_sel"
      @get_personnel_sel="get_personnel_sel"
    ></personnel>

    <!-- 角色 -->
    <role
      class="role"
      ref="role"
      @onPopup="onPopup"
      :personnel_sel="personnel_sel"
      @get_role_sel="get_role_sel"
    ></role>

    <!-- 权限 -->
    <jurisdiction class="jurisdiction" ref="jurisdiction"></jurisdiction>

    <!-- 弹窗 -->
    <popup class="popup" ref="popup" v-if="showpopup" :popupValue="popupValue" @onClose="onClose"></popup>
  </div>
</template>
<script>
import department from "../components/department";
import jurisdiction from "../components/jurisdiction";
import personnel from "../components/personnel";
import popup from "../components/popup";
import role from "../components/role";
export default {
  data() {
    return {
      // 是否展示弹窗
      showpopup: false,
      // set弹窗数据
      popupValue: {
        value: ""
      },
      // 选中部门
      department_sel: null,
      // 选中人员
      personnel_sel: null,
      // 选中的角色
      role_sel:null,
    };
  },
  name: "interactions",
  components: {
    department,
    jurisdiction,
    personnel,
    popup,
    role
  },
  methods: {
    // 打开弹窗
    onPopup(e) {
      if (e == "department") {
        this.popupValue.title = "部门";
      } else if (e == "role") {
        this.popupValue.title = "角色";
      } else if (e == "personnel") {
        this.popupValue.title = "新增人员";
      } else if (e == "onDisabled") {
        this.popupValue.title = "禁用";
      }
      this.showpopup = true;
    },
    //  关闭弹窗
    onClose() {
      this.showpopup = false;
    },
    // 获取所选部门
    get_department_sel(v) {
      this.department_sel = v;
    },
    // 获取所选人员
    get_personnel_sel(v) {
      this.personnel_sel = v;
    },
    // 获取所选角色
    get_role_sel(v){
      this.role_sel= v;
    }
  },
  computed: {},
  watch: {}
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.interaction-container {
  width: 100%;
  height: 100%;
  display: flex;

  .department {
    margin: 20px;
  }

  .personnel, .role, .jurisdiction {
    margin: 20px 20px 20px 0;
    flex: 1;
  }

  .flex-row {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flex-arrow {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .flex-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .flex-end {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .flex {
    display: flex;
    align-items: center;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

  .selClick {
    background: rgba(202, 210, 246, 1) !important;
  }
}
</style>