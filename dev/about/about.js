greerApp.config(function($stateProvider) {
    $stateProvider
        .state('about', {
            url: '/about',
            templateUrl: '/about/about.html',
            controller: aboutCtrl
        });
});

var aboutCtrl = function($scope, $http) {

};