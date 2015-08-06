greerApp.directive('nav', function($compile, $rootScope, $state) {

    var navLink = function(scope, element, attrs) {

        $rootScope.$on('$stateChangeSuccess', function(e, toState) {

            var s = toState.name;
            var n = s.indexOf('.');
            s = s.substring(0, n!=-1?n: s.length);
            scope.currentPage = s;

        });
        scope.currentPage = $state;
        scope.bkgWrapper = angular.element('<div class="nav-bkg-wrapper" ng-click="closeMenu()"></div>')
        scope.menu = angular.element('<ul class="nav-menu">\n    <li ui-sref="home" ng-click="closeMenu()" ng-class="{isActive: currentPage==\'home\'}">HOME</li>\n    <li ui-sref="properties" ng-click="closeMenu()" ng-class="{isActive: currentPage==\'properties\'}">PROPERTIES</li>\n    <!--<li ui-sref="team" ng-click="closeMenu()" ng-class="{isActive: currentPage==\'team\'}">TEAM</li>-->\n    <li ui-sref="contact" ng-click="closeMenu()" ng-class="{isActive: currentPage==\'contact\'}">CONTACT</li>\n</ul>')
        element.append($compile(scope.bkgWrapper)(scope));
        element.append($compile(scope.menu)(scope));

        Velocity(scope.menu, {
            translateX: 300
        }, {
            duration: 0
        });

        scope.toggleMenu = function() {
            if (element.hasClass('isOpen')) {
                scope.closeMenu();
            } else {
                scope.openMenu();
            }
        };

        scope.closeMenu = function() {
            element.removeClass('isOpen');
            Velocity(scope.bkgWrapper, 'stop');
            Velocity(scope.menu, 'stop');
            Velocity(scope.bkgWrapper, {
                opacity: 0
            }, {
                display: 'none'
            });
            Velocity(scope.menu, {
                translateX: 300
            })
        };

        scope.openMenu = function() {
            element.addClass('isOpen');
            Velocity(scope.bkgWrapper, 'stop');
            Velocity(scope.menu, 'stop');
            Velocity(scope.bkgWrapper, {
                opacity: 1
            }, {
                display: 'block'
            });
            Velocity(scope.menu, {
                translateX: 0
            }, {
                display: 'block'
            })
        }

    };

    return {
        restrict: 'A',
        replace: true,
        templateUrl: '/components/nav/nav.html',
        link: navLink
    }
});