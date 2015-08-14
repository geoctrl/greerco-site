greerApp.config(function($stateProvider) {
    $stateProvider
        .state('contact', {
            url: '/contact',
            templateUrl: '/contact/contact.html',
            controller: contactCtrl
        });
});

var contactCtrl = function($scope, $http) {
    $scope.submitContactForm = function() {
        if ($scope.contact.$valid) {

            var data = {
                name: $scope.contact.name,
                email: $scope.contact.email
            };

            $http.post('email.php', data)
                .then(function() {
                    $scope.contactSuccess = true;
                }, function(data) {
                    $scope.contactSuccess = true;
                    console.log('Error', data);
                })
        } else {
            $scope.contact.name.$touched = true;
            $scope.contact.email.$touched = true;

        }
    }
};