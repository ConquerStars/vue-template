# vue-template
vue2.x项目模板，包含```vue-router```, ```vuex```, ```ant-design```、```axios```、```less```，个人快速搭建使用  
```使用前请先支持EditorConfig```

> 相关文档
> - VUE路由: [vue-router](https://router.vuejs.org/zh/)  
> - 状态管理: [vuex](https://vuex.vuejs.org/zh/)  
> - UI框架: [ant-design-vue 1.5.0](https://vue.ant.design)  
> - Http Request: [Axios](https://www.npmjs.com/package/axios)  
> - CSS 预处理: [less](http://lesscss.cn/)  


## 安装依赖
> npm i

## 启动服务
> npm run serve

## 打包
> npm run build

## 上传
> *配置根目录下```deploy.js```服务器信息*  
> *上传前需要先打包，在根目录下有```dist```前端包*  
> npm run upload:```{params}```  
> @params: 开发```dev``` 测试```test``` 生产```prod```

## 自动化部署
> npm run deploy:```{params}```  
> @params: 开发```dev``` 测试```test``` 生产```prod```
