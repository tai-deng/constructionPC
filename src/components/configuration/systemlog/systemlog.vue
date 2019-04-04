<!-- systemlog -->
<template>
 <div class='container-systemlog'>
   <logMode></logMode>
 </div>
</template>

<script type='textecmascript-6'>
import logMode from './moudels/logMode'
export default {
  components:{
    logMode
  },
 data() {
   return {
    data: 'systemlog'
   }
 },

}

</script>
<style lang='stylus' scoped rel='stylesheet/stylus'>
.container-systemlog
  width 100%
  height 100%
</style>