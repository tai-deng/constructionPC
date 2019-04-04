<!-- dataDictionary -->
<template>
  <div class='container-data-dictionary'>
    <div class='wrapper' id="container_dictionary">
      <el-tabs
        :tab-position="tabPosition"
        style="height: 100%;"
      >
        <el-tab-pane label="工程类型管理">
          <engineeringclass></engineeringclass>
        </el-tab-pane>
        <el-tab-pane label="变更类型管理"><modelclass></modelclass></el-tab-pane>
        <el-tab-pane label="工程洽商类型管理"><vantureclass></vantureclass></el-tab-pane>
        <el-tab-pane label="模型类型管理"><modifyclass></modifyclass></el-tab-pane>
        <el-tab-pane label="风险类型管理"><consulationclass></consulationclass></el-tab-pane>
        
      </el-tabs>

    </div>
  </div>
</template>

<script type='textecmascript-6'>
import engineeringclass from './components/engineeringClass';
import modelclass from './components/modelClass'
import vantureclass from './components/ventureClass'
import modifyclass from './components/modifyClass'
import consulationclass from './components/consulationClass'
export default {
  data() {
    return {
      tabPosition: "left"
    };
  },
  components: {
    engineeringclass,
    modelclass,
    vantureclass,
    modifyclass,
    consulationclass
  }
};
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
.container-data-dictionary {
  width: 100%;
  height: 100%;
}
</style>
<style lang='stylus' rel='stylesheet/stylus'>
@import '../../../assets/stylus/variable'
#container_dictionary,
#container_dictionary .el-tabs__content,
#container_dictionary .el-tab-pane {
  height 100%;
}
 .container-data-dictionary #container_dictionary .el-tabs__item {
   width: 280px;
   text-align: center;
   font-size $font-size-16;

 }
 #container_dictionary .el-tabs__item.is-active {
   color: #fff;
   background-color #4775CA;
 
 }
 .container-data-dictionary #container_dictionary .el-tabs__item:after {
  
     position: absolute;
   top:0;
   left:0;
   content: '';
   width 0px;
   height 0px;
   border: 20px solid trasparent;
   border-left:20px solid red;
   z-index 100;
 }
 .container-data-dictionary #container_dictionary .el-tabs__header {
   margin-right: 0;
 }
 .test {
   background-color #4775CA;
 }
 .test:after {
   position: absolute;
   top:0;
   left:0;
   content: '';
   width 0px;
   height 0px;
   border: 20px solid green;
   border-left:20px solid red;
   
 }
</style>