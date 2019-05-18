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
			await this.getElementInventoryMenuList({ projectid, building: d })(GetSpecialtybyBuilding).then(arr => { this.majorList = arr })
			//获取构件清单列表
			let list = await this.getElementLists(this.tableParams.pageIndex,
				this.tableParams.pageSize,
				this.tableParams.projectid, this.totalModel, this.major, this.floor,
				this.tableParams.elementname, this.resource)
			this.tableData2 = list.Detiel
			this.tableData2Count = list.Count
		},
		// 选择专业
		async majord(d) {
			console.log(d)
			this.major = d
			// 分页归0
			this.tableParams.pageIndex = 1
			this.element_currentPage = 1
			let projectid = localStorage.getItem('projectid')
			await this.getElementInventoryMenuList({ projectid, building: this.totalModel, Specialty: d })(GetFloorbyBuilding).then(arr => { this.floorLists = arr })
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