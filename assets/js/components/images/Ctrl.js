module.exports = function(yaImages) {
    yaImages.controller('imagesCtrl', function($rootScope, $scope, imagesModel, sizeModel, $routeParams) {
        var self = this;

 
        imagesModel.search(decodeURIComponent($routeParams.query)).then(function(response){
            self.response = response;
        });


        $scope.$watch('sizeModel.sizes', function(){
            self.sizes = sizeModel.sizes;
        });
    });
};