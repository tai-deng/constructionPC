export const arrayClick = (arr = [], v) => {
    if (v == '') return arr;
    let newArr = [], flag = true;
    if (arr.length == 0) {
        newArr.push(v)
    }
    // else {
    //     arr.forEach((item, index) => {
    //         if (item != v) {
    //             newArr.push(item)
    //         } else {
    //             flag = false;
    //         }
    //     })
    //     newArr.forEach(item => {
    //         if (item != v && newArr.indexOf(v) == -1 && flag) {
    //             newArr.push(v)
    //         }
    //     })
    // }
    else {
        if (arr[0] != v) {
            newArr.push(v)
        }
        arr.length = 0;
    }

    return newArr;
}

export const getSomeMonthLast = (d) => {
    let date = new Date(d)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    return [year, month, day].map(formatNumber).join('-')
}

export const getDateFormatting = (d) => {
    let date = new Date(d)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()


    return [year, month, day].map(formatNumber).join('.') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}

export const sum = (data,arr) => {
    if (typeof arr == 'object' && arr.length > 0) {
        let s = 0;
        arr.forEach(function (val) {
            s += Number(data[Number(val)].id);
        });
        return s;
    }
};

// 权限
export const isPower = (that) => {
    let f = true;
    if (sessionStorage.getItem('menuType') !== "2") {
        that.$message({
            type: "warning",
            message: "您没有权限操作",
            center: "true"
        });
        f = false;
    }
    return f;
}