var Webpack           = require('webpack');
var HtmlWebpack       = require('html-webpack-plugin');
var path              = require('path');

var npmPath     = path.resolve(__dirname, 'node_modules');

module.exports = {
    name   : 'Decisive Browser Bundle',
    entry  : [
        './application/bootstrap.js',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:9000'
    ],
    output : {
        filename   : 'app.js',
        path       : path.resolve(__dirname, 'build'),
        publicPath : '/'
    },
    module : {
        preLoaders : [
            {
                test    : /\.js$/,
                loader  : 'jshint-loader',
                exclude : npmPath
            }
        ],
        loaders : [
            {
                test   : /\.(eot|ico|ttf|woff|woff2)$/,
                loader : 'file-loader',
                query  : {name : '[path][name].[ext]'}
            },
            {
                test    : /\.js$/,
                loaders : 'babel',
                exclude : npmPath
            },
            {
                test    : /\.(gif|jpe?g|png|svg)$/i,
                loaders : ['image?bypassOnDebug&optimizationLevel=7&interlaced=false']
            },
            {
                test    : /\.css$/,
                loaders : ['style', 'css']
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
            window  : true
        }
    }
};
