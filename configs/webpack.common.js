const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { JSLoader, CSSLoader, FileLoader } = require("./loaders");

const config = {
    entry: path.resolve(__dirname, "../src/index.js"),
    output: {
        path: path.resolve(__dirname, "../dist/"),
        // filename: "static/js/[name].bundle.js",
        filename: path.join("static", "js", "[name].[contenthash].js"),
    },
    module: {
        rules: [JSLoader, CSSLoader, FileLoader],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html"),
            favicon: path.resolve(__dirname, "../public/favicon.ico"),
        }),
        new MiniCssExtractPlugin({
            filename: "/static/css/[name].[contenthash].css",
        }),
    ],
    optimization: {
        splitChunks: { chunks: "all" },
    },
};

module.exports = config;
