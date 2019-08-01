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
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        inlineSource: '.(js|css)$'
      }),
      new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin)
    ]
  }
};
