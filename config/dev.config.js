// @ts-nocheck
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const VueSkeletonPlugin = require('vue-skeleton-webpack-plugin')
console.log(`environment is ${process.env.NODE_ENV}`)
console.log(`__dirname is ${__dirname}`)

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[chunkhash:8].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.ts'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true,
          loader: {
            js: ["babel-loader?presets[]=es2015"]
          }
        }
      },
      {
        test: /\.(css|less)$/,
        use: ['style-loader','css-loader',  'postcss-loader', 'less-loader']
      },
      // {
      //   test: /\.tsx?$/,
      //   exclude: /node_modules/,
      //   enforce: 'pre', 
      //   loader: 'ts-loader'
      // },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: { appendTsxSuffixTo: [/\.vue$/] }
          },
          {
            loader: 'tslint-loader'
          }
        ]
     },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          esModule: false,
          name: './images/[name].[hash].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      // chunks: ['vendors', 'commons']
    }),
    new webpack.ProgressPlugin(),
    new VueLoaderPlugin(),
    new VueSkeletonPlugin({
      webpackConfig: require('./webpack.skeleton.conf.js'),
      quiet: false,
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
  ],
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 8080,
    hot: true,
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
  optimization: {
    // chunkIds: 'named',
    // namedChunks: true,
    // runtimeChunk: {
    //   name: entrypoint => `${entrypoint.name}`
    // },
    // mergeDuplicateChunks: true,
    splitChunks: {
        chunks: "async",// all async initial
        minSize: 30000,
        maxSize: 300000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: "-",
        name: true,
        cacheGroups: {
            vendors: {
                // test: /[\\/]node_modules[\\/]/,
                // test: /[\\/]node_modules\/vue[\\/]/,
                priority: 70,
                name: 'vendors',
                chunks: 'all'
            },
             'async-commons': { // 异步加载公共包、组件等
                chunks: 'async',
                minChunks: 2,
                name: 'async-commons',
                priority: 90,
               },
               commons: { // 其他同步加载公共包
                test: /[\\/]node_modules[\\/]/,
                chunks: 'async',
                minChunks: 2,
                name: 'commons',
                priority: 100,
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