var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: 'source-map',
  context: process.cwd(),
  entry: {
    vendor: [path.join(process.cwd(), "demo", "tools", "vendors.js")]
  },
  output: {
    path: path.join(process.cwd(), "demo", "public", "assets", "js"),
    filename: "dll.[name].js",
    library: "[name]"
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(process.cwd(), "demo", "tools", "dll", "[name]-manifest.json"),
      name: "[name]",
      context: path.resolve(process.cwd(), "demo/src/client")
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    })
  ]
};