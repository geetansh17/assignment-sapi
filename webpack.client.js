var path = require('path');

module.exports = {
    entry: './client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
        ]
    },
};