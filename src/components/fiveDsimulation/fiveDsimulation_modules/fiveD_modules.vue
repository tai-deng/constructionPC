<template>
  <div class="container">
    <!-- <div class="right-container" v-if="showMode">
      <ul class="gantt-infos">
        <li class="gantt-infos-i">{{selectedTask.date}}</li>
        <li class="gantt-infos-i">{{selectedTask.structure}}</li>
        <li class="gantt-infos-i">{{selectedTask.stup}}</li>
      </ul>
      <div class="gantt-infos-img flex-row">
        <div ref="modelContainer" class="gantt-infos-img"></div>
      </div>
      <div class="gantt-infos-tip flex-row">施工进度模拟</div>
    </div> -->
    <gantt class="left-container"></gantt>
  </div>
</template>

<script>
import Gantt from "../fiveDsimulation_components/fiveHead";
import { mapMutations, mapGetters} from "vuex";

export default {
  name: "fiveD_modules",
  components: { Gantt },
  data() {
    return {
      // gantt 页面数据
      tasks: {
        data: [
          {
            id: 1,
            text: "一级菜单",
            type: "project",
            progress: 0.4,
            open: true,
            start_date: "02-04-2018 00:00",
            duration: 17,
            parent: 0
          },
          {
            id: 2,
            text: "一级菜单子菜单",
            type: "project",
            start_date: "02-04-2018 00:00",
            duration: 5,
            progress: 0.6,
            parent: 1,
            open: true
          },
          {
            id: 5,
            text: "子菜单的子菜单",
            type: "task",
            start_date: "02-04-2018 00:00",
            duration: 3,
            parent: 2,
            progress: 0.6,
            open: true
          },
          {
            id: 6,
            text: "Air conditioners check",
            type: "task",
            start_date: "05-04-2018 00:00",
            duration: 2,
            parent: 2,
            progress: 0.29,
            open: true
          },
          {
            id: 3,
            text: "Furniture installation",
            type: "project",
            start_date: "08-04-2018 00:00",
            duration: 2,
            parent: 1,
            progress: 0.6,
            open: false
          },
          {
            id: 7,
            text: "Workplaces preparation",
            type: "task",
            start_date: "08-04-2018 00:00",
            duration: 2,
            parent: 3,
            progress: 0.6,
            open: true
          },
          {
            id: 4,
            text: "The employee relocation",
            type: "project",
            start_date: "10-04-2018 00:00",
            duration: 9,
            parent: 1,
            progress: 0.5,
            open: true
          },
          {
            id: 8,
            text: "Preparing workplaces",
            type: "task",
            start_date: "10-04-2018 00:00",
            duration: 3,
            parent: 4,
            progress: 0.5,
            open: true
          },
          {
            id: 9,
            text: "Workplaces importation",
            type: "task",
            start_date: "13-04-2018 00:00",
            duration: 3,
            parent: 4,
            progress: 0.5,
            open: true
          },
          {
            id: 10,
            text: "Workplaces exportation",
            type: "task",
            start_date: "16-04-2018 00:00",
            duration: 3,
            parent: 4,
            progress: 0.5,
            open: true
          },
          {
            id: 11,
            text: "Product launch",
            type: "project",
            progress: 0.6,
            open: true,
            start_date: "02-04-2018 00:00",
            duration: 17,
            parent: 0
          },
          {
            id: 12,
            text: "Perform Initial testing",
            type: "task",
            start_date: "02-04-2018 00:00",
            duration: 5,
            parent: 11,
            progress: 1,
            open: true
          },
          {
            id: 13,
            text: "Development",
            type: "project",
            start_date: "03-04-2018 00:00",
            duration: 16,
            parent: 11,
            progress: 0.5,
            open: true
          },
          {
            id: 17,
            text: "Develop System",
            type: "task",
            start_date: "03-04-2018 00:00",
            duration: 5,
            parent: 13,
            progress: 1,
            open: true
          },
          {
            id: 25,
            text: "Beta Release",
            type: "milestone",
            start_date: "08-04-2018 00:00",
            duration: 0,
            parent: 13,
            progress: 0,
            open: true
          },
          {
            id: 18,
            text: "Integrate System",
            type: "task",
            start_date: "08-04-2018 00:00",
            duration: 4,
            parent: 13,
            progress: 0.8,
            open: true
          },
          {
            id: 19,
            text: "Test",
            type: "task",
            start_date: "12-04-2018 00:00",
            duration: 3,
            parent: 13,
            progress: 0.2,
            open: true
          },
          {
            id: 20,
            text: "Marketing",
            type: "task",
            start_date: "15-04-2018 00:00",
            duration: 4,
            parent: 13,
            progress: 0,
            open: true
          },
          {
            id: 14,
            text: "Analysis",
            type: "task",
            start_date: "02-04-2018 00:00",
            duration: 4,
            parent: 11,
            progress: 0.8,
            open: true
          },
          {
            id: 15,
            text: "Design",
            type: "project",
            start_date: "06-04-2018 00:00",
            duration: 6,
            parent: 11,
            progress: 0.2,
            open: true
          },
          {
            id: 21,
            text: "Design database",
            type: "task",
            start_date: "06-04-2018 00:00",
            duration: 4,
            parent: 15,
            progress: 0.5,
            open: true
          },
          {
            id: 22,
            text: "Software design",
            type: "task",
            start_date: "08-04-2018 00:00",
            duration: 4,
            parent: 15,
            progress: 0.1,
            open: true
          },
          {
            id: 16,
            text: "Documentation creation",
            type: "task",
            start_date: "11-04-2018 00:00",
            duration: 5,
            parent: 11,
            progress: 0,
            open: true
          },
          {
            id: 24,
            text: "Release v1.0",
            type: "milestone",
            start_date: "19-04-2018 00:00",
            duration: 0,
            parent: 11,
            progress: 0,
            open: true
          }
        ],
        links: [
          { id: 1, source: "2", target: "3", type: "0" },
          { id: 2, source: "3", target: "4", type: "0" },
          { id: 3, source: "17", target: "25", type: "0" },
          { id: 4, source: "18", target: "19", type: "0" },
          { id: 5, source: "19", target: "20", type: "0" },
          { id: 6, source: "13", target: "24", type: "0" },
          { id: 7, source: "25", target: "18", type: "0" },
          { id: 8, source: "5", target: "6", type: "0" },
          { id: 9, source: "8", target: "9", type: "0" },
          { id: 10, source: "9", target: "10", type: "0" },
          { id: 11, source: "16", target: "24", type: "0" },
          { id: 12, source: "14", target: "15", type: "0" }
        ]
      },
      // 选择模型数据--模拟数据
      // selectedTask: {
      //   date: "2018 - 10 - 10",
      //   structure: "主体结构 10% C20混凝土 100.00m³",
      //   stup: "机电安装 10% C30混凝土 100.00m³"
      // }
    };
  },
  created() {
    // this.modelBox({
    //   isShowModel: false, //是否显示模型 true:显示模型，如果模型已加载，则显示 false:隐藏模型
    //   isLoadModel: true, //是否加载模型 true：加载模型，如果已经加载，不会重新加载， false:卸载模型
    //   background: "",
    //   ElementIDs: [], // 所有要显示的构件数组，包括半隐藏构件
    //   highLightElementIDs: [], // 高亮显示的构件
    //   functionNumber: [34] // 需要模型调用的函数编号数组
    // });
  },
  mounted(){
    if(this.getIsViewAdded){
        document.getElementsByClassName('bf-toolbar-bottom')[0].style.display= 'none'
        document.getElementsByClassName('bf-tree-toolbar')[0].style.display= 'none'
    }
  },
  methods: {
    // 暂停播放
    onPause() {
      console.log("暂停播放");
    },

    // 播放
    onPlay() {
      console.log("播放-模型" + this.selModel + "筛选日期" + this.selDate);
    },

    // 获取模型数据
    getModelData(item) {},

    // 显示模型
    onShowMode(c) {
      if (c) {
        this.$nextTick(() => {
          this.$util.getDomLocation(this, "modelContainer").then(res => {
            this.modelBox({
              isShowModel: true, //是否显示模型 true:显示模型，如果模型已加载，则显示 false:隐藏模型
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
      } else {
        this.modelBox({
          isShowModel: false, //是否显示模型 true:显示模型，如果模型已加载，则显示 false:隐藏模型
          isLoadModel: true, //是否加载模型 true：加载模型，如果已经加载，不会重新加载， false:卸载模型
          background: "",
          ElementIDs: [], // 所有要显示的构件数组，包括半隐藏构件
          highLightElementIDs: [], // 高亮显示的构件
          functionNumber: [34] // 需要模型调用的函数编号数组
        });
      }
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
            functionNumber: [42] // 需要模型调用的函数编号数组
          });
        });
      });
    },
    ...mapMutations({
      modelBox: "GET_MODEL_BOX"
    })
  },
  watch: {
    // 暂停播放
    pause(c, o) {
      if (c) this.onPause();
    },

    // 播放
    play(c, o) {
      if (c) this.onPlay();
    },

    // 显示模型
    showMode(c, o) {
      this.onShowMode(c);
    },

    // 模型
    selModel(c, o) {
      if (c) this.getModelData(c);
    },
    getIsViewAdded(val){
      console.log(val)
      if(val){
        document.getElementsByClassName('bf-toolbar-bottom')[0].style.display= 'none'
        document.getElementsByClassName('bf-tree-toolbar')[0].style.display= 'none'
      }
    }
  },
  computed: {
     ...mapGetters(['getIsViewAdded']),
    // 选择模型数据
    selModel() {
      return this.$store.getters.getGanttState.selModel;
    },

    // 筛选日期
    selDate(p) {
      return this.$store.getters.getGanttState.selDate;
    },

    // 暂停播放
    pause() {
      return this.$store.getters.getGanttState.pause;
    },

    // 播放
    play() {
      return this.$store.getters.getGanttState.play;
    },

    // 显示模型
    showMode() {
      return this.$store.getters.getGanttState.showMode;
    }
  }
};
</script>

<style>
.container {
  height: 100%;
  width: 100%;
}

/* .left-container {
  overflow: hidden;
  height: 100%;
}
.flex-row {
  display: flex;
  align-items: center;
  justify-content: center;
} */
</style>
