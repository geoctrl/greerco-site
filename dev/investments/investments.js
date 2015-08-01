greerApp.config(function($stateProvider) {
    $stateProvider
        .state('investments', {
            url: '/investments',
            templateUrl: '/investments/investments.html',
            controller: investmentsCtrl
        });
});

var investmentsCtrl = function($scope) {

};