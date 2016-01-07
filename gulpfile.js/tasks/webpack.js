import webpack from 'webpack';
import path from 'path';
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const devServer = {
  contentBase: path.resolve(__dirname, '../../public'),
  colors: true,
  quiet: false,
  noInfo: false,
  publicPath: '/static/',
  historyApiFallback: true,
  host: '127.0.0.1',
  port: 3000,
  hot: true
};

module.exports = {
  devServer: devServer,
  cache: false,
  debug: true,
  devtool: 'source-maps',
  context: path.resolve(__dirname, '../../' ),
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client?reload=true',
    'webpack/hot/only-dev-server',
    './src/app.js'
  ],
  output: {
    path: path.resolve(__dirname, '../../public'),
    filename: 'bundle.js',
    publicPath: '/static/', // this is basically store in memory
    pathinfo: true,
    devtoolModuleFilenameTemplate: '/[absolute-resource-path]'
  },
  resolve: {
    extensions: ['', '.jsx', '.scss', '.js', '.json']
  },

  module: {
    loaders: [
      { test: /\.js?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader'] },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /(\.scss|\.css)$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[local]_--_[hash:base64:5]!postcss!sass?sourceMap') }
    ],
  },
  progress: true,
  plugins: [
    new ExtractTextPlugin('main.css', { allChunks: true }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
  ]
};
