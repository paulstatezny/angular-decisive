var angular = require('angular');

var app = angular.module('app', []);

app.controller('GreetingController', ['$scope', function ($scope) {
    $scope.greeting = 'Hola!';
}]);
