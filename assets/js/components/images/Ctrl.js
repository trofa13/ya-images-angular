module.exports = function(yaImages) {
    yaImages.controller('imagesCtrl', function($rootScope, $scope, queryModel, sizeModel, $routeParams) {

 
        queryModel.search(decodeURIComponent($routeParams.query)).then(function(response){
            $scope.response = response;
        });


        $scope.$watch('sizeModel.sizes', function(){
            $scope.sizes = sizeModel.sizes;
        });
    });
};