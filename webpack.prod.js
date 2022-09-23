const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin =
    require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common = require('./webpack.common');
const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge');

module.exports = (env) => {
    console.log('env :>> ', env);

    return merge(common, {
        mode: 'production',

        plugins: [
            new Dotenv({
                path: `./.env.${env.env}`,
            }),
            new BundleAnalyzerPlugin(),
        ],

        optimization: {
            minimize: true,
            minimizer: ['...', new CssMinimizerPlugin(), new TerserPlugin()],
            splitChunks: {
                cacheGroups: {
                    react: {
                        test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
                        chunks: 'all',
                        name: 'vendor~react',
                        enforce: true,
                    },
                    // styles: {
                    //     // type: 'css/mini-extract',
                    //     test: /src[\\/]styles[\\/](vendor.scss)/,
                    //     name: 'common-styles',
                    //     chunks: 'all',
                    //     enforce: true,
                    // },
                },
            },
        },
    });
};
