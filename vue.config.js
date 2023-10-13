const { defineConfig } = require('@vue/cli-service')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: 'vue-admin-template',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  devServer: {
    port: 8081,
    proxy: {
      '/getCompress': {
        target: 'http://localhost:8080',
        changeOrigin: true
        // pathRewrite: {
        //   '^/api': '/mock'
        // }
      }
    }
  }
})
