const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const localIdentName = "[name]__[local]--[hash:base64:5]";

module.exports = {
    entry: path.resolve(__dirname, "src"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    devtool: "source-map",
    devServer: {
        port: 3000,
        open: true,
        contentBase: path.resolve(__dirname, "public"),
        watchContentBase: true,
        liveReload: false,
        hot: true,
        inline: true,
        stats: "errors-only",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        sourceMap: true,
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: { localIdentName },
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
