angular.module('newmanium', [])

.directive('threeFeatures', [function(){
    return {
        templateUrl: 'themes/Newmanium/partials/three-features.html',
        link: function(scope, elm, attrs){
            elm.removeAttr('three-features');
        }
    };
}])

.directive('featureGallery', [function(){
    return {
        templateUrl: 'themes/Newmanium/partials/feature-gallery.html',
        link: function(scope, elm, attrs){
            elm.removeAttr('feature-gallery');
        }
    };
}]);