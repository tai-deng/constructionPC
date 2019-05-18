
const projectid = localStorage.getItem("projectid");
/**
 * @name 获取成本管理的构件ID和对应的颜色
 * @param {*} that 
 * @param {function} QueryCostDataElement 获取成本管理的构件ID和对应的颜色
 */
export const getCostComponents = (that, QueryCostDataElement, row) => {
    // that.load();
    let params = {
        ProjectID: localStorage.getItem("projectid"),
        BuildName: that.formInline.buildName,  //楼栋
        Specialty: that.formInline.specialty,  //	专业
        Floor: that.formInline.floor,  //	楼层
        TaskId: that.formInline.taskId,  //	进度ID
        ColorID: that.colorID,
        ResourceName: typeof(row) == "undefined" ? that.formInline.resourceName : row.ResorceName  //	资源名称
    }
    QueryCostDataElement(params).then(res => {
        if(res.StatusCode === 200){
            if(res.Detiel.length > 0){
                that.components = res.Detiel
                that.jionColor(that.components, that.colorList)
                // let elementids = [];
                let hightArray = {
                    colorCode: res.Detiel[0].ColorName,
                    ElementList: []
                }
                res.Detiel.forEach(item => {
                    // elementids.push(item.ElementID)
                    hightArray.ElementList.push(item.ElementID.trim())
                })
                // that.modelBox({
                //     isShowModel: true, //是否显示模型 true:显示模型，如果模型已加载，则显示  false:隐藏模型
                //     isLoadModel: true, //是否加载模型  true：加载模型，如果已经加载，不会重新加载，  false:卸载模型
                //     zIndex: 100, //模型层级
                //     background: "",
                //     ElementIDs: elementids, // 需要显示或隐藏的标签ID集合
                //     highLightElementIDs: res.Detiel, // 高亮显示的构件
                //     functionNumber: [88] // 需要模型调用的函数编号数组
                //   });
                //   console.log("************************",elementids,res.Detiel)
                


                  //JS合并数组对象中重复数据
                  // 把源数据先变成目标数据的规则
                    let oldDataRule = []
                    res.Detiel.forEach(el => {
                        let oldObj = {
                            colorCode: el.ColorName,
                            ElementList:[]
                        }
                        // let eleObj = {
                        //     ele_id: el.ElementID.trim()
                        // }
                        oldObj.ElementList.push(el.ElementID.trim())
                        oldDataRule.push(oldObj)
                    })
                    /**
                     * 先去重，后合并
                     * 1、源数据去重
                     * 2、把去重后的数据和源数据中相同colorCode的数据合并ElementList
                    */
                    let newData = []
                    let newObj = {}
                    oldDataRule.forEach((el, i) => {
                        if (!newObj[el.colorCode]) {
                            newData.push(el);
                            newObj[el.colorCode] = true;
                        } else {
                            newData.forEach(el => {
                                if (el.colorCode === oldDataRule[i].colorCode) {
                                    el.ElementList = el.ElementList.concat(oldDataRule[i].ElementList);
                                    // el.ElementList = [...el.ElementList, ...oldDataRule[i].ElementList]; // es6语法
                                }
                            })
                        }
                    })
                    // console.log("@@@@@@@@@@@@@@@@@@@@",newData)

                
                    that.modelBox({
                        isShowModel: true, //是否显示模型 true:显示模型，如果模型已加载，则显示  false:隐藏模型
                        isLoadModel: true, //是否加载模型  true：加载模型，如果已经加载，不会重新加载，  false:卸载模型
                        zIndex: 100, //模型层级
                        background: "",
                        ElementIDs: newData, // 需要显示或隐藏的标签ID集合
                        highLightElementIDs: [], // 高亮显示的构件
                        modelData: null,
                        functionNumber: [40] // 需要模型调用的函数编号数组
                      });

            }else{
                that.$message({
                    type: 'warning',
                    message: '暂无构建关联',
                    center: 'true'
                })
                that.components = []
            }
        }else{
            that.$message({
                type: 'error',
                message: res.message ? res.message : '后台异常',
                center: 'true'
            })
        }
        // that.$toast.clear();
    });
}