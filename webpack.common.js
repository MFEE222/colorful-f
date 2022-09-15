const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// require('dotenv').config();

module.exports = {
    entry: {
        main: './src/index.js',
    },

    plugins: [
        // new webpack.ProvidePlugin({
        //     process: 'process/browser',
        // }),
        // new webpack.DefinePlugin({
        // 'process.env': JSON.stringify(process.env),
        // process: JSON.stringify(process),
        // }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            favicon: path.resolve(__dirname, 'public/favicon.png'),
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/main.[contenthash].css',
        }),
    ],

    // externalsType: 'script',
    // externals: ['https://accounts.google.com/gsi/client'],

    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['@babel/preset-env', '@babel/preset-react'],
                    //     plugins: ['@babel/plugin-transform-runtime'],
                    // },
                },
            },
            {
                test: /\.s?[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|mp4|pdf|mpg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'static/media/[name][hash][ext][query]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'static/media/[name][hash][ext][query]',
                },
            },
        ],
    },

    output: {
        filename: 'static/js/[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        clean: true,
    },
};
