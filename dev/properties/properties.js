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
        '/img/properties-fade/IMG_2501.jpg',
        '/img/properties-fade/IMG_2498.jpg',
        '/img/properties-fade/IMG_2595.jpg',
        '/img/properties-fade/IMG_2602.jpg',
        '/img/properties-fade/IMG_2654.jpg',
        '/img/properties-fade/IMG_2662.jpg',
        '/img/properties-fade/IMG_2740.jpg',
        '/img/properties-fade/IMG_2752.jpg',
        '/img/properties-fade/IMG_2757.jpg',
        '/img/properties-fade/IMG_2771.jpg',
        '/img/properties-fade/IMG_2786.jpg',
        '/img/properties-fade/IMG_2801.jpg',
        '/img/properties-fade/IMG_2835.jpg',
        '/img/properties-fade/IMG_2844.jpg',
        '/img/properties-fade/IMG_2847.jpg',
        '/img/properties-fade/IMG_2857.jpg',
        '/img/properties-fade/IMG_2860.jpg',
        '/img/properties-fade/IMG_2865.jpg',
        '/img/properties-fade/IMG_2873.jpg',
        '/img/properties-fade/IMG_2896.jpg',
        '/img/properties-fade/IMG_2913.jpg',
        '/img/properties-fade/IMG_2943.jpg',
        '/img/properties-fade/IMG_2947.jpg',
        '/img/properties-fade/IMG_2949.jpg'
    ]
};