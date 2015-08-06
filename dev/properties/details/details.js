greerApp.config(function($stateProvider) {
    $stateProvider
        .state('properties.starMill', {
            url: '/star-mill',
            views: {
                'details': {
                    templateUrl: '/properties/details/star-mill.html',
                    controller: detailsCtrl
                }
            }
        });
});

var detailsCtrl = function($scope, $state) {

};