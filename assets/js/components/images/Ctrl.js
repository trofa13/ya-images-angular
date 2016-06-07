module.exports = function(yaImages) {
    yaImages.controller('imagesCtrl', function($rootScope, $scope, queryModel, sizeModel, $routeParams) {
 
        $scope.response = queryModel.search(decodeURIComponent($routeParams.query));

        $scope.$watch('sizeModel.sizes', function(){
            $scope.sizes = sizeModel.sizes;
        })
    });
};