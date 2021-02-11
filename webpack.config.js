const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/build/",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/transform-runtime"]
        }
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "client/"),
    port: 8080,
    publicPath: "http://localhost:8080/build",
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      }
    },
    hot: true
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
}