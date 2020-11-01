let UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  devServer: {
    host: '0.0.0.0',
    hot: true,
    port: 8081,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
    configureWebpack: {
      plugins: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_console: true
            }
          }
        })
      ]
    }
}