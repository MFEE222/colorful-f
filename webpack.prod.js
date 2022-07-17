const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common');
const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge');

module.exports = (env) => {
    // console.log('env :>> ', env);

    return merge(common, {
        mode: 'production',

        plugins: [
            new Dotenv({
                path: `./.env.${env.env}`,
            }),
        ],

        optimization: {
            minimize: true,
            minimizer: ['...', new CssMinimizerPlugin(), new TerserPlugin()],
        },

        output: {
            filename: 'static/js/[name].[contenthash].bundle.js',
            path: path.resolve(__dirname, 'build'),
            publicPath: '/',
            clean: true,
        },

        // devtool: 'source-map',
    });
};
