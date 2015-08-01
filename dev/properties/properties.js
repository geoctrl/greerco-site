greerApp.config(function($stateProvider) {
    $stateProvider
        .state('properties', {
            url: '/properties',
            templateUrl: '/properties/properties.html',
            controller: propertiesCtrl
        });
});

var propertiesCtrl = function($scope) {

};