module.exports = {
    pages: {
      index: {
        // page 的入口
        entry: 'src/main.js',
      },
    },
    lintOnSave: false,   // 关闭语法检查
    // 开启代理服务器（方式一）
    /* devServer: {
      proxy: 'http://localhost:5000'
    } */
    // 开启代理服务器（方式二）
    devServer: {
      proxy: {
        '/lloam': {
          target: 'http://localhost:5000',
          pathRewrite:{'^/lloam':''}, // 重写请求地址，正则表达式
          ws: true, // 用于支持 websocket
          changeOrigin: true  // 用于控制请求头中的 host 值
        },
        '/demo': {
          target: 'http://localhost:5001',
          pathRewrite:{'^/demo':''}, // 重写请求地址，正则表达式
          ws: true, // 用于支持 websocket
          changeOrigin: true  // 用于控制请求头中的 host 值
        }
      }
    }
    
  }