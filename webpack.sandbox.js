const { merge } = require('webpack-merge');
const dev = require('./webpack.dev');
// const TerserPlugin = require('terser-webpack-plugin');
// const BundleAnalyzerPlugin =
//     require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env) => {
    return merge(dev(env), {
        entry: {
            main: './src/sandbox.js',
        },

        // plugins: [new BundleAnalyzerPlugin()],

        // module: {
        //     rules: [
        //         {
        //             sideEffects: false,
        //         },
        //     ],
        // },

        // optimization: {
        //     usedExports: true,
        //     minimize: true,
        //     minimizer: [new TerserPlugin()],
        // },

        // devtool: 'source-map',
    });
};
