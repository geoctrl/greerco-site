greerApp.config(function($stateProvider) {
    $stateProvider
        .state('properties.details', {
            url: '/:propertyName',
            views: {
                'details': {
                    templateUrl: function(params) {
                        return '/properties/details/details.html'
                    },
                    controller: detailsCtrl
                }
            }
        });
});

var detailsCtrl = function($scope, $state, PropertyService) {
    $scope.property = PropertyService.getProperty($state.params.propertyName);
};