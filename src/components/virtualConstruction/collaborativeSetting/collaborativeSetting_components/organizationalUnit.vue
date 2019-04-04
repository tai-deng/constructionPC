<!-- 组织单位 -->
<template>
  <div class='container-organizational-unit'>
    <div class='container-organizational_wrapper'>
      <div class="collabora_title">Step3.1 组织单位  </div>
      <div class="company_div">
        <div class="company_box">
          <!-- 建设单位 -->
          <div class="company_item">
              <p>建设单位</p>
              <ul>
                <li v-for="(item,index) in building" :key="item.index">
                  <el-row class="company_item_row">
                    <el-col :span="21">
                      <el-input v-show="index==0?true:false" v-model="item.Name" @blur="upData(item)" placeholder="请输入单位名称" style="width:100%"></el-input>
                      <el-input v-show="index==0?false:true" v-model="item.Name" @change="resetData(item)" placeholder="请输入单位名称" style="width:100%"></el-input>
                    </el-col>
                    <el-col :span="3" class="company_item_center">
                      <span v-show="index==0?true:false" class="add_btn" @click="addItem(item,1)"></span>
                      <span v-show="index==0?false:true" class="reduce_btn"  @click="removeItem(item,index,1)"></span>
                    </el-col>
                  </el-row>
                </li>
              </ul>
          </div>
          <!-- 勘察单位 -->
          <div class="company_item">
              <p>勘察单位</p>
              <ul>
                <li v-for="(item,index) in seenbuilding" :key="item.index">
                  <el-row class="company_item_row">
                    <el-col :span="21">
                      <el-input v-show="index==0?true:false" v-model="item.Name" @blur="upData(item)" placeholder="请输入单位名称" style="width:100%"></el-input>
                      <el-input v-show="index==0?false:true" v-model="item.Name" @change="resetData(item)" placeholder="请输入单位名称" style="width:100%"></el-input>
                    </el-col>
                    <el-col :span="3" class="company_item_center">
                      <span v-show="index==0?true:false" class="add_btn" @click="addItem(item,2)"></span>
                      <span v-show="index==0?false:true" class="reduce_btn"  @click="removeItem(item,index,2)"></span>
                    </el-col>
                  </el-row>
                </li>
              </ul>
          </div>
          <!-- 设计单位 -->
          <div class="company_item">
              <p>设计单位</p>
              <ul>
                <li v-for="(item,index) in drawbuilding" :key="item.index">
                  <el-row class="company_item_row">
                    <el-col :span="21">
                      <el-input v-show="index==0?true:false" v-model="item.Name" @blur="upData(item)" placeholder="请输入单位名称" style="width:100%"></el-input>
                      <el-input v-show="index==0?false:true" v-model="item.Name" @change="resetData(item)" placeholder="请输入单位名称" style="width:100%"></el-input>
                    </el-col>
                    <el-col :span="3" class="company_item_center">
                      <span v-show="index==0?true:false" class="add_btn" @click="addItem(item,3)"></span>
                      <span v-show="index==0?false:true" class="reduce_btn"  @click="removeItem(item,index,3)"></span>
                    </el-col>
                  </el-row>
                </li>
              </ul>
          </div>
          <!-- 监理单位 -->
          <div class="company_item">
              <p>监理单位</p>
              <ul>
                <li v-for="(item,index) in reportCom" :key="item.index">
                  <el-row class="company_item_row">
                    <el-col :span="21">
                      <el-input v-show="index==0?true:false" v-model="item.Name" @blur="upData(item)" placeholder="请输入单位名称" style="width:100%"></el-input>
                      <el-input v-show="index==0?false:true" v-model="item.Name" @change="resetData(item)" placeholder="请输入单位名称" style="width:100%"></el-input>
                    </el-col>
                    <el-col :span="3" class="company_item_center">
                      <span v-show="index==0?true:false" class="add_btn" @click="addItem(item,4)"></span>
                      <span v-show="index==0?false:true" class="reduce_btn"  @click="removeItem(item,index,4)"></span>
                    </el-col>
                  </el-row>
                </li>
              </ul>
          </div>
          <!-- 施工单位 -->
          <div class="company_item">
              <p>施工单位</p>
              <ul>
                <li v-for="(item,index) in doingCom" :key="item.index">
                  <el-row class="company_item_row">
                    <el-col :span="21">
                      <el-input v-show="index==0?true:false" v-model="item.Name" @blur="upData(item)" placeholder="请输入单位名称" style="width:100%"></el-input>
                      <el-input v-show="index==0?false:true" v-model="item.Name" @change="resetData(item)" placeholder="请输入单位名称" style="width:100%"></el-input>
                    </el-col>
                    <el-col :span="3" class="company_item_center">
                      <span v-show="index==0?true:false" class="add_btn" @click="addItem(item,5)"></span>
                      <span v-show="index==0?false:true" class="reduce_btn"  @click="removeItem(item,index,5)"></span>
                    </el-col>
                  </el-row>
                </li>
              </ul>
          </div>
          <!-- 其他单位 -->
          <div class="company_item">
              <p>其他单位</p>
              <ul>
                <li v-for="(item,index) in otherCom" :key="item.index">
                  <el-row class="company_item_row">
                    <el-col :span="21">
                      <el-input v-show="index==0?true:false" v-model="item.Name" @blur="upData(item)" placeholder="请输入单位名称" style="width:100%"></el-input>
                      <el-input v-show="index==0?false:true" v-model="item.Name" @change="resetData(item)" placeholder="请输入单位名称" style="width:100%"></el-input>
                    </el-col>
                    <el-col :span="3" class="company_item_center">
                      <span v-show="index==0?true:false" class="add_btn" @click="addItem(item,6)"></span>
                      <span v-show="index==0?false:true" class="reduce_btn"  @click="removeItem(item,index,6)"></span>
                    </el-col>
                  </el-row>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type='textecmascript-6'>
