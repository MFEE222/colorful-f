const path = require('path');
const common = require('./webpack.common');
const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge');

module.exports = (env) => {
    console.log('env :>> ', env);

    return merge(common, {
        mode: 'development',

        plugins: [
            new Dotenv({
                path: `./.env.${env.env}`,
            }),
        ],

        output: {
            filename: 'static/js/[name].bundle.js',
            path: path.resolve(__dirname, 'build'),
            publicPath: '/',
            clean: true,
        },

        devtool: 'source-map',

        devServer: {
            port: 3000,
            compress: true,
            historyApiFallback: true, // 指定所有 404 由 index.html 處理
        },
    });
};
