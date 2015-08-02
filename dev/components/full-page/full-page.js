greerApp.directive('fullPage', function($window) {

    var fullPageCtrl = function($scope, $element) {

        var navHeight = 0;

        var resize = function() {
            navHeight = getNavHeight();
            $element[0].style.height = $window.innerHeight-navHeight+'px';
        };

        var getNavHeight = function() {
            return $scope.hasNav?$window.innerWidth>768?70:50:0;
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
            hasNav: '@'
        },
        controller: fullPageCtrl
    }
});