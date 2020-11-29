let UglifyJsPlugin = require('uglifyjs-webpack-plugin')
console.log('import vue config')

module.exports = {
    css: {
      loaderOptions: {
        css: {
          // 这里的选项会传递给 css-loader
        },
        postcss: {
          // 这里的选项会传递给 postcss-loader
        }
      }
    },
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
      ],
      optimization: {
        splitChunks: {
            chunks: "async",// all async initial
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: "~",
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
    }
}