const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

//Definir un punto de entrada.
module.exports = {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        static: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8000,
    },
    entry: {
        main: path.resolve(__dirname, './src/app/index.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Weather',
            template: path.resolve(__dirname, './src/index.html'),
            filename: './index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
}