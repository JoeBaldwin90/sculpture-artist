const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

// eslint-disable-next-line no-undef
module.exports = {
  mode: "production",
  entry: {
    index: path.resolve(__dirname, "src/index.js"),
    // hannah: path.resolve(__dirname, "src/images/hannah.png"),
    // head: path.resolve(__dirname, "src/images/head.png"),
    // clay: path.resolve(__dirname, "src/images/clay.jpg"),
    // arrow: path.resolve(__dirname, "src/images/arrow.svg"),
  },
  performance: {
    hints: process.env.NODE_ENV === "production" ? "warning" : false,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        include: /images/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
              publicPath: "images/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./public/statue.ico",
    })
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];

            return `npm.${packageName.replace("@", "")}`;
          },
        },
      },
    },
  },
};
