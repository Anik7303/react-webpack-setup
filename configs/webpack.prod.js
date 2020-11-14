const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");

const common = require("./webpack.common");
const { CSSLoader, SASSLoader } = require("./loader.prod");

const config = {
    mode: "production",
    devtool: "source-map",
    module: {
        rules: [CSSLoader, SASSLoader],
    },
    plugins: [new CleanWebpackPlugin()],
};

module.exports = merge(common, config);
