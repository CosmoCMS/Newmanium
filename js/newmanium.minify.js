angular.module('newmanium', [])

.directive('threeFeatures', [function(){
    return {
        templateUrl: 'themes/Newmanium/partials/three-features.html',
        link: function(scope, elm, attrs){
            elm.after('<br />');
            elm.removeAttr('three-features');
        }
    };
}])

.directive('featureGallery', ['Page', function(Page){
    return {
        templateUrl: 'themes/Newmanium/partials/feature-gallery.html',
        link: function(scope, elm, attrs){
            // Initialize variables
            scope.featureGallery = {};
            if(Page.extras['featuresGallery'])
                scope.features = Page.extras['featuresGallery'];
            else
                scope.features = [];
            
            // Add a new feature window
            scope.addFeature = function(){
                scope.features.push({button: 'Button'});
                Page.extras['featuresGallery'] = scope.features;
            };
        }
    };
}]);