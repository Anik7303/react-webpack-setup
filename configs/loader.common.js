const path = require("path");

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

const FileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: {
        loader: "file-loader",
        options: {
            publicPath: path.resolve(__dirname, "../dist/static/"),
            outputPath: "images",
        },
    },
};

const UrlLoader = {
    test: /\.svg$/i,
    use: { loader: "url-loader" },
};

module.exports = { JSLoader, FileLoader, UrlLoader };
