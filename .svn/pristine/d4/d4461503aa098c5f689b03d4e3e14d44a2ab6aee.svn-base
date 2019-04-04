<template>
   <div class="tree"  :class="treeStatus?'trees':''">
     <div v-if="treeStatus" class="tree_box">
       <div class="tree_title">
         <div class="">构件清单 <span @click="colseTree">收起</span></div>
         <div class="tree_title_select">
           <el-select style="width:100%" v-model="tree"  placeholder="整体模型" @change="treeChange">
                <el-option   v-for="item in treeList"   :key="item.value"
                      :label="item.label"   :value="item.value">
                </el-option>
            </el-select>
         </div>
       </div>
       <!-- 结构树box -->
       <div class="tree_content">
         <div class="row tree_item_name tree_item_name1"><span class="tree_check">-</span>整体模型</div>
         <ul class="tree_item border_left" >
           <li @click="getOneIndex(index)" v-for='(item,index) in treeDate' :key='index'>
             <div class="row tree_item_name">
               <!-- 二级菜单--专业 -->
               <div v-if="item.children" class="row tree_node">
                 <span @click="getThis()" v-if="item.status" class="tree_check">-</span>
                 <span @click="getThis()" v-else class="tree_check">+</span>
                </div>
                <!-- <span class="tree_check"></span>{{item.label}} -->
                <el-checkbox  v-model="item.checked"  >{{item.label}}</el-checkbox>
              </div>
             <ul v-if='item.children && item.status' class="border_left">
                <li @click="getTwoIndex(index)" v-for='(item,index) in item.children' :key='index'>
                  <div class="row tree_item_name">
                    <!-- 三级菜单--楼层 -->
                    <div v-if="item.children" class="row tree_node">
                      <span @click="getThis()" v-if="item.status" class="tree_check">-</span>
                      <span @click="getThis()" v-else class="tree_check">+</span>
                    </div>
                    <!-- <span class="tree_check"></span>{{item.label}} -->
                    <el-checkbox  v-model="item.checked"  >{{item.label}}</el-checkbox>
                  </div>
                  <ul v-if='item.children && item.status' class="border_left">
                    <li @click="getThreeIndex(index)" v-for='(item,index) in item.children' :key='index'>
                      <div class="row tree_item_name">
                        <!-- 四级菜单--设备 -->
                        <div v-if="item.children" class="row tree_node">
                          <span @click="getThis()" v-if="item.status" class="tree_check">-</span>
                          <span @click="getThis()" v-else class="tree_check">+</span>
                        </div>
                        <!-- <span class="tree_check"></span>{{item.label}} -->
                        <el-checkbox  v-model="item.checked"  >{{item.label}}</el-checkbox>
                      </div>
                      <ul v-if='item.children && item.status' class="no_border_left">
                        <li v-for='(item,index) in item.children' :key='index'>
                          <div class="row tree_item_name">
                            <!-- 四级菜单--建筑材料 -->
                            <div v-if="item.children" class="row tree_node">
                              <span @click="getThis()" v-if="item.status" class="tree_check">-</span>
                              <span @click="getThis()" v-else class="tree_check">+</span>
                            </div>
                            <!-- <span class="tree_check"></span>{{item.label}} -->
                            <el-checkbox  v-model="item.checked"  >{{item.label}}</el-checkbox>
                          </div>
                          
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
           </li>
         </ul>
       </div>
     </div>
     <div v-else class="tree_img" @click='showTree'><img src="../../../assets/imgs/order_tree.png" alt=""></div>
   </div>
