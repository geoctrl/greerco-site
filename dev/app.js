var greerApp = angular.module('greerApp', [
    'ui.router'
])

    .config(function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    });