greerApp.directive('map', function($window, $compile) {

    var mapLink = function(scope, element, attrs) {
        var currentWidth = element[0].parentElement.offsetWidth;
        var currentHeight = element[0].parentElement.offsetHeight;

        var resize = function() {
            if (currentWidth != element[0].parentElement.offsetWidth) {
                currentWidth = element[0].parentElement.offsetWidth;
                currentHeight = element[0].parentElement.offsetHeight;
                element.empty();
                var newTemplate = angular.element(buildTemplate(currentWidth, currentHeight));
                $compile(newTemplate)(scope);
                element.append(newTemplate);
            }
        };

        var init = function() {
            var newTemplate = angular.element(buildTemplate(currentWidth, currentHeight));
            $compile(newTemplate)(scope);
            element.append(newTemplate);
        };

        var buildTemplate = function(width, height) {
            return '<div style="overflow:hidden;height:'+(height-20)+'px;width:'+width+'px;max-width:100%;">\n    <div id="gmap_canvas" style="height:'+height+'px;width:'+width+'px;max-width:100%;">\n        <iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=45+E+200+N,+Alpine,+UT,+United+States&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU"></iframe>\n    </div>\n    <style>#gmap_canvas img{max-width:none!important;background:none!important}</style>\n</div>';
        };

        angular.element($window).bind('resize', function() {debounceResize()});
        var debounceResize = appHelpers.debounce(resize, 300);

        init();
    };

    return {
        restrict: 'E',
        scope: {
            hasNav: '@'
        },
        link: mapLink
    }
});

