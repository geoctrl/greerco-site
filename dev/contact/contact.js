greerApp.config(function($stateProvider) {
    $stateProvider
        .state('contact', {
            url: '/contact',
            templateUrl: '/contact/contact.html',
            controller: aboutCtrl
        });
});

var aboutCtrl = function($scope) {

};