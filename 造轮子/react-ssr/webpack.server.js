const path = require('path')
const nodeExternals = require('webpack-node-externals');
//服务端的webpack

module.exports = {
    target: "node",
    mode: "development",
    entry: './server/index.js',
    externals: [nodeExternals()],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react", ["@babel/preset-env"]]
                }
            },
            {
                test: /\.css$/,
                //server端没有document对象所以需要特别处理isomorphic-style-loader
                use:['isomorphic-style-loader', 'css-loader']
            }
        ]
    }
}