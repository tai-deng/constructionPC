<template>
    <div>
         <el-pagination id='page_list_module'
                      background 
                      layout="prev, pager, next"
                      :prev-text="page.first" :next-text="page.last" :total="page.alltotal" @current-change='changPage'>
            </el-pagination>
    </div>
</template>
<script>
export default {
    props:{
        page:{}
    },
    data(){
        return{
          
        }
    },
    methods:{
         //分页中改变当前页的时候，触发事件
        changPage(page){
            // this.current=page;
           
            this.$emit('changPage', page);
        },  

    },
}
</script>
<style>
 /*分页*/
    #page_list_module  li {
        color: #333333;
        background-color: #ffffff;
        font-size: 16px;
        border:1px solid #EAEAEA;
        border-radius: 5px;
        display: inline-block;
        width: 50px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
    }
    #page_list_module  li:hover{
      background-color: #4775CA;
      color: #ffffff;
    }
    #page_list_module  li.active{
      background-color: #4775CA;
      color: #ffffff;
    }
     #page_list_module  button:hover{
      background-color: #4775CA;
      color: #ffffff;
    }
    #page_list_module  button{
      color: #333333;
        background-color: #ffffff;
        font-size: 16px;
        border:1px solid #EAEAEA;
        border-radius: 5px;
        display: inline-block;
        width: 80px;
        height: 40px;
        line-height: 40px;
        text-align: center;
    }
    #page_list_module  button:disabled{
        background-color:#F5F6FA;
        color:#333333;
    }
    #page_list_module  span{
      line-height: 40px
    }


</style>

