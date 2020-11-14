const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

const common = require("./webpack.common");
const { CSSLoader, SASSLoader } = require("./loader.dev");

const config = {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        port: 3000,
        open: true,
        contentBase: path.resolve(__dirname, "../public/"),
        watchContentBase: true,
        liveReload: false,
        hot: true,
    },
    module: {
        rules: [CSSLoader, SASSLoader],
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
};

module.exports = merge(common, config);
