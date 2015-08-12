greerApp.directive('imageTransition', function($interval, $compile, $rootScope) {

    var imageTransitionCtrl = function($scope, $element) {
        $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState) {
            self.stopInterval();
        });

        var self = this;
        var overlayImage = angular.element('<div class="page-image-overlay"></div>');
        var currentIndex = 0;
        var intervalCount = 0;
        this.interval = '';
        this.images = $scope.images;

        this.init = function() {
            $compile(overlayImage)($scope);
            $element.append(overlayImage);
            overlayImage[0].style.opacity = 0;
            this.nextImage(intervalCount, true);
            self.interval = $interval(function() {
                self.nextImage(intervalCount, null);
                intervalCount++;
            }, 7000);
        };

        this.nextImage = function(interval, random) {
            if (random) {
                currentIndex = 0;
                $element[0].style.backgroundImage = "url('"+self.images[currentIndex]+"')";
            } else {
                if (interval%2) {
                    $element[0].style.backgroundImage = "url('"+self.images[currentIndex]+"')";
                } else {
                    overlayImage[0].style.backgroundImage = "url('"+self.images[currentIndex]+"')";
                }
                toggleFadeOverlay();
            }
            currentIndex = getNextIndex(currentIndex);
        };

        var toggleFadeOverlay = function() {
            if (overlayImage.hasClass('isActive')) {
                overlayImage.removeClass('isActive');
                Velocity(overlayImage, {
                    opacity: 0
                }, {
                    duration: 1500
                })
            } else {
                overlayImage.addClass('isActive');
                Velocity(overlayImage, {
                    opacity: 1
                }, {
                    duration: 1500
                })
            }
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