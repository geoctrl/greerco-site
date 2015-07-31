greerApp.directive('fullPage', function($window) {

    var fullPageCtrl = function($scope, $element) {
        var minHeight = 700;
        var resize = function() {
            $element[0].style.height = $window.innerHeight>minHeight?
                $window.innerHeight+'px':minHeight+'px';
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
        controller: fullPageCtrl
    }
});