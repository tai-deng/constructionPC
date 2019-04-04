export const arrayClick = (arr = [], v) => {
    if (v == '') return arr;
    let newArr = [], flag = true;
    if (arr.length == 0) {
        newArr.push(v)
    } else {
        arr.forEach((item, index) => {
            if (item != v) {
                newArr.push(item)
            } else {
                flag = false;
            }
        })
        newArr.forEach(item => {
            if (item != v && newArr.indexOf(v) == -1 && flag) {
                newArr.push(v)
            }
        })
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


    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}

export const sum = (arrs) => {
    let len = arrs.length;
    if(len == 0){
        return 0;
    } else if (len == 1){
        return Number(arrs[0]);
    } else {
        return Number(arrs[0]) + sum(arrs.slice(1));
    }
};