const path = require('path')
const NodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

module.exports = merge(baseConfig, {
    mode: 'development',
    target: 'node',
    entry: {
        index: path.resolve(__dirname, '../server/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'server.js'
    },
    externals: [NodeExternals()]
})