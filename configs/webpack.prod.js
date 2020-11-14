const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");

const common = require("./webpack.common");
const { CSSLoader, SASSLoader } = require("./loader.prod");

const config = {
    mode: "production",
    devtool: "source-map",
    module: {
        rules: [CSSLoader, SASSLoader],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: path.join("static", "css", "[name].[contenthash].css"),
        }),
    ],
};

module.exports = merge(common, config);