//GetDeptList
import {GetOrgList,AddOrgInfo,DeleteOrg,UpdateOrgInfo} from '@/api/api.js'
export default {
  data() {
    return {
      companies:[
        {
          title:'建设单位',
          model:'1',
          orgId:'',
          dynamicValidateForm: {
            companyInput:'',
            domains: [{
              value: ''
            }],
          },
          isNewadd:false,
          time:0
        },{
          title:'勘察单位',
          model:'2',
           orgId:'',
          dynamicValidateForm: {
            companyInput:'',
            domains: [{
              value: ''
            }],
          },
          isNewadd:false,
          time:0
        },
        {
          title:'设计单位',
          model:'3',
           orgId:'',
          dynamicValidateForm: {
            companyInput:'',
            domains: [{
              value: ''
            }],
          },
          isNewadd:false,
          time:0
        },{
          title:'监理单位',
           model:'4',
            orgId:'',
          dynamicValidateForm: {
            companyInput:'',
            domains: [{
              value: ''
            }],
          },
          isNewadd:false,
          time:0
        },
        {
          title:'施工单位',
          model:'5',
           orgId:'',
          dynamicValidateForm: {
            companyInput:'',
            domains: [{
              value: ''
            }],
          },
          isNewadd:false,
          time:0
        },{
          title:'其他单位',
          model:'6',
           orgId:'',
          dynamicValidateForm: {
            companyInput:'',
            domains: [{
              value: ''
            }],
          },
          isNewadd:false,
          time:0
        }
      ], 
      //建设单位
      building:[{Name:"",model:'1',ID:''}],
      //勘察单位
      seenbuilding:[{Name:"",model:'2',ID:''}],
      //设计单位
      drawbuilding:[{Name:"",model:'3',ID:''}],
      //监理单位
      reportCom:[{Name:"",model:'4',ID:''}],
      //施工单位
      doingCom:[{Name:"",model:'5',ID:''}],
      //其他单位
      otherCom:[{Name:"",model:'6',ID:''}],
    }
  },
  created(){
    this.GetdeptList();
  },
  methods: {
    //点击添加图标
    addItem(item,n){
        var text={Name:"",model:n,ID:''}
        if(n=='1'){
          this.building.push(text);
        }else if(n=='2'){
          this.seenbuilding.push(text);
        }else if(n=='3'){
          this.drawbuilding.push(text);
        }else if(n=='4'){
          this.reportCom.push(text);
        }else if(n=='5'){
          this.doingCom.push(text);
        }else if(n=='6'){
          this.otherCom.push(text);
        }
    },
    //点击删除图标--DeleteOrg
    removeItem(item,index,n){
      this.load();
      this.Request(DeleteOrg({orgIds:item.ID})).then(res=>{
        if(res.StatusCode=='200'){
          if(n=='1'){
            this.building.splice(index,1)
          }else if(n=='2'){
            this.seenbuilding.splice(index,1)
          }else if(n=='3'){
            this.drawbuilding.splice(index,1)
          }else if(n=='4'){
            this.reportCom.splice(index,1)
          }else if(n=='5'){
            this.doingCom.splice(index,1)
          }else if(n=='6'){
            this.otherCom.splice(index,1)
          }
          this.$message({type: "sucess", message: '删除成功', center: "true"});
        }else{
          his.$message({type: "error", message: res.Message, center: "true"});
        }
      })
      this.$toast.clear();
    },
    //输入框失去焦点的时候--添加
    upData(item){
      if(item.Name==''){
         this.$message({type: "error", message: '请输入单位名称', center: "true"});
         return false;
      }
      this.load();
      var text={projectId:localStorage.getItem('projectid'),
              userId:localStorage.getItem('userId'),
              type:item.model,
              orgName:item.Name}
      this.Request(AddOrgInfo(text)).then(res=>{
         if(res.StatusCode=='200'){
           item.ID=res.Message,
           this.GetdeptList();
           this.$message({type: "sucess", message: '添加成功', center: "true"});
         }else{
           this.$message({type: "error", message: res.Message, center: "true"});
         }
      })
      this.$toast.clear();
    },
    //页面加载的时候---获取单位列表
    GetdeptList(){
      this.load();
      var text=localStorage.getItem('projectid');//创建人
      this.Request(GetOrgList({projectId:text})).then(res=>{
        if(res.StatusCode=='200'){
          this.building=[{Name:"",model:'1',ID:''}];
          this.seenbuilding=[{Name:"",model:'2',ID:''}];
          this.drawbuilding=[{Name:"",model:'3',ID:''}];
          this.reportCom=[{Name:"",model:'4',ID:''}];
          this.doingCom=[{Name:"",model:'5',ID:''}];
          this.otherCom=[{Name:"",model:'6',ID:''}];
          for(var i=0;i<res.Detiel.length;i++){
            var text={Name:res.Detiel[i].Name,model:res.Detiel[i].OrgTypeID,ID:res.Detiel[i].ID}
            if(res.Detiel[i].OrgTypeID=='1'){
                  this.building.push(text);
            }else if(res.Detiel[i].OrgTypeID=='2'){
                  this.seenbuilding.push(text);
            }else if(res.Detiel[i].OrgTypeID=='3'){
                  this.drawbuilding.push(text);
            }else if(res.Detiel[i].OrgTypeID=='4'){
                  this.reportCom.push(text);
            }else if(res.Detiel[i].OrgTypeID=='5'){
                  this.doingCom.push(text);
            }else if(res.Detiel[i].OrgTypeID=='6'){
                  this.otherCom.push(text);
            }
          }
        }else{
           this.$message({type: "error", message: res.Message, center: "true"});
        }
      })
      this.$toast.clear();
    },
    //修改单位-- UpdateOrgInfo
    resetData(item){
      if(item.Name==''){
         this.$message({type: "error", message: '请输入单位名称', center: "true"});
         return false;
      }
      this.load();
      var text={orgId:item.ID,projectId:localStorage.getItem('projectid'),type:item.model,orgName:item.Name,userId:localStorage.getItem('userId')};
      this.Request(UpdateOrgInfo(text)).then(res=>{
         if(res.StatusCode=='200'){
            this.$message({type: "sucess", message: '修改成功', center: "true"});
         }else{
            this.$message({type: "error", message: res.Message, center: "true"});
         }
      })
      this.$toast.clear();
    },
    

















  }
}

