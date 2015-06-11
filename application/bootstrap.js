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
        controller : 'Grid'
    };
});

app.controller('Application', ['$scope', '$localStorage', function ($scope, $localStorage) {
    $scope.$storage     = $localStorage;
    $scope.selectedGrid = 0;
}]);

app.controller('Sidebar', ['$scope', function ($scope) {
    $scope.selectGrid = function (grid) {
        $scope.selectedGrid = grid;
    };
}]);

app.controller('Grid', ['$scope', function ($scope) {
    $scope.grid = $scope.$storage.grids[$scope.selectedGrid];
}]);
