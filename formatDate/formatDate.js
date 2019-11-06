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


/**
 * 根据传入的时间戳，格式化日期
 * @param value 时间戳
 * @param fmt
 * @returns {*}
 */
function timeFormatDate(value, fmt) {
  if (!value) return
  var regPos = /^\d+(\.\d+)?$/;
  if (regPos.test(value)) {
    let secondTime = parseInt(value/1000);
    let minuteTime = 0;// 分
    let hourTime = 0;// 小时
    if (secondTime > 60) {//如果秒数大于60，将秒数转换成整数
      //获取分钟，除以60取整数，得到整数分钟
      minuteTime = parseInt(secondTime / 60);
      //获取秒数，秒数取佘，得到整数秒数
      secondTime = parseInt(secondTime % 60);
      //如果分钟大于60，将分钟转换成小时
      if (minuteTime > 60) {
        //获取小时，获取分钟除以60，得到整数小时
        hourTime = parseInt(minuteTime / 60);
        //获取小时后取佘的分，获取分钟除以60取佘的分
        minuteTime = parseInt(minuteTime % 60);
      }
    }
    let o = {
      'h+': parseInt(hourTime),
      'm+': parseInt(minuteTime),
      's+': parseInt(secondTime)
    };
    for (let k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmt;
   }
}
