greerApp.directive('nav', function($compile) {

    var navLink = function(scope, element, attrs) {
        scope.bkgWrapper = angular.element('<div class="nav-bkg-wrapper" ng-click="toggleMenu()"></div>')
        element.append($compile(scope.bkgWrapper)(scope));

        scope.toggleMenu = function() {
            console.log('hey')
        }

    };

    return {
        restrict: 'A',
        replace: true,
        templateUrl: '/components/nav/nav.html',
        link: navLink
    }
});