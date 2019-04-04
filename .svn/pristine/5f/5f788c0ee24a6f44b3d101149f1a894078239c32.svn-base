<!-- 时间管理-施工员 time -->
<template lang="pug" src="./index.pug"></template>
<style lang="stylus" src="./index.styl" scoped></style>

<script type="textecmascript-6">
import Timeline from "@/common/timeline/index";
import commonDialog from "@/common/common-dialog/index";
import { mapMutations } from "vuex";

export default {
  components: {
    Timeline,
    commonDialog
  },
  created() {
    this.initModel();  //加载模型
  },
  mounted() {},
  data() {
    return {
      isProgressDetail: false,
      progressDetailStyle: {
        left: "160px"
      },
      /**[当前模型] */
      type: 1,
      /**[所有模型] 可选项 */
      typeOptions: [
        { label: "AAA", value: 1 },
        { label: "BBB", value: 2 },
        { label: "CCC", value: 3 }
      ],
      /**[进度所有数据] */
      porgressOptions: [
        {
          message: "error",
          progress: "50%",
          title: "活动按期开始",
          start_time: "2019-01-05",
          end_time: "2019-01-05",
          isAdd: false
        },
        {
          message: "success reverse",
          progress: "50%",
          title: "活动按期开始",
          start_time: "2019-01-05",
          end_time: "2019-01-05",
          isAdd: false
        },
        {
          message: "success add",
          progress: "50%",
          title: "活动按期开始",
          start_time: "2019-01-05",
          end_time: "2019-01-05",
          isAdd: true
        },
        {
          message: "success add",
          progress: "50%",
          title: "活动按期开始",
          start_time: "2019-01-05",
          end_time: "2019-01-05",
          isAdd: true
        },
        {
          message: "success reverse",
          progress: "50%",
          title: "活动按期开始",
          start_time: "2019-01-05",
          end_time: "2019-01-05",
          isAdd: false
        }
      ],
      dialogType: "add",
      /**[表单] */
      dialogForm: {
        time: "2018-12-1 12:12:12",
        progress: "12%",
        name: "李xx"
      },
      imgList1: [{ name: "11", url: require("./img2.jpg") }],
      imgList2: [{ name: "11", url: require("./img2.jpg") }]
    };
  },
  computed: {},
  methods: {
    listenWrapper() {
      this.isProgressDetail = false;
    },
    onEditProgress(item, index) {
      if (item.isAdd) {
        this.imgList1 = [];
        this.imgList2 = [];
      } else {
        this.imgList1 = [{ name: "11", url: require("./img.png") }];
        this.imgList2 = [{ name: "11", url: require("./img.png") }];
      }
      this.progressDetailStyle = {
        left: 160 + index * (250 - index * 30) + "px"
      };
      this.$nextTick(() => {
        this.toggleDetail();
      }, 400);
    },
    toggleDetail() {
      this.isProgressDetail = !this.isProgressDetail;
    },
    dialogOk() {},
    dialogClose() {
      this.$refs.commonDialogRef.hide();
    },
    handlePictureCardPreview(a, b) {
      console.log(a, b);
    },
    handleRemove() {},
    submit() {
      console.log(this.imgList1);
    },
    /**
     * 加载模型
     */
    initModel(){
      this.$nextTick(() => {
        this.$util.getDomLocation(this, "modelContainer").then(res => {
          console.log(res)
          this.modelBox({
            isShowModel: true, //是否显示模型 true:显示模型，如果模型已加载，则显示  false:隐藏模型
            isLoadModel: true, //是否加载模型  true：加载模型，如果已经加载，不会重新加载，  false:卸载模型
            top: res.top, //距离顶部距离‘px'
            left: res.left, //距离左边距离‘px'
            width: res.width, //模型宽‘px'
            height: res.height, //模型高 ‘px'
            zIndex: 100, //模型层级
            background: "",
            ElementIDs: [], // 所有要显示的构件数组，包括半隐藏构件
            highLightElementIDs: [], // 高亮显示的构件
            functionNumber: [] // 需要模型调用的函数编号数组
          });
        });
      });
    },
    ...mapMutations({
      modelBox: "GET_MODEL_BOX"
    })
  },
  watch: {}
};
</script>
<style scoped>
.model-container {
  width: 98%;
  height: 100%;
  padding: 0 !important;
  z-index:90;
  margin-top: 50px;
}
</style>