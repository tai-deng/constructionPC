/**
 * 权限混入
 */
import { GetMenuList, GetListByRoleID, SaveMenu } from "@/api/api.js";
import { infaces } from "../module/interfaces.js";
export default {
  data() {
    return {
      allChecked: false, //全选
      checkedList: new Set(), //已选择的第一级菜单ID数组
    }
  },
  methods: {
    // 展开节点
    onChoose(index) {
      this.jurisdiction_s[index].isClick = !this.jurisdiction_s[index].isClick;
    },
    /**
 * 监听全选
 */
    allCheckedChange(allChecked) {
      if(sessionStorage.getItem('menuType')  !== "2"){
        this.$message({
          type: "warning",
          message: "您没有权限操作",
          center: "true"
        });
        return;
      }
      console.log("是否全选", allChecked);
      this.jurisdiction_s.forEach(i => {
        i.check = allChecked;
        //将全选的一级菜单加入数组
        this.checkedList[allChecked ? "add" : "delete"](i.id);
      });
      console.log(this.checkedList);
    },


    // 点击第一层权限菜单复选框
    onCheck(check, item) {
      if(sessionStorage.getItem('menuType')  !== "2"){
        this.$message({
          type: "warning",
          message: "您没有权限操作",
          center: "true"
        });
        return;
      }
      console.log("点击第一层权限菜单复选框", check, item);
      //增或删某项一级菜单
      this.checkedList[check ? "add" : "delete"](item.id)
      console.log(this.checkedList)
      //全选框是否勾选
      this.allChecked = this.checkedList.size==this.jurisdiction_s.length
    },


    /**
     * 只读与编辑选择
     *   isReadyOnly: true只读,flase:编辑
     *   item: 选项对象
     *   superior:父菜单对象，如果本身就是父菜单，则返回null
     * 
     * '1'：可查看
     * '2'：可编辑
     * '0'：取消已选
     */
    onSelect(item, isReadyOnly, superior) {
      if(sessionStorage.getItem('menuType')  !== "2"){
        this.$message({
          type: "warning",
          message: "您没有权限操作",
          center: "true"
        });
        return;
      }
      console.log(item, isReadyOnly);
      let sate = isReadyOnly ? "1" : "2", ids;
      item.sate = item.sate != sate ? sate : "0";
      console.log(this.role_sel);

      console.log('父级菜单对象', superior)
      if (superior) {//如果有父级，且父级没被勾选，则只更改单个子菜单权限
        //单个修改权限
        if ([...this.checkedList].indexOf(superior.id) == -1) {
          console.log('单个修改权限', item.id)
          ids = item.id
        } else {
          //批量修改权限
          ids = this.setSubmenuList().join(',')
          console.log('批量修改权限', ids)
        }
      } else {
        console.log('单个修改权限', item.id)
        ids = item.id
      }
      if(!this.role_sel.id){    
        this.$message({type:'error',message:'请选择角色！',center:'true'})
        return
      }
      let params = {
        ids, //菜单id
        Types: sate, //类型（1.查看2.编辑）
        rID: this.role_sel.id, //角色ID
        isCancel: item.sate == "0" ? 1 : 0 //0选中1取消
      };
      this.saveMenu(params);
    },
    /**
     * 分配和取消权限菜单
     */
    saveMenu(params) {
      infaces(this, SaveMenu, params).then(res => {
        console.log(res);
        // 更新权限菜单
        this.getListByRoleID(this.role_sel.id)
      });
    },
    /**
     * 临时菜单ID列表
     */
    setSubmenuList() {
      console.log(this.jurisdiction_s, this.checkedList)
      /**
       * 1.jurisdiction_s中包含checkedList中id的选项
       * 2.返回一个ID数组：
       *   包含：如果主菜单没有子菜单，则将它的本身的ID加入到数组this.submenuList
       *        如果有子菜单，则把所有子菜单的ID加入到this.submenuList
       */
      let list = this.jurisdiction_s.filter(i => [...this.checkedList].indexOf(i.id) != -1)
      let set = new Set()
      list.forEach(j => {
        if (j.children && j.children.length > 0) {
          j.children.forEach(k => {
            set.add(k.id)
          })
          set.add(j.id)
        } else {
          set.add(j.id)
        }
      })
      console.log(set)
      return [...set]
    }
  },
  computed: {
    roleId() {
      console.log('%c aaaa','color:red',this.role_sel)
      return this.role_sel.id; 
    },
  },
}




