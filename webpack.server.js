const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server/index.js',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('build'),
    filename: 'index.js'
  },

  module: {
    rules: [
        { 
            test: /\.jsx?$/, 
            loader: 'babel-loader',
            query: {
                presets: ['@babel/preset-react','@babel/preset-env']
            },
        }
    ]
  }
};