let timeformat = (date, format = 'YYYY-MM-DD hh:mm') => {
  if(!date || new Date(date) == 'Invalid Date') return ''
  date = new Date(date)
  let o = {
    'M+': date.getMonth() + 1, // 月份
    'D+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(Y+)/.test(format)) format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(format)) format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return format
}

let pagination = { // antD 分页options
  showTotal(totle) { return `共 ${totle} 条` },
  current: 1,
  pageSize: 10,
  total: 0,
  showSizeChanger: true,
  pageSizeOptions: ['10', '20', '50']
}

let phoneRegexp = new RegExp(/^1\d{10}$/) // 手机号码校验

let emailRegexp = new RegExp(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/) // 邮箱校验

let weakPswRegexp = new RegExp(/^(?!\d+$)(?![a-zA-Z]+$)[\dA-Za-z?><}{)(*&^%$#@!~)}|\\/,.[\]=-_+'";:]{6,18}$/) // 弱密码校验

let routers = {
  // menuName: routerPath
  '*': '/login',
}

// 路由定位
let routerMatch = menus => {
  if (!menus || !menus.length) return '/login'
  for (let i = 0; i < menus.length; i++) {
    if (routers[menus[i]]) {
      return routers[menus[i]]
    }
  }
  return '/login'
}

export {
  timeformat,
  pagination,
  phoneRegexp,
  emailRegexp,
  weakPswRegexp,
  routerMatch,
}
