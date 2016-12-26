/**
 * Created by wangzhongchun on 6/16/2016.
 */
var path = require('path');
var webpack = require('webpack');
module.exports = {
    externals: {
        'react': 'window.React',
        'jquery':'window.jQuery'
    },
    entry:{
        application: path.resolve(__dirname,'../src/client/scripts/client.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader!jsx-loader?harmony'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};