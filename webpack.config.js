const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const config = {
  entry: {
    popup: path.join(__dirname, "src/extension/popup.tsx"),
    content: path.join(__dirname, "src/extension/content.ts"),
    background: path.join(__dirname, "src/extension/background.ts"),
  },
  mode: 'development',
  devtool: 'inline-source-map',
  output: { path: path.join(__dirname, "dist"), filename: "[name].js" },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "url-loader",
            options: {
              mimetype: "image/png",
            },
          },
        ],
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader','css-loader', 'sass-loader']
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "public", to: "." }],
    }),
  ],
};

module.exports = config;
