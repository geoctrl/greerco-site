greerApp.config(function($stateProvider) {
    $stateProvider
        .state('properties', {
            url: '/properties',
            templateUrl: '/properties/properties.html',
            controller: propertiesCtrl
        });
});

var propertiesCtrl = function($scope) {
    $scope.images = [
        '/img/properties-fade/3.5.jpg',
        '/img/properties-fade/2.jpg',
        '/img/properties-fade/IMG_2752.jpg',
        '/img/properties-fade/IMG_2498.jpg',
        '/img/properties-fade/IMG_2740.jpg',
        '/img/properties-fade/5.jpg',
        '/img/properties-fade/6.jpg',
        '/img/properties-fade/7.jpg'
    ]
};