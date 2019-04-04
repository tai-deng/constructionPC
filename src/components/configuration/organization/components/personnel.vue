<!-- 人员 personnel -->
<template>
  <div class="personnel-container">
    <div class="p-title flex-row">
      <div class="p-title-text">人员</div>
      <div class="p-title-btn el-icon-menu" @click="onPopup"></div>
    </div>
    <div class="p-set-content-warp">
      <div
        class="p-set-content"
        @click.stop="onChoose(index)"
        v-for="(item,index) in personnel_s"
        :key="index"
        :class="[i==index?'selClick':'']"
      >
        <div class="p-set flex-between">
          <div class="p-set-l flex-between">
            <div class="p-set-name">{{item.name}}</div>
            <div class="p-set-phone">{{item.phone}}</div>
          </div>
          <div class="p-set-r flex-end">
            <div
              class="p-set-reset"
              :class="{'hidden':item.disabled}"
              @click.stop="onReset(item.id)"
            >重置密码</div>
            <div
              class="p-set-reset"
              :class="{'hidden':item.disabled}"
              @click.stop="onPopup(item.id)"
            >编辑</div>
            <div class="p-set-disabled" @click.stop="onDisabled(item.id)">禁用</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "personnels",
  data() {
    return {
      data: null,
      personnel_s: null,
      i: 0,
      personnel_sel: null
    };
  },
  props: {
    department_sel: null
  },
  mounted() {
    this.data = [
      [
        {
          id: 1,
          name: "王某某",
          phone: "15197266720",
          disabled: false
        },
        {
          id: 2,
          name: "王某某1",
          phone: "15197266720",
          disabled: false
        },
        {
          id: 3,
          name: "王某某2",
          phone: "15197266720",
          disabled: false
        },
        {
          id: 4,
          name: "王某某3",
          phone: "15197266720",
          disabled: true
        }
      ],
      [
        {
          id: 5,
          name: "王某某5",
          phone: "15197266720",
          disabled: false
        },
        {
          id: 6,
          name: "王某某6",
          phone: "15197266720",
          disabled: false
        },
        {
          id: 7,
          name: "王某某7",
          phone: "15197266720",
          disabled: false
        },
        {
          id: 8,
          name: "王某某8",
          phone: "15197266720",
          disabled: true
        }
      ]
    ];
    this.personnel_s = this.data[0];
    this.personnel_sel = this.personnel_s[0].id;
  },
  watch: {
    // 选中的部门
    department_sel(c, o) {
      this.onSelPersonnel(c);
    },
    // 选中的人员
    personnel_sel(id, o) {
      this.$emit("get_personnel_sel", id);
    }
  },
  methods: {
    // 弹窗
    onPopup() {
      this.$emit("onPopup", "personnel");
    },
    // 选中
    onChoose(index) {
      this.i = index;
      this.personnel_sel = this.personnel_s[index].id;
    },
    // 重置密码
    onReset(e) {
      console.log(e);
    },
    // 编辑
    onEdit(e) {
      console.log(e);
    },
    // 禁用
    onDisabled(e) {
      console.log(e);
      this.$emit("onPopup", "onDisabled");
    },
    // 筛选人员
    onSelPersonnel(id) {
      let data = null;
      if (id % 2 == 0) {
        data = this.data[1];
      } else {
        data = this.data[0];
      }
      this.personnel_s = data;
      this.personnel_sel = this.personnel_s[0].id;
    }
  },
  computed: {}
};
</script>

<style lang='stylus' scoped rel='stylesheet/stylus'>
.personnel-container {
  width: 24.44%;
  box-shadow: 0px 3px 7px 0px rgba(229, 229, 229, 1);
  background-color: #fff;
  position: relative;

  .p-set-content {
    padding: 0 20px;

    .p-set {
      height: 40px;
      border-bottom: 1px solid #E5E5E5;

      .p-set-l {
        flex: 1;
        font-size: 16px;
        font-family: SourceHanSansCN-Normal;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);

        .p-set-l-name {
          flex: 1;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .p-set-phone {
          width: 110px;
        }
      }

      .p-set-r {
        font-size: 18px;
        font-family: SourceHanSansCN-Medium;
        font-weight: 500;
        width: 185px;

        .p-set-reset {
          color: rgba(69, 128, 255, 1);
          margin-right: 15px;
        }

        .p-set-disabled {
          color: rgba(252, 96, 92, 1);
        }
      }
    }
  }

  .p-set-content-warp {
    padding-top: 50px;
    height: 95.6%;
    overflow-y: auto;
  }

  .p-title {
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

    .p-title-btn {
      position: absolute;
      top: 0;
      right: 21px;
      line-height: 50px;
    }
  }
}
</style>