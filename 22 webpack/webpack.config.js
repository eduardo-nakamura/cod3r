const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const UglifyJS = require('uglifyjs-webpack-plugin')
const OptimizeCSS = require('optimize-css-assets-webpack-plugin')
// set NODE_OPTIONS=--openssl-legacy-provider && npm start
module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port: 9000,
    },
    optimization: {
        minimizer:[
            new UglifyJS({
                cache: true,
                parallel: true
            }),
            new OptimizeCSS({})
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'style.css'
        })
    ],
    module: {
        rules:[{
            test: /\.s?[ac]ss$/,
            use:[
                MiniCSSExtractPlugin.loader,
                // 'style-loader',
                'css-loader',
                "sass-loader"
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}