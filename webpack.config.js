const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let conf = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist-webpack'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'postcss-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ],
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(
      { filename: 'style..css' }
    ),
  ]
}

module.exports = conf;
