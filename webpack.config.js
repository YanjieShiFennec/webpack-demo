const path = require('path');

// 自动生成 index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    devtool: 'inline-source-map', // 追踪错误与警告在源代码中的原始位置
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
    output: {
        filename: '[name].bundle.js', // name 对应 entry 中的 key 值
        path: path.resolve(__dirname, 'dist'),
        clean: true, // 构建前清理 /dist 文件夹
    },
    optimization: {
        runtimeChunk: 'single',
    },
};