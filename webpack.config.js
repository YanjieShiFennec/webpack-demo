const path = require('path');

// 自动生成 index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '管理输出',
        }),
    ],
    output: {
        filename: '[name].bundle.js', // name 对应 entry 中的 key 值
        path: path.resolve(__dirname, 'dist'),
        clean: true, // 构建前清理 /dist 文件夹
    },
};