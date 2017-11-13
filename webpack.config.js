const path = require('path');

module.exports = {
  entry: `${path.resolve(__dirname, 'src')}/index.jsx`,
  module: {
    loaders: [
      {
        loaders: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      {
        exclude: /(node_modules)/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets:['react']
        },
        test: /\.jsx?$/
      },
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.webpack.js', '.js', '.jsx'],
  }
}