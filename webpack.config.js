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
        ]
    }
};