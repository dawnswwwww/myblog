let UglifyJsPlugin = require('uglifyjs-webpack-plugin')
let TerserJSPlugin = require('terser-webpack-plugin')
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin')

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
        new SkeletonWebpackPlugin({
          webpackConfig: require('./config/webpack.skeleton.conf.js'),
          quiet: true,
          minimize: true,
          router: {
            mode: 'hash',
            routes: [
              {
                path: '/',
                skeletonId: 'home'
              }
            ]
          }
        })
        // new UglifyJsPlugin({
        //   uglifyOptions: {
        //     compress: {
        //       drop_console: true
        //     }
        //   }
        // })
      ],
      optimization: {
        minimize: true,
        minimizer: [
          new TerserJSPlugin({
            // test: /\.js(\?.*)?$/i,
            // cache: true, // 是否缓存
            parallel: true, // 是否并行打包
            // sourceMap: true,
            terserOptions: {
              ecma: undefined,
              warnings: false,
              parse: {},
              compress: {
                drop_debugger: false,  // 除了这两句是我加的，基他都是默认配置
                drop_console: true
              },
              mangle: true, // Note `mangle.properties` is `false` by default.
              module: false,
              output: null,
              toplevel: false,
              nameCache: null,
              ie8: false,
              keep_classnames: undefined,
              keep_fnames: false,
              safari10: false,
            }
          })
        ],
        splitChunks: {
            chunks: "async",// all async initial
            minSize: 30000,
            maxSize: 300000,
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