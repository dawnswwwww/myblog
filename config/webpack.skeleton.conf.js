const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
    mode: 'development',
    target: 'node',
    entry: {
        app: path.resolve(__dirname, '../src/skeleton.entry.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: 'dist/',
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(css|less)$/,
                use: ['style-loader','css-loader',  'postcss-loader', 'less-loader']
                // use: [
                //     'vue-style-loader',
                //     'css-loader',
                //     'less-loader'
                // ]
            },
        ]
    },
    externals: nodeExternals({
        allowlist: /\.css/
    }),
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['.js', '.vue', '.json']
    },
    plugins: [
        new VueLoaderPlugin(),
        new VueSSRServerPlugin({
            filename: 'skeleton.json'
        })
    ]
}