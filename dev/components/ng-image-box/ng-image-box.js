angular.module('ngImageBox', [])

    .directive('imageBox', function($compile, $document) {

        var imageBoxCtrl = function($scope, $element) {
            var $body = $document.find('body'),
                backDrop = angular.element('<div class="image-box-backdrop"></div>'),
                imageOne = angular.element('<img class="image-box-one" src="">'),
                imageTwo = angular.element('<img class="image-box-two" src="">');

            $compile(backDrop)($scope);
            $compile(imageOne)($scope);
            $compile(imageOne)($scope);

            $body.append(backDrop);
            $body.append(imageOne);
            $body.append(imageTwo);


            for (var i=0;i<$scope.imageBox.length;i++) {

            }

            $scope.openImageBox = function(index) {
                console.log(index);
            };

            var control = {

            }
        };

        return {
            restrict: 'A',
            scope: {
                imageBox: '='
            },
            controller: imageBoxCtrl
        }
    });