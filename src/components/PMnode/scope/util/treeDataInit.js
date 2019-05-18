
// 树结构数据处理
export const treeInit= {
    data(){
        return {
            options:[],         //  下拉框数据
            expandedKeys:[],    //  默认展开节点集合
            checkedKeys:[],     //  默认选中节点集合
            array:[],           //  树结构数据
            defaultProps: {     //  树结构格式
              children: "children",
              label: "label"
            }, 

        }
    },
    created() {
        this.array=[{
            label: '一级 1',
            children: [{
              label: '二级 1-1',
              children: [{
                label: '三级 1-1-1'
              }]
            }]
          }, {
            label: '一级 2',
            children: [{
              label: '二级 2-1',
              children: [{
                label: '三级 2-1-1'
              }]
            }, {
              label: '二级 2-2',
              children: [{
                label: '三级 2-2-1'
              }]
            }]
          }, {
            label: '一级 3',
            children: [{
              label: '二级 3-1',
              children: [{
                label: '三级 3-1-1'
              }]
            }, {
              label: '二级 3-2',
              children: [{
                label: '三级 3-2-1'
              }]
            }]
          }]
        
    },
    methods: {
        //  获取构件树结构
        GetElementTree(floorId){
            console.log(floorId)
        },
        //  处理树节点选中事件
        handleCheckChange(data, checked, treeList){
            console.log(data, checked, treeList)
        },
        //  处理树节点点击事件
        handleNodeClick(data, checked, treeList){
            console.log(data, checked, treeList)
        },
    },
}