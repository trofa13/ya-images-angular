module.exports = function(yaImages) {
    yaImages.controller('imagesCtrl', function($rootScope, $scope, $http, queryModel, sizeModel) {
        
        $scope.$watch('sizeModel.sizes', function(){
            $scope.sizes = sizeModel.sizes;
        })
        

        $scope.$watch('queryModel.response', function(){
            $scope.response = queryModel.get();
        });

    });
};