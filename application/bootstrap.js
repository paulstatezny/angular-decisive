var angular = require('angular');

var app = angular.module('app', []);

app.controller('MathController', ['$scope', function ($scope) {
    $scope.setAdjective = function (adjective) {
        $scope.adjective = adjective;
    };

    $scope.adjective = 'boring';
    $scope.name = 'Paul';
}]);

app.controller('FooController', ['$scope', function ($scope) {
    $scope.adjective = 'Woot';
}]);

app.controller('BarController', ['$scope', function ($scope) {
    $scope.name = 'Hahaha';
}]);
