/**
 * 构件清单
 */
import { GetElementList} from '@/api/api.js'
export default {
	methods: {
    /**
		 * 获取楼栋，专业，资源名称，构件名称，楼层列表
		 * @param {参数} params 
		 * @param {接口名} interfaceName 
		 */
		getElementInventoryMenuList(params) {
			return interfaceName => {
				return new Promise((resolve, reject) => {
					this.Request(interfaceName(params)).then(res => {
						console.log(res)
						if (res.StatusCode === 200) {
							resolve(res.Detiel)
						} else {
							reject(new Error(res.Message))
						}
					})
				})
			}
		},
		/**
		 * 获取构件清单列表
		 * @param {*} pageIndex 
		 * @param {*} pageSize 
		 * @param {*} projectid 
		 * @param {*} building 
		 * @param {*} specialty 
		 * @param {*} floor 
		 * @param {*} elementname 
		 * @param {*} resorcename 
		 */
		getElementLists(pageIndex,pageSize,projectid,building,specialty,floor,elementname, resorcename) {
			// this.load()
			this.loading2 = true
			return new Promise((resolve, reject) => {
				this.Request(GetElementList({ pageIndex,pageSize,projectid,building,specialty,floor,elementname, resorcename})).then(res => {
					console.log(res)
					
					if (res.StatusCode === 200) {
						resolve(res)
					}else{
						reject(new Error(res.Message))
					}
					this.loading2 = false
				})
			})
		},
		
	}
}