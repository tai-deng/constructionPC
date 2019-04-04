<!-- 部门 department -->
<template>
  <div class="department-container">
    <div class="d-title flex-row">
      <div class="d-title-text">部门</div>
      <div class="d-title-btn el-icon-menu" @click="onPopup"></div>
    </div>
    <div class="d-set-content-warp">
      <div class="d-department-item" v-for="(item, index) in department_s" :key="item.id">
        <div class="d-department-item-title flex-between" @click="onShowItem(index)">
          <div class="d-department-item-title-l">{{item.name}}</div>
          <div
            class="d-department-item-title-r"
            :class="item.isClick?'el-icon-caret-bottom':'el-icon-caret-top'"
          ></div>
        </div>
        <template v-if="item.isClick">
          <div
            class="d-department-item-c flex-between"
            :class="{'selClick': v.isClick}"
            v-for="(v,ind) in item.d_item"
            :key="v.id"
            @click="onChooseItem(index,ind)"
          >
            <div class="d-department-item-c-l">{{v.name}}</div>
            <div class="d-department-item-c-r flex-row">
              <div class="d-department-item-c-r-edit" @click.stop="onPopup(v)">编辑</div>
              <div class="d-department-item-c-r-del" @click.stop="onDel(v)">删除</div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "departments",
  data() {
    return {
      department_s: null,
      department_sel: ""
    };
  },
  props: {},
  mounted() {
    this.department_s = [
      {
        name: "xxx建工集团有限公司",
        id: 1,
        isClick: true,
        d_item: [
          { isClick: true, name: "xxx建设部门1", id: 1 },
          { isClick: false, name: "xxx建设部门2", id: 2 },
          { isClick: false, name: "xxx建设部门3", id: 3 },
          { isClick: false, name: "xxx建设部门4", id: 4 },
          { isClick: false, name: "xxx建设部门5", id: 5 },
          { isClick: false, name: "xxx建设部门6", id: 6 }
        ]
      },
      {
        name: "xxx建工集团有限公司2",
        id: 2,
        isClick: true,
        d_item: [
          { isClick: false, name: "xxx建设部门1", id: 7 },
          { isClick: false, name: "xxx建设部门2", id: 8 },
          { isClick: false, name: "xxx建设部门3", id: 9 },
          { isClick: false, name: "xxx建设部门4", id: 10 },
          { isClick: false, name: "xxx建设部门5", id: 11 },
          { isClick: false, name: "xxx建设部门6", id: 12 }
        ]
      }
    ];
    this.department_sel= this.department_s[0].d_item[0].id;
  },
  methods: {
    // 弹窗
    onPopup() {
      this.$emit("onPopup", "department");
    },
    // 编辑
    onEdit(e) {
      console.log(e);
    },
    //删除
    onDel(e) {
      console.log(e);
    },
    // 展示隐藏
    onShowItem(index) {
      this.department_s[index].isClick = !this.department_s[index].isClick;
    },
    // 选中
    onChooseItem(index, ind) {
      this.department_s.forEach((element, i) => {
        element.d_item.forEach((e, inn) => {
          e.isClick = false;
        });
      });
      this.department_s[index].d_item[ind].isClick = true;
      this.department_sel = this.department_s[index].d_item[ind].id;
    }
  },
  computed: {},
  watch: {
    department_sel(id, o) {
      this.$emit("get_department_sel", id);
    }
  }
};
</script>

<style lang='stylus' scoped rel='stylesheet/stylus'>
.department-container {
  width: 24.44%;
  box-shadow: 0px 3px 7px 0px rgba(229, 229, 229, 1);
  background-color: #fff;
  position: relative;

  .d-department-item {
    .d-department-item-title {
      height: 40px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 7px 0px rgba(216, 223, 238, 1);
      font-size: 16px;
      font-family: SourceHanSansCN-Medium;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      padding: 0 20px;
    }

    .d-department-item-c {
      height: 40px;
      font-size: 18px;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      background-color: rgba(244, 246, 255, 1);

      .d-department-item-c-l {
        color: rgba(51, 51, 51, 1);
        margin-left: 54px;
      }

      .d-department-item-c-r {
        color: rgba(69, 128, 255, 1);
        margin-right: 20px;

        .d-department-item-c-r-edit {
          margin-right: 26px;
        }
      }
    }
  }

  .d-set-content-warp {
    padding-top: 50px;
    height: 95.6%;
    overflow-y: auto;
  }

  .d-title {
    width: 100%;
    height: 50px;
    background: rgba(67, 80, 137, 1);
    font-size: 20px;
    font-family: SourceHanSansCN-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    .d-title-btn {
      position: absolute;
      top: 0;
      right: 21px;
      line-height: 50px;
    }
  }
}
</style>