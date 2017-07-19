const path = require('path');

module.exports = {
    entry: "./public/entry.js",
    output: {
        path: path.resolve(__dirname + "/public/dist"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                },
            },
        ]
    }
};