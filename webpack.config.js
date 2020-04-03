const path = require('path')
const NodeExternals = require('webpack-node-externals')
module.exports = {
    mode: 'development',
    target: 'node',
    entry: {
        index: path.resolve(__dirname, './server/index.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'server.js'
    },
    externals: [NodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env'],
                            ['@babel/preset-react']
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
}