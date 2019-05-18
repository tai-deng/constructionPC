<template>
    <div>
        
        <div id="domId" style="width:100%; height:100%"></div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    created(){
        const oScript = document.createElement('script');
        oScript.type = 'text/javascript';
        oScript.src = 'https://static.bimface.com/api/BimfaceSDKLoader/BimfaceSDKLoader@latest-release.js';
        document.body.appendChild(oScript);
        this.showModel();
        console.log('创建WebApplication，直接显示模型或图纸');
    },
    // mounted(){
    //     this.showModel();
    // },
    methods:{
        showModel(){
            var text1=window.location.href;

            
            var viewToken=text1.split('?ViewToken=')[1];
           
            var options = new BimfaceSDKLoaderConfig();
            console.log(options);
            console.log('创建WebApplication，直接显示模型或图纸');
            options.viewToken = viewToken;
            console.log(BimfaceSDKLoader);
            BimfaceSDKLoader.load(options, successCallback, failureCallback);
            function successCallback(viewMetaData) {
                //创建WebApplication，直接显示模型或图纸
                var dom4Show = document.getElementById('domId');
                new Glodon.Bimface.Application.WebApplicationDemo(viewMetaData, dom4Show); 
            }
            function failureCallback(error) {
                console.log(error);
            }
        },
    },
}
</script>
<style>

</style>
