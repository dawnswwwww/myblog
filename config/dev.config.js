let path = require("path");

// 处理模板
let HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入模块拆分打包插件
let { CommonsChunkPlugin } = require('webpack').optimize;
// css打包
let ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	resolve: {
		extensions: [".js",".vue"],
		alias: {
			vue$: "vue/dist/vue.js"
		}
	},
	entry: {
		main: "./src/main.js",
		lib: ["vue"]
	},
	output: {
		path: path.join(process.cwd(), "../"),
		filename: "./static/home/[name].js"
	},
	module: {
		// 加载机
		rules: [
			// vue
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.vue$/,
				loader: "vue-loader",
				options: {
					// extractCSS: true,
					loader: {
						js: ["babel-loader?presets[]=es2015"]
					}
				}
			},
			// css加载机
			{
				test: /\.css$/,
				// 将css打包
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader']
				})
			},
			// 字体图标
			{
				test: /\.(woff|ttf)$/,
				loader: 'url-loader'
			}
		]

	},
	plugins: [

		new HtmlWebpackPlugin({
			// 模板位置
			template: "./public/main.html",
			// 模板发布位置
			filename: "./views/home.html",
			hash: true
		}),
		// 模块打包
		new CommonsChunkPlugin("lib"),
		// css打包
		new ExtractTextPlugin("./static/home/style.css")
	]
}