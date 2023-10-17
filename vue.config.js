const { defineConfig } = require('@vue/cli-service')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? 'compress-vue' : '/',
  productionSourceMap: false, // 不生成js.map文件
  filenameHashing: false, // 生成文件不带hash值
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: 'officeweb-compress',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  devServer: {
    port: 8081,
    proxy: {
      '/structure': {
        target: 'http://localhost:8080',
        changeOrigin: true
        // pathRewrite: {
        //   '^/api': '/mock'
        // }
      }
    }
  }
})
