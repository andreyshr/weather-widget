// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack');

module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 1
            })
        ]
    },
    chainWebpack:
        config => {
            config.optimization.delete('splitChunks')
        },
    css: {
        extract: false
    }
}
