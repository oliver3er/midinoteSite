const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    //    contentBase: [
    //      path.join(__dirname, "site"),
    //      path.join(__dirname, "site/cn"),
    //      path.join(__dirname, "site/en"),
    //    ],
    contentBase: "site",
    watchContentBase: true,
  },
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "site"),
  },
};
