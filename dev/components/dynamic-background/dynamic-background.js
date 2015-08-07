greerApp.directive('backgroundImage', function() {

    var backgroundImageLink = function(scope, element, attrs) {
        element[0].style.backgroundImage = 'url("/img/'+attrs.backgroundImage+'")';
    };

    return {
        restrict: 'A',
        link: backgroundImageLink
    }
});