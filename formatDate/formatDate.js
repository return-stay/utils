/**
 * 时间格式化
 * @param value
 * @param fmt
 * @returns {*}
 */
function formatDate(value, fmt) {
    var regPos = /^\d+(\.\d+)?$/;
    if (regPos.test(value)) {
        //如果是数字
        let getDate = new Date(value);
        let o = {
            'M+': getDate.getMonth() + 1,
            'd+|D+': getDate.getDate(),
            'h+': getDate.getHours(),
            'm+': getDate.getMinutes(),
            's+': getDate.getSeconds(),
            'q+': Math.floor((getDate.getMonth() + 3) / 3),
            'S': getDate.getMilliseconds()
        };
        if (/(y+|Y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (getDate.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        for (let k in o) {
            console.log(k)
            if (new RegExp('(' + k + ')').test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
            }
        }
        return fmt;
    } else {
        //TODO
        value = value.trim();
        return value.substr(0, fmt.length);
    }
}


console.log(formatDate(1572854823934, 'YYYY-MM-DD hh:mm:ss'))


function ceshiRegExp(value) {
    if (/(y+|Y+):(y+|Y+):(y+|Y+)/.test(value)) {
        console.log(RegExp.$1)
        console.log(RegExp.$2)
        console.log(RegExp.$3)
    }

    if ("2009-12-17".match(/(\d{4})-(\d+)-(\d+)/)) {

        console.log(RegExp.$1 + '年' + RegExp.$2 + '月' + RegExp.$3 + '日');

    }
}


ceshiRegExp('yyyy:yyyy:yyyy')