</script>
<style lang='stylus' scoped  rel='stylesheet/stylus'>
.container-organizational-unit
  width 25%
  height  100%
  display inline-block
  background-color #ffffff
  float left
  box-sizing border-box
  .container-organizational_wrapper
    height 100%
    .collabora_title
      background #435089
      height 40px
      line-height 40px
      padding 0 20px
      font-size 18px
      color #fff
      font-weight 400
    .company_div
      overflow hidden
      width 100%
      height 90%
      .company_box
        display box 
        box-sizing border-box
        padding 13px 20px 0
        height 100%
        overflow auto
        width 100%
        .company_item
          margin-bottom 17px
          p
            font-size 18px
            color #333333
            margin-bottom 18px
          span 
            display inline-block
            vertical-align top
            float right
            width 40px
            height 40px
          span.reduce_btn
            background url('../../../../assets/icons/reduce.png') center center no-repeat
          span.add_btn 
            background url('../../../../assets/icons/add.png') center center no-repeat
          .company_item_row
            margin-top 20px
            font-size 18px
            line-height 42px
          .company_item_center
            text-align center
          .company_item_text
            cursor pointer
          .company_item_text:hover
            color #4775CA
</style>
<style>
.container-organizational-unit .el-form-item__content{margin-left: 0!important;}
.container-organizational-unit .el-input{width: 88%}
.container-organizational-unit .el-input__inner{height:40px;background:#F8F8F8;border:1px solid #E5E5E5;border-radius:4px;font-size:18px;padding:0 20px}

.company_box::-webkit-scrollbar{
  /*滚动条整体样式*/
  width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.company_box::-webkit-scrollbar-thumb{
  /*滚动条里面小方块*/
  border-radius: 10px;
  width: 5px;
  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);
  background: #ccc;
}
.company_box::-webkit-scrollbar-track{
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: #ededed;
}
</style>
