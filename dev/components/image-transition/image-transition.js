greerApp.directive('imageTransition', function($interval, $compile, $rootScope) {

    var imageTransitionCtrl = function($scope, $element) {
        $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState) {
            self.stopInterval();
        });

        var self = this;
        var overlayImage = angular.element('<div class="page-image-overlay"></div>');
        var buttonNavLeft = angular.element('<div class="property-btn property-btn-left"><i class="gi gi-keyboard_arrow_left"></i></div>')
        var buttonNavRight = angular.element('<div class="property-btn property-btn-right"><i class="gi gi-keyboard_arrow_right"></i></div>')
        var darkenImage = angular.element('<div class="darken-images"></div>');
        var currentIndex = 0;
        var intervalCount = 0;
        this.interval = '';
        this.images = $scope.images;

        this.init = function() {
            $compile(overlayImage)($scope);
            $compile(buttonNavLeft)($scope);
            $compile(buttonNavRight)($scope);
            $element.append(overlayImage);
            $element.append(darkenImage);
            //$element.append(buttonNavRight);
            //$element.append(buttonNavLeft);
            overlayImage[0].style.opacity = 0;

            $element[0].style.backgroundImage = "url('"+self.images[currentIndex]+"')";
            overlayImage[0].style.backgroundImage = "url('"+self.images[getNextIndex(currentIndex)]+"')";
            currentIndex = getNextIndex(currentIndex);

            // set up images
            this.startInterval();
        };

        this.startInterval = function() {
            self.interval = $interval(function() {
                self.nextImage();
                intervalCount++;
            }, 6000);
        };

        this.nextImage = function() {
            if (overlayImage.hasClass('isActive')) {
                overlayImage.removeClass('isActive');
                Velocity(overlayImage, {
                    opacity: 0
                }, {
                    duration: 1000,
                    complete: function() {
                        loadNextImage()
                    }
                })
            } else {
                overlayImage.addClass('isActive');
                Velocity(overlayImage, {
                    opacity: 1
                }, {
                    duration: 1000,
                    complete: function() {
                        loadNextImage()
                    }
                })
            }
        };

        //$element.on('mouseover', function() {
        //    self.stopInterval();
        //});
        //
        //$element.on('mouseleave', function() {
        //    self.startInterval();
        //});

        buttonNavLeft.on('click', function() {

        });

        buttonNavRight.on('click', function() {
            self.nextImage();
            intervalCount++;
        });

        var loadNextImage = function() {
            if (intervalCount%2) {
                $element[0].style.backgroundImage = "url('"+self.images[getNextIndex(currentIndex)]+"')";
            } else {
                overlayImage[0].style.backgroundImage = "url('"+self.images[getNextIndex(currentIndex)]+"')";
            }
            currentIndex = getNextIndex(currentIndex);
        };

        var getNextIndex = function(currentIndex) {
            return currentIndex+1>self.images.length-1?0:currentIndex+1;
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