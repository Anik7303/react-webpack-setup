const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const postcssPlugins = {
    "postcss-import": {},
    "postcss-preset-env": {
        browsers: [">0.02%", "not dead"],
        stage: 0,
    },
    cssnano: {},
};

const CSSLoader = {
    test: /\.css$/i,
    use: [
        MiniCssExtractPlugin.loader,
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
        MiniCssExtractPlugin.loader,
        { loader: "css-loader", options: { importLoaders: 1, sourceMap: true } },
        {
            loader: "postcss-loader",
            options: {
                postcssOptions: { plugins: postcssPlugins },
                sourceMap: true,
            },
        },
        { loader: "sass-loader", options: { sourceMap: true, implementation: require("sass") } },
    ],
};

module.exports = { CSSLoader, SASSLoader };
