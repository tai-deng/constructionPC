/**
 * 第一步
 */
export default {
    data() {
        return {

        }
    },
    methods: {

        // 获取--楼层类型---1
        getLIstOne() {
            this.ajax(get_floor_list, [], res => {
                if (res.length > 0) {
                    this.fromData.one = res;
                } else {
                    this.fromData.one.length = 0;
                    this.addLIstOne();
                }
            });
        },
        // 添加--楼层类型---1
        addLIstOne() {
            this.fromData.one.push({ Name: "", Describe: "", ProjectID: "" });
            console.log("添加");
        },
        // 修改--楼层类型---1
        setLIstOne(par) {
            this.ajax(set_floor_list, [par], res => {
                // 进入下一步
                this.onNextStep();
                console.log("修改", res);
            });
        },
        // 删除--楼层类型---1
        delLIstOne(i) {
            let ID = this.fromData.one[i].ID;
            this.ajax(del_floor_list, [{ ID }], res => {
                this.fromData.one.splice(i, 1);
                console.log("删除", res);
            });
        },
    }
}
