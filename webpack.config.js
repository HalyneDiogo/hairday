const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  target: "web",

  entry: path.resolve(__dirname, "src", "main.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 8080,
    open: true,
    liveReload: true, // Desativar o liveReload
    hot: true, // Habilitar Hot Module Replacement (HMR)
    host: "0.0.0.0", // Permitir conexões externas
    allowedHosts: "all", // Permitir todos os hosts
    client: {
      webSocketURL: {
        hostname: "shiny-space-funicular-x595p6grj56ph6pqx-8080.app.github.dev",
        pathname: "/ws",
        port: "443",
        protocol: "wss",
      },
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      favicon: path.resolve(__dirname, "src", "assets", "scissors.svg"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"),
          to: path.resolve(__dirname, "dist", "src", "assets"),
        },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
