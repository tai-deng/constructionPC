/**
 * 读取XLSX表
 */
import XLSX from "xlsx"
import { BOQImport,CostImport } from '@/api/api.js'
export default {
	methods: {
		/**
		 * 上传文件
		 * @param {} file 
		 */
		async uploadFileXLSX(file) {
			this.fileLoading(); //调用加载中蒙层
			let userid = Number(localStorage.getItem('userId'))
			let prams = [
				{ key: 'userid', value: userid },
				{ key: 'projectid', value: localStorage.getItem('projectid') },
				{ key: 'files', value: file.file },
				{ key: 'building', value: this.Building },//施工图
				{ key: 'buildname', value: this.Building },//全费用
			]
			let num = Number(localStorage.getItem('plan'))
			let plan=''
			if(num==0){
				plan=BOQImport//施工图工程量清单导入
			}else if(num==1){
				plan=CostImport//全费用清单导入
			}
			this.Request(plan(prams)).then(res => {
				console.log(res)
				this.$toast.clear()
				if (res.StatusCode === 200) {
					this.$emit('jumpto', 1, res.Detiel)
					
				} else {
					this.$message({ type: 'error', message: res.Message, center: 'true' })
				}
				this.close()//关弹窗
				this.$toast.clear()
			})
		},
		/**
		 * 由前端解析xlsx表
		 * @param {*} e 
		 */
		uploadFileXLSX2(e) {
			this.fileLoading(); //调用加载中蒙层
			return new Promise((resolve, reject) => {
				let files = e.target.files,
					fileReader = new FileReader();
				fileReader.onload = ev => {
					try {
						let data = ev.target.result;
						var workbook = XLSX.read(data, {
							type: "binary"
						}), // 以二进制流方式读取得到整份excel表格对象
							persons = []; // 存储获取到的数据
					} catch (e) {
						reject("文件类型不正确", null)
						this.$message({ type: 'error', message: '文件类型不正确', center: 'true' })
						this.$toast.clear() //关闭加载中蒙层 	
						return
					}
					// 表格的表格范围，可用于判断表头是否数量是否正确
					let fromTo = "";
					// 遍历每张表读取
					for (let sheet in workbook.Sheets) {
						if (workbook.Sheets.hasOwnProperty(sheet)) {
							fromTo = workbook.Sheets[sheet]["!ref"];
							persons = persons.concat(
								XLSX.utils.sheet_to_json(workbook.Sheets[sheet])
							);
							// break; // 如果只取第一张表，就取消注释这行
						}
					}
					resolve(persons)
					this.$toast.clear() //关闭加载中蒙层 
				};
				// 以二进制方式打开文件
				fileReader.readAsBinaryString(files[0])
			})
		}
	}
}