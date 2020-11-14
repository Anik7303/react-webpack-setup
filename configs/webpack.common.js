const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { JSLoader, FileLoader, UrlLoader } = require("./loader.common");

const config = {
    entry: path.resolve(__dirname, "../src/index.js"),
    output: {
        path: path.resolve(__dirname, "../dist/"),
        filename: path.join("static", "js", "[name].[contenthash].js"),
    },
    module: {
        rules: [JSLoader, FileLoader, UrlLoader],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
            favicon: path.resolve(__dirname, "../public/favicon.ico"),
        }),
    ],
    optimization: {
        splitChunks: { chunks: "all" },
    },
};

module.exports = config;
