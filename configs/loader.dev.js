const { postcssPlugin } = require("cssnano");
const path = require("path");

const postcssPlugins = {
    "postcss-import": {},
    "postcss-preset-env": {
        browsers: ["last 1 version"],
        stage: 0,
    },
};

const CSSLoader = {
    test: /\.css$/i,
    use: [
        { loader: "style-loader" },
        { loader: "css-loader", options: { sourceMap: true } },
        {
            loader: "postcss-loader",
            options: {
                postcssOptions: { plugins: postcssPlugins },
                sourceMap: true,
            },
        },
    ],
};

const SASSLoader = {
    test: /\.s[ac]ss$/i,
    use: [
        { loader: "style-loader" },
        { loader: "css-loader", options: { importLoaders: 1, sourceMap: true } },
        {
            loader: "postcss-loader",
            options: {
                postcssOptions: { plugins: postcssPlugins },
                sourceMap: true,
            },
        },
        {
            loader: "sass-loader",
            options: { sourceMap: true, implementation: require("sass") },
        },
    ],
};

module.exports = { CSSLoader, SASSLoader };
