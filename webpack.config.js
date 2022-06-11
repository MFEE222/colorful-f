const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'development', // "production", "none"
    // mode: 'production',

    entry: {
        index: './src/index.js',
    },

    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].css',
        }),
    ],

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
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|mp4|pdf|mpg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'static/media/[hash][ext][query]',
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'static/media/[hash][ext][query]',
                },
            },
        ],
    },

    optimization: {
        minimize: true,
        minimizer: ['...', new CssMinimizerPlugin(), new TerserPlugin()],
    },

    output: {
        filename: 'static/js/main.[chunkhash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },

    devtool: 'source-map',

    devServer: {
        port: 3000,
    },
};
