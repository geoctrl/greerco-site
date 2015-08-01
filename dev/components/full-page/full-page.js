greerApp.directive('fullPage', function($window) {

    var fullPageCtrl = function($scope, $element) {
        var resize = function() {
            $scope.pageHeight = $scope.pageHeight?$scope.pageHeight:0;
            $element[0].style.height = $window.innerHeight>$scope.pageHeight?
                $window.innerHeight+'px':$scope.pageHeight+'px';
        };

        var init = function() {
            resize();
        };

        angular.element($window).bind('resize', function() {debounceResize()});
        var debounceResize = appHelpers.debounce(resize, 300);

        init();
    };

    return {
        restrict: 'A',
        scope: {
            pageHeight: '@'
        },
        controller: fullPageCtrl
    }
});