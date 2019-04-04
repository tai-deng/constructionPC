/**
 * 构件生成事件
 */
export default{
    methods:{
        /**
         * 分页
         * @param {} e 
         */
        async element_current_change(e){
            console.log(e)
            this.tableParams.pageIndex=e
            let list = await this.getElementLists(this.tableParams.pageIndex,
				this.tableParams.pageSize,
				this.tableParams.projectid, this.totalModel, this.major, this.floor,
				this.tableParams.elementname, this.resource)
				this.tableData2 = list.Detiel
        }
    }
}