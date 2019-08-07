let webpack = require('webpack');
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
    entry: {
      app: './src/ui/main.ts'
    },
    resolve: {
      alias: {
        '@': __dirname + '/src/ui'
      }
    },
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js'
    },
    devServer: {
      writeToDisk: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        inlineSource: '.(js|css)$',
        chunks: ['app']
      }),
      new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin)
    ]
  },
  chainWebpack: config => {
    config
      .entry('main')
      .add('./src/main/index.ts')
      .end();
  }
};
