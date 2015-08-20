greerApp.directive('imageTransition', function($interval, $compile, $rootScope) {

    var imageTransitionCtrl = function($scope, $element) {
        $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState) {
            self.stopInterval();
        });

        var self = this;
        var imageElements = [];
        var imageTemplate = angular.element('<div class="image-slide"></div>')
        var buttonNavLeft = angular.element('<div class="property-btn property-btn-left"><i class="gi gi-keyboard_arrow_left"></i></div>')
        var buttonNavRight = angular.element('<div class="property-btn property-btn-right"><i class="gi gi-keyboard_arrow_right"></i></div>')
        var darkenImage = angular.element('<div class="darken-images"></div>');
        var currentIndex = 0;
        this.interval = '';
        this.images = $scope.images;


        this.init = function() {
            angular.forEach($scope.images, function(imageUrl, key) {
                var newImage = imageTemplate.clone();
                newImage[0].style.backgroundImage = "url('"+imageUrl+"')";
                if (currentIndex==key) {
                    newImage[0].style.opacity = 1;
                }
                imageElements[key] = {
                    imageUrl: imageUrl,
                    element: $compile(newImage)($scope)
                };
                $element.append(newImage);
            });

            $compile(buttonNavLeft)($scope);
            $compile(buttonNavRight)($scope);
            $element.append(darkenImage);
            $element.append(buttonNavRight);
            $element.append(buttonNavLeft);

            // start interval
            this.startInterval();
        };

        this.startInterval = function() {
            self.interval = $interval(function() {
                self.nextImage();
            }, 6000);
        };

        this.nextImage = function() {

            Velocity(imageElements[currentIndex].element, 'stop');

            // remove current element
            Velocity(imageElements[currentIndex].element, {
                opacity: 0
            }, {
                duration: 1000
            });

            // update index
            currentIndex = getNextIndex(currentIndex);

            Velocity(imageElements[currentIndex].element, 'stop');

            // show new current element
            Velocity(imageElements[currentIndex].element, {
                opacity: 1
            }, {
                duration: 1000
            });
        };

        this.previousImage = function() {
            Velocity(imageElements[currentIndex].element, 'stop');

            // remove current element
            Velocity(imageElements[currentIndex].element, {
                opacity: 0
            }, {
                duration: 1000
            });

            // update index
            currentIndex = getPreviousIndex(currentIndex);

            Velocity(imageElements[currentIndex].element, 'stop');

            // show new current element
            Velocity(imageElements[currentIndex].element, {
                opacity: 1
            }, {
                duration: 1000
            });
        };

        $element.on('mouseover', function() {
            self.stopInterval();
        });

        $element.on('mouseleave', function() {
            self.startInterval();
        });

        buttonNavLeft.on('click', function() {
            self.previousImage();
        });

        buttonNavRight.on('click', function() {
            self.nextImage();
        });

        var loadNextImage = function() {
        };

        var getNextIndex = function(index) {
            return index+1>self.images.length-1?0:index+1;
        };

        var getPreviousIndex = function(index) {
            return index==0?self.images.length-1:index-1;
        };

        this.stopInterval = function() {
            $interval.cancel(self.interval);
        };

        this.init();
    };

    return {
        restrict: 'E',
        replace: true,
        template: '<div class="page-image"></div>',
        scope: {
            images: '='
        },
        controller: imageTransitionCtrl
    }
});