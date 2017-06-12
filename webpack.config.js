/**
 * Created by Programador RRHH-2. ZSLCD
 */
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var debug = process.env.NODE_ENV !== "production";
// var dir = '../sipe-web/src/main/webapp/dist/';
// var dir = 'dist/';
var dir = './dist';

module.exports =
{
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./src/app.js",
    debug: true,
    output: {
        path: dir,
        filename: "app.min.js"
    },
    module: {
        loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loaders: ['ng-annotate', 'babel-loader?presets[]=es2015'],
          cacheable: true
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css!resolve-url!sass?sourceMap')
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "url-loader?limit=10000&mimetype=application/font-woff"
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file-loader"
        },
        {
          test: /\.wav$|\.mp3$/,
          loader: "file-loader"
        },
        {   test: /\.jpe?g$|\.gif$|\.png$/,
          loader: "base64-image-loader"
        },
        {test: /\.html$/, loader: "html"},]
    },
    plugins: [
        new ExtractTextPlugin('app.min.css',
            {
                allChunks: true
            })
    ]


};
