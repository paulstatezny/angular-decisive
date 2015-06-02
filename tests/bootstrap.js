describe('MathController', function () {
    beforeEach(module('app'));

    var $controller;

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    describe('$scope.setAdjective', function () {
        it('sets the adjective to the argument', function () {
            var controller = $controller('MathController', {scope : $scope});

            $scope.adjective = 'old';

            $scope.setAdjective('new');

            expect($scope.adjective).toEqual('new');
        });
    });
});
