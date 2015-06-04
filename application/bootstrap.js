require('./partials');
require('./css/app.css');

var angular = require('angular');
var app     = angular.module('app', []);

app.controller('AppController', [
    require('./controllers/app-controller')
]);

app.directive('sidebar', function () {
    return {
        templateUrl: 'partials/sidebar.html'
    };
});
