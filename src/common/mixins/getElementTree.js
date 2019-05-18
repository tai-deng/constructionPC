import {
  GetElementTree
} from '@/api/api'
export default {
  methods: {
    /**
     * 获取构件树结构
     * @param {String} projectid  项目ID
     * @param {String} buildname  楼栋
     * @param {Number} ordertype	排序类型 1.为楼层在上面（施工图） 2为楼层在下面（全费用）
     */
    GetElementTree(floorId, bool) {
      // this.load()
      this.floorId = floorId
      let param = {
        projectid: this.projectid,
        buildname: this.floorId,
        ordertype: this.listType==2?2:1//排序类型 1.为楼层在上面（施工图） 2为楼层在下面（全费用）
      }
      GetElementTree(param).then(data => {
        let arr = data.Detiel
        let newArr = []
        let parentList = []
        arr.forEach(item => {
          let tempObj = {
            id: item.BuildingID,
            label: item.BuildingName,
            // isOnlyId: item.RaletionElementID,
            disabled: bool ? false : item.IsRelation ? true : false
          }
          if (this.selected) {
            tempObj.disabled = false
          }
          parentList.push(tempObj)
        })
        // console.log(parentList)
        // 去重
        let obj = {}
        let IsRelationArr = parentList.reduce(function (item, next) {
          obj[next.id] ? '' : obj[next.id] = true && item.push(next)
          return item
        }, [])
        IsRelationArr.forEach(item => {
          // 设置默认展开节点
          this.expandedKeys.push(item.id)
          // 一级楼栋
          newArr.push({
            id: item.id,
            label: item.label,
            // isOnlyId: item.isOnlyId,
            disabled: item.disabled,
            children: []
          })
          // 如：1.清单关联 2.构件清单关联 3.已关联， 则默认选中
          if (!bool && this.listType === 3 && item.disabled && !this.selected) this.checkedKeys.push(item.BuildingID)
        })
        // 二级专业
        newArr.forEach(item => {
          arr.forEach(obj => {
            if (obj.BuildingID === item.id) {
              let tempObj = {
                id: obj.SpecialtyID,
                label: obj.Specialty,
                // isOnlyId: obj.RaletionElementID,
                parentId: item.id,
                disabled: bool ? false : obj.IsRelation,
                children: []
              }
              if (this.selected) {
                tempObj.disabled = false
              }
              item.children.push(tempObj)
            }
            // 如：1.清单关联 2.构件清单关联 3.已关联， 则默认选中
            if (!bool && this.listType === 3 && obj.IsRelation) this.checkedKeys.push(obj.SpecialtyID)
          })
          let temp = {}
          item.children = item.children.reduce((item, next) => {
            temp[next.id] ? '' : temp[next.id] = true && item.push(next)
            return item
          }, [])
        })
        // console.log(newArr)
        if (this.listType !== 2) {
          // 三级楼层
          newArr.forEach(item => {
            item.children.forEach(treeItem => {
              arr.forEach(fromArr => {
                if (fromArr.SpecialtyID === treeItem.id) {
                  let tempObj = {
                    id: fromArr.FLOORID,
                    label: fromArr.Floor,
                    // isOnlyId: fromArr.RaletionElementID,
                    parentId: treeItem.id,
                    disabled: bool ? false : fromArr.IsRelation,
                    children: []
                  }
                  if (this.selected) tempObj.disabled = false
                  treeItem.children.push(tempObj)
                }
                // 如：1.清单关联 2.构件清单关联 3.已关联， 则默认选中
                if (!bool && this.listType === 3 && fromArr.IsRelation) this.checkedKeys.push(fromArr.FLOORID)
              })
              let temp = {}
              treeItem.children = treeItem.children.reduce((item, next) => {
                // console.log(item, next)
                temp[next.id] ? '' : temp[next.id] = true && item.push(next)
                return item
              }, [])
            })
          })
          // console.log(newArr)
          // 四级族
          newArr.forEach(item => {
            item.children.forEach(treeItem => {
              treeItem.children.forEach(fourItem => {
                arr.forEach(fromArr => {
                  if (fromArr.FLOORID === fourItem.id) {
                    let tempObj = {
                      id: fromArr.FamilyNameID,
                      label: fromArr.FamilyName,
                      // isOnlyId: fromArr.RaletionElementID,
                      parentId: fourItem.id,
                      disabled: bool ? false : fromArr.IsRelation,
                      children: []
                    }
                    if (this.selected) tempObj.disabled = false
                    fourItem.children.push(tempObj)
                  }
                  // 如：1.清单关联 2.构件清单关联 3.已关联， 则默认选中
                  if (!bool && this.listType === 3 && fromArr.IsRelation) this.checkedKeys.push(fromArr.FamilyNameID)
                })
                let temp = {}
                fourItem.children = fourItem.children.reduce((item, next) => {
                  temp[next.id] ? '' : temp[next.id] = true && item.push(next)
                  return item
                }, [])
              })
            })
          })
          // 五级族类型
          newArr.forEach(item => {
            item.children.forEach(treeItem => {
              treeItem.children.forEach(fourItem => {
                fourItem.children.forEach(fiveItem => {
                  arr.forEach(fromArr => {
                    if (fromArr.FamilyNameID === fiveItem.id) {
                      let tempObj = {
                        id: fromArr.FamilyTypeNameID,
                        label: fromArr.FamilyTypeName,
                        elementId: fromArr.RaletionElementID,
                        disabled: bool ? false : fromArr.IsRelation,
                        parentId: fourItem.id
                      }
                      if (this.selected) tempObj.disabled = false
                      fiveItem.children.push(tempObj)
                    }
                    // 如：1.清单关联 2.构件清单关联 3.已关联， 则默认选中
                    if (!bool && this.listType === 3 && fromArr.IsRelation) this.checkedKeys.push(fromArr.FamilyTypeNameID)
                  })
                  let temp = {}
                  fiveItem.children = fiveItem.children.reduce((item, next) => {
                    temp[next.id] ? '' : temp[next.id] = true && item.push(next)
                    return item
                  }, [])
                })
              })
            })
          })
        } else if (this.listType === 2) {
          // 三级族
          newArr.forEach(item => {
            item.children.forEach(treeItem => {
              arr.forEach(fromArr => {
                if (fromArr.SpecialtyID === treeItem.id) {
                  let tempObj = {
                    id: fromArr.FamilyNameID,
                    label: fromArr.FamilyName,
                    // isOnlyId: fromArr.RaletionElementID,
                    parentId: treeItem.id,
                    disabled: bool ? false : fromArr.IsRelation,
                    children: []
                  }
                  if (this.selected) tempObj.disabled = false
                  treeItem.children.push(tempObj)
                }
              })
              let temp = {}
              treeItem.children = treeItem.children.reduce((item, next) => {
                temp[next.id] ? '' : temp[next.id] = true && item.push(next)
                return item
              }, [])
            })
          })
          // 四级族类型
          newArr.forEach(item => {
            item.children.forEach(treeItem => {
              treeItem.children.forEach(fourItem => {
                arr.forEach(fromArr => {
                  if (fromArr.FamilyNameID === fourItem.id) {
                    let tempObj = {
                      id: fromArr.FamilyTypeNameID,
                      label: fromArr.FamilyTypeName,
                      // isOnlyId: fromArr.RaletionElementID,
                      parentId: fourItem.id,
                      disabled: bool ? false : fromArr.IsRelation,
                      children: []
                    }
                    if (this.selected) tempObj.disabled = false
                    fourItem.children.push(tempObj)
                  }
                })
                let temp = {}
                fourItem.children = fourItem.children.reduce((item, next) => {
                  temp[next.id] ? '' : temp[next.id] = true && item.push(next)
                  return item
                }, [])
              })
            })
          })
          // 五级楼层
          newArr.forEach(item => {
            item.children.forEach(treeItem => {
              treeItem.children.forEach(fourItem => {
                fourItem.children.forEach(fiveItem => {
                  arr.forEach(fromArr => {
                    if (fromArr.FamilyTypeNameID === fiveItem.id) {
                      let tempObj = {
                        id: fromArr.FLOORID,
                        label: fromArr.Floor,
                        parentId: fourItem.id,
                        disabled: bool ? false : fromArr.IsRelation,
                        elementId: fromArr.RaletionElementID
                      }
                      if (this.selected) tempObj.disabled = false
                      fiveItem.children.push(tempObj)
                    }
                  })
                  let temp = {}
                  fiveItem.children = fiveItem.children.reduce((item, next) => {
                    temp[next.id] ? '' : temp[next.id] = true && item.push(next)
                    return item
                  }, [])
                })
              })
            })
          })
        }
        newArr.forEach(item => {
          item.children.forEach(obj => {
            if (obj.disabled) {
              item.disabled = true
            }
          })
        })
        this.array = newArr
        this.checkedKeys = [...new Set(this.checkedKeys)]
        this.loadingTree = false
        // this.$toast.clear()
      })
    },
  }
}