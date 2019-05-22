/**
 * 构件生成 侦听器
 */
import { GetSpecialtybyBuilding, GetFloorbyBuilding } from '@/api/api.js'
export default {
	methods: {
		// 构件清单选择楼栋
		async totalModeld(d) {
			console.log(d)
			this.totalModel = d
			// 分页归0
			this.tableParams.pageIndex = 1
			this.element_currentPage = 1
			this.major=''//清空专业
			this.majorList = []
			this.floor = ''
			this.floorLists = []
			this.tableParams.elementname=''
			this.BOQElements = []
			this.resource=''
			this.resourceList = []
			// this.isempty = true

			let projectid = localStorage.getItem('projectid')
		 let arr =	await this.getElementInventoryMenuList({ projectid, building: d })(GetSpecialtybyBuilding)
				this.majorList = arr 
				console.log(this.majorList)
				this.major = arr[0].text
			//获取构件清单列表
			let list = await this.getElementLists(this.tableParams.pageIndex,
				this.tableParams.pageSize,
				this.tableParams.projectid, this.totalModel, this.major, this.floor,
				this.tableParams.elementname, this.resource)
			this.tableData2 = list.Detiel
			this.tableData2Count = list.Count
			this.majord(arr[0].text)
		},
		// 选择专业
		async majord(d) {
			console.log(d)
			this.major = d
			// 清空类型和楼层
			this.floorLists = [];
      this.floor =  "",
			this.BOQElements = [], //构件名称列表
				this.element = ""
			this.tableParams.floor = ''
			this.tableParams.elementname = ''
			this.resourceList=[] //资源名称列表
			this.resource = "" //已选资源
			this.BOQElements = [], //构件名称列表
			this.element = ""
			this.tableParams.elementname = ''
			// 分页归0
			this.tableParams.pageIndex = 1
			this.element_currentPage = 1
			let projectid = localStorage.getItem('projectid')
		  let arr =	await this.getElementInventoryMenuList({ projectid, building: this.totalModel, Specialty: d })(GetFloorbyBuilding) 
				this.floorLists = arr
				this.tableParams.floor = this.floor = arr[0].text
			// 分页归0
			this.tableParams.pageIndex = 1
			this.element_currentPage = 1
			//获取构件清单列表
			let list = await this.getElementLists(this.tableParams.pageIndex,
				this.tableParams.pageSize,
				this.tableParams.projectid, this.totalModel, this.major, this.floor,
				this.tableParams.elementname, this.resource)
			this.tableData2 = list.Detiel
			this.tableData2Count = list.Count
		},
		
	}
}