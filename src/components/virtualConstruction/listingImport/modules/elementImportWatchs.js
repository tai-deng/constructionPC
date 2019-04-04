/**
 * 构件生成 侦听器
 */
import { GetSpecialtybyBuilding, GetFloorbyBuilding } from '@/api/api.js'
export default {
	methods: {
		async totalModeld(d) {
			console.log(d)
			this.totalModel = d
			// 分页归0
			this.tableParams.pageIndex=1
			this.element_currentPage = 1
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
		async majord(d) {
			console.log(d)
			this.major = d
			let projectid = localStorage.getItem('projectid')
			await this.getElementInventoryMenuList({ projectid, building: this.totalModel, Specialty: d })(GetFloorbyBuilding).then(arr => { this.floorLists = arr })
			// 分页归0
			this.tableParams.pageIndex=1
			this.element_currentPage = 1
			//获取构件清单列表
			let list = await this.getElementLists(this.tableParams.pageIndex,
				this.tableParams.pageSize,
				this.tableParams.projectid, this.totalModel, this.major, this.floor,
				this.tableParams.elementname, this.resource)
				this.tableData2 = list.Detiel
				this.tableData2Count = list.Count
		},
		resourced(d) {
			console.log(d)
			this.resource = d
		}
	}
}