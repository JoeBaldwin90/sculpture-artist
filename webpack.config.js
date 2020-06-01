import HtmlWebPackPlugin from "html-webpack-plugin";

// eslint-disable-next-line no-undef
export const module = {
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
};
export const plugins = [
  new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html",
    favicon: "./public/statue.ico",
  }),
];
