const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({

  publicPath: "./",
  assetsDir: "static",
  outputDir: 'dist',

  transpileDependencies: true,
  // 忽略组件命名格式
  lintOnSave: false,

  devServer: {
    port: 8081,
    // proxy: {
    //   // http://127.0.0.1:8080
    //   '/path': {
    //     target: 'http://127.0.0.1:8080',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/path': ''
    //     }
    //   }
    //
    // }
  }
})

