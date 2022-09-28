const { merge } = require('webpack-merge');
const dev = require('./webpack.dev');

module.exports = (env) => {
    return merge(dev(env), {
        entry: {
            main: './src/sandbox.js',
        },
    });
};
