greerApp.directive('nav', function() {

    var navLink = function(scope, element, attrs) {

    };

    return {
        restrict: 'A',
        replace: true,
        templateUrl: '/components/nav/nav.html',
        link: navLink
    }
});