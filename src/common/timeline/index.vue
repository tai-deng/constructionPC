<template lang="html">
<div class="timeline">
  <ul>
    <li @click.stop="doAction(item, index)" v-for="(item,index) in value" :key="index" :style="`width: ${width}px`" :class="item.message && item.message">
      <div v-if="item.top && item.top.length" class="timeline-top">
        <p v-for="(t,i) in item.top" :class="t.class && t.class" :key="i">{{ t.text }}</p>
      </div>
      <div class="ico-wrapper">
        <span class="ico" :class="item.icoClassName || 'el-icon-circle-plus-outline'"></span>
        <span v-if="index < value.length - 1 || (index === (value.length - 1) && isShowLastLine)" class="line" :style="`width: ${width}px`"></span>
      </div>
      <div v-if="item.bottom && item.bottom.length" class="timeline-content">
        <p v-for="(t,i) in item.bottom" :class="t.class && t.class" :key="i">{{ t.text }}</p>
      </div>
    </li>
  </ul>
</div>
</template>


<script type="textecmascript-6">
export default {
  components: {},
  props: {
    /**是否显示点 */
    isShowDot: {
      type: Boolean,
      default: true
    },
    /**是否显示最后一条线 */
    isShowLastLine: {
      type: Boolean,
      default: false
    },
    /**[值] */
    value: Array,
    /**[线条宽度] */
    width: {
      type: Number,
      default: 120
    }
  },
  created() {
    console.log(this.value, "1111");
  },
  mounted() {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    doAction(item, index) {
      this.$emit("action", { item, index });
    }
  }
};
</script>

<style lang="stylus" scoped>
.timeline
  .hideIco
    width 28px
    height 28px
    background #4775CA
    border-radius 50%

  >>>
    .el-icon-success::before
      color #4775ca

  ul
    display flex

  .timeline-content, .timeline-top
    p
      overflow hidden
      text-overflow ellipsis
      white-space nowrap

  .ico-wrapper
    position relative
    line-height 0
    overflow hidden

    .ico
      display inline-block
      font-size 28px
      color #4775CA

    .line
      position absolute
      left 28px
      top 50%
      display block
      width 100%
      height 0
      border-top 1px solid #E5E5E5
      transform translateY(-50%)
</style>