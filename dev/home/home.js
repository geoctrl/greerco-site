greerApp.config(function($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/home/home.html',
            controller: homeCtrl
        });
});

var homeCtrl = function($scope) {
    $scope.images = [
        '/img/home-bkg-1.jpg',
        '/img/home-bkg-2.jpg',
        '/img/home-bkg-3.jpg',
        '/img/home-bkg-4.jpg'
    ];
};