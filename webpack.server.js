const Path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const config = require('./webpack.base.js')

const serverCofig = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'bundle.js',
    path: Path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()] // in order to ignore all modules in node_modules folder
};

module.exports = merge(config, serverCofig)