const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, '../client/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: 'client.js'
    }
})