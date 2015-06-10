require('./partials');
require('./css/app.css');

var angular = require('angular');
require('angular-route');

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl : 'partials/application.html'
    });

    $routeProvider.when('/secret', {
        templateUrl : 'partials/secret.html'
    });
}]);

app.directive('sidebar', function () {
    return {
        templateUrl: 'partials/sidebar.html'
    };
});

app.directive('grid', function () {
    return {
        templateUrl: 'partials/grid.html',
    };
});
