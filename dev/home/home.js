greerApp.config(function($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/home/home.html',
            controller: homeCtrl
        });
});

var homeCtrl = function($scope) {

};