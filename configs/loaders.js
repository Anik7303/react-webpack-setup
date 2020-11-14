const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const JSLoader = {
    test: /\.js$/i,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
        },
    },
};

const CSSLoader = {
    test: /\.css$/i,
    use: [
        { loader: MiniCssExtractPlugin.loader },
        { loader: "css-loader", options: { importLoaders: 1 } },
        {
            loader: "postcss-loader",
            options: { postcssOptions: { config: path.join(__dirname, "postcss.config.js") } },
        },
    ],
};

const FileLoader = {
    test: /\.(png|jpe?g|svg|gif)$/i,
    use: {
        loader: "file-loader",
        options: {
            publicPath: path.resolve(__dirname, "../dist/static/"),
            outputPath: "images",
        },
    },
};

module.exports = { JSLoader, CSSLoader, FileLoader };
