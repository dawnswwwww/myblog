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
      // output: {
      //   filename: '[name].[chunkhash.8].js',
      //   chunksFilename: '[name].[chunkhash.8].js',
      //   outputDir: './dist'
      // },
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
    //   optimization: {
    //     minimize: true,
    //     minimizer: [
    //       new TerserJSPlugin({
    //         // test: /\.js(\?.*)?$/i,
    //         // cache: true, // 是否缓存
    //         parallel: true, // 是否并行打包
    //         // sourceMap: true,
    //         terserOptions: {
    //           ecma: undefined,
    //           warnings: false,
    //           parse: {},
    //           compress: {
    //             drop_debugger: false,  // 除了这两句是我加的，基他都是默认配置
    //             drop_console: true
    //           },
    //           mangle: true, // Note `mangle.properties` is `false` by default.
    //           module: true,
    //           output: null,
    //           toplevel: false,
    //           nameCache: null,
    //           ie8: false,
    //           keep_classnames: undefined,
    //           keep_fnames: true,
    //           safari10: false,
    //         }
    //       })
    //     ],
    //     splitChunks: {
    //         chunks: "async",// all async initial
    //         minSize: 30000,
    //         maxSize: 300000,
    //         minChunks: 1,
    //         maxAsyncRequests: 5,
    //         maxInitialRequests: 3,
    //         automaticNameDelimiter: "~",
    //         name: true,
    //         cacheGroups: {
    //           vendors: {
    //               // test: /[\\/]node_modules[\\/]/,
    //               // test: /[\\/]node_modules\/vue[\\/]/,
    //               priority: 70,
    //               name: 'vendors',
    //               chunks: 'all'
    //           },
    //            'async-commons': { // 异步加载公共包、组件等
    //               chunks: 'async',
    //               minChunks: 2,
    //               name: 'async-commons',
    //               priority: 90,
    //              },
    //              commons: { // 其他同步加载公共包
    //               test: /[\\/]node_modules[\\/]/,
    //               chunks: 'async',
    //               minChunks: 2,
    //               name: 'commons',
    //               priority: 100,
    //              },
    //           default: {
    //               minChunks: 2,
    //               priority: -20,
    //               reuseExistingChunk: true
    //           }}
    //     }
    // }
    }
}