<template>
    <div class='model_history_all'>
        <div class="model_btn_head">
           <el-button class='add_btn_head' @click="returnModel()"> 
               <i class='icon_add'>
                   <img src="../../../../assets/imgs/model_return.png" alt="">
               </i>
               返回
           </el-button>
           
       </div>
       <div class="model_history_body">
           <p class="model_history_p">历史版本</p>
           <div>
                <ul>
                    <li class='model_history_box' v-for='list in lists' v-bind:key='list.id'>
                        <div>
                            <div class='model_history_box_bottom'>
                                更新时间：{{list.time}}
                            </div>
                        </div>
                    </li>
                </ul>
           </div>
           
       </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            lists:[{id:'0',time:'2019/08/05'},{id:'1',time:'2019/08/04'}],
        }
    },
    methods:{
        returnModel:function(){
            this.$router.push({path: './allModel'})
        },
    }
}
</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
.model_history_all
    padding 10px 20px
    background-color #F5F6FA
    width 100%
    height 100%
    .model_btn_head
        padding-top 20px
        .add_btn_head
            color #ffffff
            background-color #4775CA
            border-radius  5px
            height 48px
            width 184px
            vertical-align middle
            font-size 20px
            padding 0px 28px
            .icon_add
                margin-right 30px
                display inline-block
                width 25px 
                height 25px
    .model_history_body
        font-size 22px
        padding-top 30px
        .model_history_p
            margin-bottom 20px
        .model_history_box
            width 330px
            padding 12px 20px
            background-color #DBDBDB
            position relative
            display inline-block
            margin-right 30px
            height 200px
            .model_history_box_bottom
                width 100%
                height 30px
                position absolute
                bottom 0
                left 0
                padding-left 20px
                background-color #6D6D6D
                box-sizing border-box
                color #ffffff



</style>

