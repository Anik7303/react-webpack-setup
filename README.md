## Webpack Setup for React:

#### Live-reload:

```javascript
// webpack config file export
module.exports = {
    mode: "development",
    devServer: {
        liveReload: true,
    },
};
```

#### Hot-reload:

```javascript
// webpack config file export
module.exports = {
    mode: "development",
    devServer: {
        liveReload: false,
        hot: true,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
};
```

#### Loaders:

-   js:
    -   [babel][babel]
        -   [@babel/core][babel-core]
        -   [@babel/preset-env][babel-preset-env]
        -   [@babel/preset-react][babel-preset-react]
-   css:
    -   [Style Loader][style-loader] / [MiniCSSExtractPlugin][mini-css-extract-plugin]
    -   [CSS Loader][css-loader]
    -   [PostCSS Loader][postcss-loader]
        -   [cssnano][cssnano]
        -   [postcss-import][postcss-import]
        -   [postcss-preset-env][postcss-preset-env]
-   sass:
    -   [SASS Loader][sass-loader] with [SASS][sass]
-   images:
    -   [File Loader][file-loader] and [URL Loader][url-loader]

#### Snapshots:

**babel-loader:**

```javascript
{
    test: /\.js$/i,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
        },
    }
}
```

**css-loader:**

```javascript
{
    test: /\.css$/i,
    use: [
        "style-loader", // for production { loader: MiniCssExtractPlugin.loader }
        {
            loader: "css-loader",
            options: { sourceMap: true }
        },
        {
            loader: "postcss-loader",
            options: {
                postcssOptions: {
                    plugins: {
                        "postcss-import": {},
                        "postcss-preset-env": {
                            browsers: ["last 1 version"], // for production change this
                            stage: 0
                        }
                    }
                },
                sourceMap: true
            }
        }
    ]
}
```

**sass-loader:**

```javascript
{
    test: /\.s[ac]ss$/i,
    use: [
        "style-loader", // for production { loader: MiniCssExtractPlugin.loader }
        {
            loader: "css-loader",
            options: { sourceMap: true }
        },
        {
            loader: "postcss-loader",
            options: {
                postcssOptions: {
                    plugins: {
                        "postcss-import": {},
                        "postcss-preset-env": {
                            browsers: ["last 1 version"],
                            stage: 0
                        }
                    }
                },
                sourceMap: true
            }
        },
        {
            loader: "sass-loader",
            options: {
                sourceMap: true,
                implementation: require("sass")
            }
        }
    ]
}
```

**file-loader:**

```javascript
{
    test: /\.(png|jpe?g|gif)$/i,
    use: {
        loader: "file-loader",
        options: {
            publicPath: path.resolve(__dirname, "../dist/static/"),
            outputPath: "images"
        }
    }
}
```

**url-loader:**

```javascript
{
    test: /\.svg$/i,
    use: { loader: "url-loader" }
}
```

### Plugins:

-   [HtmlWebpackPlugin][html-webpack-plugin]
-   [MiniCssExtractPlugin][mini-css-extract-plugin]
-   [CleanWebpackPlugin][clean-webpack-plugin]

**HtmlWebpackPlugin:**

```javascript
new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "../public/index.html"),
    favicon: path.resolve(__dirname, "../public/favicon.ico"),
});
```

**MiniCssExtractPlugin:**

```javascript
new MiniCssExtractPlugin({
    filename: path.join("static", "css", "[name].[contenthash].css"),
});
```

[babel]: https://babeljs.io/
[babel-core]: https://www.npmjs.com/package/babel-core
[babel-preset-env]: https://www.npmjs.com/package/@babel/preset-env
[babel-preset-react]: https://www.npmjs.com/package/@babel/preset-react
[style-loader]: https://www.npmjs.com/package/style-loader
[css-loader]: https://www.npmjs.com/package/css-loader
[postcss]: https://www.npmjs.com/package/postcss
[postcss-loader]: https://www.npmjs.com/package/postcss-loader
[postcss-import]: https://www.npmjs.com/package/postcss-import
[postcss-preset-env]: https://www.npmjs.com/package/postcss-preset-env
[sass]: https://www.npmjs.com/package/sass
[sass-loader]: https://www.npmjs.com/package/sass-loader
[file-loader]: https://www.npmjs.com/package/file-loader
[url-loader]: https://www.npmjs.com/package/url-loader
[cssnano]: https://www.npmjs.com/package/cssnano
[autoprefixer]: https://www.npmjs.com/package/autoprefixer
[html-webpack-plugin]: https://www.npmjs.com/package/html-webpack-plugin
[mini-css-extract-plugin]: https://www.npmjs.com/package/mini-css-extract-plugin
[clean-webpack-plugin]: https://www.npmjs.com/package/clean-webpack-plugin
