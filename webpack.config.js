/* eslint-disable no-undef */
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: path.resolve(__dirname, "src/index.js"),
    hannah: path.resolve(__dirname, "src/images/hannah.png"),
    head: path.resolve(__dirname, "src/images/head.png"),
    clay: path.resolve(__dirname, "src/images/clay.jpg"),
    arrow: path.resolve(__dirname, "src/images/arrow.svg"),
    chest: path.resolve(__dirname, "src/images/chest.png"),
    ant: path.resolve(__dirname, "src/images/ant.png"),
    claudia: path.resolve(__dirname, "src/images/claudia.png"),
    cback: path.resolve(__dirname, "src/images/ClaudiaBack.png"),
    cfront: path.resolve(__dirname, "src/images/ClaudiaFront.png"),
    forearm: path.resolve(__dirname, "src/images/forearm.png"),
    hardwell: path.resolve(__dirname, "src/images/hardwell.png"),
    jfront: path.resolve(__dirname, "src/images/JacksonFront.png"),
    jside: path.resolve(__dirname, "src/images/JacksonSide.png"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
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
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
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
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./public/statue.ico",
    }),
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
