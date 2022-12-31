const { merge } = require('webpack-merge')
const base = require('./webpack.config.base')

module.exports = merge(base, {
  mode: process.env.NODE_ENV || "production",
  devtool: "source-map",
  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true, //只对xxx.modlue开启模块
                localIdentName: "[name]__[local]___[hash:5]",
              },
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 20480,
          },
        },
      },
    ],
  },
  externals: {
    html2canvas: "html2canvas",
  }
});
