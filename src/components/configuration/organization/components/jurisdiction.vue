<!-- 权限 jurisdiction -->
<template>
  <div class="jurisdiction-container">
    <div class="j-title flex-row">
      <div class="j-title-text">权限</div>
    </div>
    <div class="j-set-content-scroll">
      <div class="j-set-content" v-for="(item,index) in jurisdiction_s" :key="item.id">
        <div class="j-set-warp">
          <div class="j-set flex-between" @click.stop="onChoose(index)">
            <div class="j-set-l flex">
              <div class="j-set-check">
                <el-checkbox size="18px" v-model="item.check" @change="onCheck"></el-checkbox>
              </div>
              <div class="j-set-name" :class="{'selText':item.id==1}">{{item.name}}</div>
            </div>
            <div
              class="j-set-r flex-end"
              :class="item.isClick?'el-icon-caret-bottom':'el-icon-caret-top'"
              v-if="item.children.length>0"
            ></div>
          </div>
        </div>
        <template v-if="item.isClick">
          <div class="j-set-children flex" v-for="va in item.children" :key="va.id">
            <el-checkbox
              size="18px"
              class="j-set-children-check"
              v-model="va.check"
              @change="onCheckChildren"
            ></el-checkbox>
            <div class="j-set-children-name">{{va.name}}</div>
            <template v-if="item.name== 'PM节点'">
              <div
                class="j-set-children-config"
                @click.stop="onConfig(va.id)"
              >{{va.config? '解除配置':'配置导航'}}</div>
            </template>
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
      jurisdiction_s: null,
      i: 0
    };
  },
  mounted() {
    let data = [
      {
        id: 1,
        check: false,
        name: "全选",
        children: []
      },
      {
        id: 10,
        check: false,
        name: "项目主页",
        children: [
          {
            id: 1,
            check: false,
            name: "数据总览"
          },
          {
            id: 2,
            check: false,
            name: "劳务实名制"
          },
          {
            id: 3,
            check: false,
            name: "视频监控"
          },
          {
            id: 4,
            check: false,
            name: "环境监控"
          }
        ]
      },
      {
        id: 2,
        check: false,
        name: "项目主页",
        children: []
      },
      {
        id: 3,
        check: false,
        name: "虚拟建造",
        children: [
          {
            id: 1,
            check: false,
            name: "数据总览"
          },
          {
            id: 2,
            check: false,
            name: "劳务实名制"
          },
          {
            id: 3,
            check: false,
            name: "视频监控"
          },
          {
            id: 4,
            check: false,
            name: "环境监控"
          }
        ]
      },
      {
        id: 4,
        check: false,
        name: "三维浏览",
        children: [
          {
            id: 1,
            check: false,
            name: "数据总览"
          },
          {
            id: 2,
            check: false,
            name: "劳务实名制"
          },
          {
            id: 3,
            check: false,
            name: "视频监控"
          },
          {
            id: 4,
            check: false,
            name: "环境监控"
          }
        ]
      },
      {
        id: 5,
        check: false,
        name: "5D模拟",
        children: []
      },
      {
        id: 6,
        check: false,
        name: "智慧工地",
        children: [
          {
            id: 1,
            check: false,
            name: "数据总览"
          },
          {
            id: 2,
            check: false,
            name: "劳务实名制"
          },
          {
            id: 3,
            check: false,
            name: "视频监控"
          },
          {
            id: 4,
            check: false,
            name: "环境监控"
          }
        ]
      },
      {
        id: 7,
        check: false,
        name: "PM节点",
        children: [
          {
            id: 1,
            check: false,
            name: "数据总览",
            config: false
          },
          {
            id: 2,
            check: false,
            name: "劳务实名制",
            config: true
          },
          {
            id: 3,
            check: false,
            name: "视频监控",
            config: true
          },
          {
            id: 4,
            check: false,
            name: "环境监控",
            config: false
          }
        ]
      },
      {
        id: 8,
        check: false,
        name: "智能报表-资料员",
        children: [
          {
            id: 1,
            check: false,
            name: "数据总览"
          },
          {
            id: 2,
            check: false,
            name: "劳务实名制"
          },
          {
            id: 3,
            check: false,
            name: "视频监控"
          },
          {
            id: 4,
            check: false,
            name: "环境监控"
          }
        ]
      },
      {
        id: 9,
        check: false,
        name: "功能配置",
        children: []
      }
    ];
    data.forEach(el => {
      el.isClick = true;
    });
    this.jurisdiction_s = data;
  },
  props: {},
  methods: {
    // 展开节点
    onChoose(index) {
      this.jurisdiction_s[index].isClick = !this.jurisdiction_s[index].isClick;
    },
    // 主check
    onCheck(e) {
      console.log(e);
    },
    // 子选项
    onCheckChildren(e) {
      console.log(e);
    },
    // 配置
    onConfig(id) {
      console.log("配置", id);
    }
  },
  computed: {}
};
</script>

<style lang='stylus' scoped rel='stylesheet/stylus'>
.jurisdiction-container {
  width: 24.44%;
  overflow: hidden;
  box-shadow: 0px 3px 7px 0px rgba(229, 229, 229, 1);
  color: rgba(102, 102, 102, 1);
  position: relative;

  .j-title {
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
  }

  .j-set-content-scroll {
    padding-top: 50px;
    height: 95.6%;
    overflow-y: auto;
  }

  .j-set-content {
    .j-set-warp {
      padding: 0 20px;
      background-color: #fff;
    }

    .j-set-children {
      height: 40px;
      background: rgba(244, 246, 255, 1);
      font-size: 18px;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      margin-left: 56px;
      position: relative;

      .j-set-children-check {
        width: 18px;
        height: 18px;
        margin-right: 20px;
      }

      .j-set-children-config {
        position: absolute;
        right: 21px;
        top: 5px;
        font-size: 18px;
        font-family: SourceHanSansCN-Regular;
        font-weight: 400;
        color: rgba(69, 128, 255, 1);
      }
    }

    .selText {
      color: #4580FF;
    }

    .j-set {
      height: 40px;
      border-bottom: 1px solid #E5E5E5;

      .j-set-l {
        flex: 1;
        font-size: 16px;
        font-family: SourceHanSansCN-Normal;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);

        .j-set-l-name {
          flex: 1;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .j-set-check {
          width: 18px;
          margin-right: 20px;
        }
      }

      .j-set-r {
        font-size: 18px;
        font-family: SourceHanSansCN-Medium;
        font-weight: 500;

        .j-set-reset {
          color: rgba(69, 128, 255, 1);
          margin-right: 15px;
        }
      }
    }
  }
}
</style>