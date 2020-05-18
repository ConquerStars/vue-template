
let pagination = {
  showTotal(totle) { return `共 ${totle} 条` },
  current: 1,
  pageSize: 10,
  total: 0,
  showSizeChanger: true,
  pageSizeOptions: ['10', '20', '50']
}

let phoneRegexp = new RegExp(/^1\d{10}$/)

let routers = {
  '*': '/dashboard',
  'SY': '/dashboard',
}

// 路由定位
let routerMatch = menus=> {
  if(!menus || !menus.length ) return '/login'
  for(let i = 0; i < menus.length; i++){
    console.log(routers[menus[i]])
    if(routers[menus[i]]) {
      return routers[menus[i]]
    }
  }
  return '/login'
}

export {
  pagination,
  phoneRegexp,
  routerMatch,
}
