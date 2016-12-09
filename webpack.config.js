const path = require ('path')

module.exports = {
  entry: {
    bundle: path.join (__dirname, './src/client/index.js')
  },
  output: {
    path: './build',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}
