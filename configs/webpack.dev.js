const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

const common = require("./webpack.common");

const config = {
    mode: "development",
    devtool: "source-map",
    devServer: {
        port: 3000,
        open: true,
        contentBase: path.resolve(__dirname, "../public/"),
        watchContentBase: true,
        liveReload: true,
        hot: false,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
};

module.exports = merge(common, config);
