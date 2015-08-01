greerApp.config(function($stateProvider) {
    $stateProvider
        .state('team', {
            url: '/team',
            templateUrl: '/team/team.html',
            controller: teamCtrl
        });
});

var teamCtrl = function($scope) {

};