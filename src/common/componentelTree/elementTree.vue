<template>
  <div class="tree-style">
    <header>结构树
      <img v-if="closeShow" class="close" @click="closeTree" src="../../assets/imgs/close_model.png" alt="">
    </header>
    <el-select v-show="showSelect" v-model="floorId" placeholder="请选择" id="select1" @change="GetElementTree">
      <el-option v-for="item in options" :key="item.id" :label="item.text" :value="item.id"></el-option>
    </el-select>
    <el-tree ref="tree" node-key="id" class="tree_height" show-checkbox :default-expanded-keys="expandedKeys" :default-checked-keys="checkedKeys" highlight-current :data="array" :props="defaultProps" @check="handleCheckChange" @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script>
  export default {
    props: {
      showSelect: Boolean,
      options: Array,
      expandedKeys: Array,
      checkedKeys: Array,
      array: Array,
      defaultProps: Object,
      emptyTreeNodes: Boolean,
      closeShow: Boolean
    },
    data () {
      return {
        floorId: ''
      }
    },
    watch: {
      emptyTreeNodes (val) {
        console.log(val)
        if (val) {
          this.$refs.tree.setCheckedNodes([])
        }
      }
    },
    methods: {
      GetElementTree () {
        this.$emit('GetElementTree', this.floorId)
      },
      handleCheckChange (data, checked) {
        let treeList = this.$refs.tree.getCheckedNodes(true)
        this.$emit('handleCheckChange', data, checked, treeList)
      },
      handleNodeClick (row, node) {
        this.$emit('handleNodeClick', row, node)
      },
      closeTree () {
        this.$emit('closeHandle', false)
      }
    }
  }
</script>

<style>
  .el-select .el-input__inner {
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-radius: 0;
    border-color: #e5e5e5;
  }
</style>

<style lang="stylus" scoped>
  .tree-style {
    box-shadow: 0px 3px 7px 0px rgba(216, 223, 238, 1);

    header {
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      background: #435089;
      color: white;
      text-align: center;
    }

    .el-select {
      width: 100%;
      height: 40px;
      color: white;
      text-align: center;
    }

    .tree_height {
      height: 750px;
      overflow: auto;
    }

    .close {
      float: right;
      margin-right: 5px;
      cursor: pointer;
    }
  }
</style>


