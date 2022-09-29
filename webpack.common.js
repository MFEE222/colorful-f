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
            // filename: 'static/css/main.[contenthash].css',
            filename: 'static/css/[name].[contenthash].css',
            chunkFilename: 'static/css/[id].[contenthash].css',
        }),
    ],

    // externalsType: 'script',
    // externals: ['https://accounts.google.com/gsi/client'],

    module: {
        rules: [
            {
                sideEffects: false,
            },
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
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'ts-loader',
                },
            },
            {
                test: /\.s?[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                sideEffects: true,
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

    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            hooks: path.resolve(__dirname, 'src/hooks'),
            pages: path.resolve(__dirname, 'src/pages'),
            utils: path.resolve(__dirname, 'src/utils'),
            styles: path.resolve(__dirname, 'src/styles'),
            images: path.resolve(__dirname, 'src/images'),
            contexts: path.resolve(__dirname, 'src/contexts'),
        },
        extensions: ['.tsx', '.ts', '.js'],
    },

    output: {
        filename: 'static/js/[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        clean: true,
    },
};
