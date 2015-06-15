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

    $scope.deleteGrid = function (index) {
        if (! window.confirm('Are you sure you want to delete this grid?')) {
            return;
        }

        if ($scope.selectedGrid === index) {
            $scope.selectedGrid = 0;
        }

        $scope.$storage.grids.splice(index, 1);
    };

    $scope.addGrid = function () {
        var name = window.prompt('Enter the name of the grid');

        if (! name) {
            return;
        }

        $scope.$storage.grids.push({
            name  : name,
            tasks : {
                do       : [],
                plan     : [],
                delegate : [],
                delay    : []
            }
        });
    };
}]);

app.controller('Grid', ['$scope', function ($scope) {
    $scope.grids = $scope.$storage.grids;

    $scope.hint  = {
        do       : 'Do these things now.',
        plan     : 'Plan a time to do these later.',
        delegate : 'Is someone else available to do these?',
        delay    : 'Save these tasks for your free time.'
    };

    $scope.newTask = {
        do       : '',
        plan     : '',
        delegate : '',
        delay    : ''
    };

    $scope.addTask = function (taskType) {
        $scope.grids[$scope.selectedGrid].tasks[taskType].push({
            task      : $scope.newTask[taskType],
            completed : false
        });

        $scope.newTask[taskType] = '';
    };

    $scope.deleteTask = function (taskType, index) {
        $scope.grids[$scope.selectedGrid].tasks[taskType].splice(index, 1);
    };
}]);
