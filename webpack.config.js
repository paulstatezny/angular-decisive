var Webpack           = require('webpack');
var HtmlWebpack       = require('html-webpack-plugin');
var path              = require('path');

var npmPath = path.resolve(__dirname, 'node_modules');

module.exports = {
    name   : 'Decisive Browser Bundle',
    entry  : ['./application/bootstrap.js'],
    output : {
        filename   : 'app.js',
        path       : path.resolve(__dirname, 'build'),
        publicPath : '/'
    },
    module : {
        loaders : [
            {
                test    : /\.js$/,
                loaders : ['babel'],
                exclude : npmPath
            }
        ]
    },
    plugins : [
        new HtmlWebpack({template : './application/index.html'}),
        new Webpack.HotModuleReplacementPlugin()
    ],
    resolve : {
        extensions : ['', '.css', '.js', '.json', '.jsx']
    },
    devtool : '#inline-source-map',
    jshint  : {
        esnext       : false,
        globalstrict : true,
        globals      : {
            console : true,
            window  : true,
            angular : true
        }
    }
};
