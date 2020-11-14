const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const JSLoader = require("./configs/loaders");

const config = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].bundle.js",
    },
    module: {
        rules: [JSLoader],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: path.join(__dirname, "public", "index.html") }),
    ],
};

module.exports = config;
