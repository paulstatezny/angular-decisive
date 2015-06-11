require('./partials');
require('./css/app.css');

var angular = require('angular');
require('angular-route');
require('ng-storage');

var app = angular.module('app', ['ngRoute', 'ngStorage']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl : 'partials/application.html',
        controller  : 'Application'
    });

    $routeProvider.when('/secret', {
        templateUrl : 'partials/secret.html'
    });
}]);

app.directive('sidebar', function () {
    return {
        templateUrl: 'partials/sidebar.html',
        controller : 'Sidebar'
    };
});

app.directive('grid', function () {
    return {
        templateUrl: 'partials/grid.html',
    };
});

app.controller('Application', ['$scope', function ($scope) {
    $scope.selectedGrid = 0;
}]);

app.controller('Sidebar', ['$scope', '$localStorage', function ($scope, $localStorage) {
    $scope.$storage = $localStorage;
}]);
