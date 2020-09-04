module.exports = {
  productionSourceMap: false, // 打包时 是否生成 .map文件
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1890ff',                         // 全局主色
          '@link-color': '#1890ff',                           // 链接色
          '@success-color': '#52c41a',                        // 成功色
          'warning-color': '#faad14',                         // 警告色
          'error-color': '#f5222d',                           // 错误色
          'font-size-base': '14px',                           // 主字号
          'heading-color': 'rgba(0, 0, 0, .85)',              // 标题色
          'text-color': 'rgba(0, 0, 0, .65)',                 // 主文本色
          'text-color-secondary': 'rgba(0, 0, 0, .45)',       // 次文本色
          'disabled-color': 'rgba(0, 0, 0, .25)',             // 失效色
          'border-radius-base': '4px',                        // 组件/浮层圆角
          'border-color-base': '#d9d9d9',                     // 边框色
          'box-shadow-base': '0 2px 8px rgba(0, 0, 0, .15)'   // 浮层阴影
        },
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.1.6:8000',
        ws: true,
        changeOrigin: true,
        // pathRewrite: { // 重写路径
        //   "^/api": ''
        // }
      }
    }
  },
  configureWebpack: (config)=>{ // 生产环境过滤console.log
    config.externals = {
      'vue': 'Vue',
      'vuex': 'Vuex',
      'vue-router': 'VueRouter',
      'Axios':'axios'
    }
    if(process.env.NODE_ENV === 'production'){
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    }
  }
}
