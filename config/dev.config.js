// @ts-nocheck
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const VueLoaderPlugin = require('vue-loader/plugin')

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.ts'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      // '@': path.resolve(__dirname, './src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.ts$/,
        // exclude: /node_modules/,
        // enforce: 'pre',
        loader: 'ts-loader'
      },
      // {
      //   test: /\.tsx?$/,
      //   loader: 'ts-loader',
      //   exclude: /node_modules/,
      //   options: {
      //     appendTsSuffixTo: [/\.vue$/],
      //   }
      // },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
				options: {
					// extractCSS: true,
					loader: {
						js: ["babel-loader?presets[]=es2015"]
					}
				}
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: './images/[name].[hash].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({template: './public/index.html'}),
    new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 8080,
    hot: true
  }
}