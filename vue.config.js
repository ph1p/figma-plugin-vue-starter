let HtmlWebpackPlugin = require('html-webpack-plugin');
let HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
  css: {
    extract: false
  },
  configureWebpack: {
    devtool: false,
    optimization: {
      splitChunks: false
    },
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        inlineSource: '.(js|css)$'
      }),
      new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin)
    ]
  }
};
