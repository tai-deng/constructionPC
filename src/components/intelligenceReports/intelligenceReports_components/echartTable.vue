<template>
  <div style="width:100%;height:100%;" ref="myEchart"></div>
</template>
<script>
import Chart from 'echarts'
export default {
    data(){
        return{
            chart: null,
            option:{
                
        },


        }
    },
    props: ['plan_table'],
    mounted() {
        this.initChart();
    },
    methods:{
        initChart(){
            this.chart = Chart.init(this.$refs.myEchart);
            this.chart.setOption({
                tooltip: { show: false, },
                legend: { show: false,},
                series: [{
                    name:'问题',
                    type:'pie',
                    radius: ['40%', '50%'],
                    avoidLabelOverlap: true,
                    color:['#70AD47','#ED7D31','#FFC000'],
                    label: {
                        normal: {
                             formatter: ' {b}\n{c}\n{per|{d}%}  ',
                             rich: {
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                data:this.plan_table
                }
            ]});

        }
    },
    beforeDestroy() {
        if (!this.chart) { return }
        this.chart.dispose();
        this.chart = null;
    },
    
}
</script>



