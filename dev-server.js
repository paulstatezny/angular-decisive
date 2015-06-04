var path             = require('path');
var request          = require('request');
var WebpackDevServer = require('webpack-dev-server');
var webpack          = require('webpack');
var config           = require('./webpack.config');

var server = new WebpackDevServer(webpack(config), {
    contentBase : path.resolve(__dirname, 'build'),
    hot         : true,
    noInfo      : true
});

server.listen(9000, function (err, result) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:9000');
});