</template>
<script>
export default {
    data(){
        return{
            // 结构树的状态
            treeStatus:false,
      // 结构树下拉列表
            tree:'',
            treeList:[
                {label:'XXX易地扶贫搬迁项目-整体模型',value:1},
                {label:'搬迁项目-整体模型',value:2},
                {label:'XXX贫搬迁项目-整模型',value:3},
                {label:'XXX贫整体模型',value:4},
            ],
            //结构树数据
        treeDate: [{
          id: 1,
          label: '一级 2',
          status:false,
          checked:false,
          children: [
            {
              id: 3,
              label: '二级 2-1',
              status:false,
              checked:false,
              children: [
                {
                  id: 4,
                  label: '三级 3-1-1',
                  status:false,
                  checked:false,
                  children:[
                    {
                      id: 5,
                      label: '四级 4-1-2',
                      status:false,
                      checked:true,
                    },
                    {
                      id: 5,
                      label: '四级 4-1-2',
                      status:false,
                      checked:false,
                    },
                  ]
                }, 
                 {
                  id: 5,
                  label: '三级 3-1-2',
                  status:false,
                  checked:false,
                }
              ]
            }, 
            {
              id: 2,
              label: '二级 2-2',
              status:false,
              checked:false,
              children: [
                {
                  id: 6,
                  label: '三级 3-2-1',
                  status:false,
                  checked:false,
                }, 
                {
                  id: 7,
                  label: '三级 3-2-2',
                  status:false,
                  checked:false,
                }
              ]
            }
          ]
        },
        {
          id: 1,
          label: '一级 2',
          status:false,
          checked:false,
          children: [
            {
              id: 3,
              label: '二级 2-1',
              status:false,
              checked:false,
              children: [
                {
                  id: 3,
              label: '二级 2-1',
              status:false,
              checked:false,
              children: [
                {
                  id: 4,
                  label: '三级 3-1-1',
                  status:false, 
                  checked:false,
                }, 
                 {
                  id: 5,
                  label: '三级 3-1-2',
                  status:false,
                  checked:false,
                }
                ]
                }, 
                 {
                  id: 5,
                  label: '三级 3-1-2',
                  status:false,
                  checked:false,
                }
              ]
            }, 
            {
              id: 2,
              label: '二级 2-2',
              status:false,
              checked:false,
              children: [
                {
                  id: 6,
                  label: '三级 3-2-1',
                  status:false,
                  checked:false,
                }, 
                {
                  id: 7,
                  label: '三级 3-2-2',
                  status:false,
                  checked:false,
                }
              ]
            }
          ]
        }
            ],      
        }
    },
    methods:{
   //显示隐藏tree-box
   showTree(){
     this.treeStatus=true;
   },
   colseTree(){
     this.treeStatus=false;
   },
   //改变下拉的时候触发事件--并更改下面的树结构
   treeChange(){
       console.log(this.tree);
   },
   //结构树的舒展处理
   getOneIndex(index){
     this.treeIndx[0]=index
    //  console.log('a='+index)
   },
   getTwoIndex(index){
     this.treeIndx[1]=index
    //  console.log('b='+index)
   },
   getThreeIndex(index){
     this.treeIndx[2]=index
    //  console.log('c='+index)
   },
   getThis(){
    setTimeout(() => {
      let length=this.treeIndx.length
      if(length==1){
        this.treeDate[this.treeIndx[0]].status=!this.treeDate[this.treeIndx[0]].status
      }
      else if(length==2){
        this.treeDate[this.treeIndx[0]].children[this.treeIndx[1]].status=!this.treeDate[this.treeIndx[0]].children[this.treeIndx[1]].status
      }
      else if(length==3){
        this.treeDate[this.treeIndx[0]].children[this.treeIndx[1]].children[this.treeIndx[2]].status=!this.treeDate[this.treeIndx[0]].children[this.treeIndx[1]].children[this.treeIndx[2]].status
      }
    }, 100);
    this.treeIndx=[]
   },
   }
}
</script>
<style>
.tree{
    position: absolute;
    width: 360px;
    top:20px;
    left: 20px;
    height: 96%;
    overflow-y: scroll;
  }
  .tree::-webkit-scrollbar {display:none}
  .trees{
    background:rgba(255,255,255,1);
    box-shadow:0px 3px 7px 0px rgba(216,223,238,1);
  }
  .tree_img>img{
    display: block;
    height: auto;
  }
  .tree_title{
    position: fixed;
    width: 360px;
    height: 100px;
    z-index: 1000;
    /* background: red; */
  }
  .tree_content{
    padding: 90px 10px 20px 10px;
  }
  .tree_title>div:first-child{
    position: relative;
    height:40px;
    background:rgba(67,80,137,1);
    line-height: 40px;
    color:rgba(255,255,255,1);
    text-align: center;
  }
  .tree_title>div:first-child>span{
    position: absolute;
    right: 20px;
  }
  .tree_title_select{
    position: relative;
    height: 50px;
    text-align: left;
    font-weight:400;
    color:rgba(102,102,102,1);
    background: white;
    z-index:1000;
  }
  .col{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .row{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .tree_title_select>div:first-child{
    justify-content: space-between;
  }
  .tree_title_item{
    position: absolute;
    left: 0;
    top:51px;
    width: 100%;
  }
  .tree_title_item>li{
    width: 86%;
    padding: 0 7%;
    height: 46px;
    text-align: left;
    line-height: 46px;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    border-bottom: 1px solid #eeeeee;
  }
  .tree_title_item_select2{
    color:rgba(102,102,102,1);
    background: white;
  }
  .tree_title_item_select1{
    background: blue;
    color:white;
  }
  .tree_content li{
    margin: 10px 0;
    
  }
  .tree_content span{
    background: white;
  }
  .tree_content ul{
    margin-left: 40px
  }
  .tree_content>ul{
    margin-left: 20px
  }
  .tree_content ul.border_left{
    border-left: 1px solid #eeeeee
  }
  .tree_content ul.no_border_left{
    border-left: none
  }
  .tree_content>ul>li li::before{
    display: inline-block;
    position: relative;
    left: -20px;
    top:20px;
    content: '';
    width:20px;
    height: 2px;
    background: #eeeeee
  }
  .tree_content>ul ul::before{
    display: inline-block;
    position: absolute;
    left: 30px;
    content: '';
    width:22px;
    height: 22px;
    background: white;
    margin-top: 2px;
  }
  .tree_content ul::after{
    display: inline-block;
    position: absolute;
    margin: -14px 0 0 -10px;
    content: '';
    width:20px;
    height: 20px;
    background: white;
  }
  .tree_content li {
    position: relative;
    left: -10px;
  }
  .tree_item_name>span{
    margin-right: 12px;
  }
  .tree_node{
    margin-right: 10px;
  }
  .tree_item_name{
    height: 30px;
    line-height: 30px;
  }
  .tree_check{
    text-align: center;
    line-height: 20px;
    width: 20px;
    height: 20px;
    border:1px solid #eeeeee;
  }
</style>

