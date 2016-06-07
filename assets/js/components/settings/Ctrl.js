module.exports = function(yaImages) {
    yaImages.controller('settingsCtrl', function($rootScope, $scope, sizeModel) {
        $scope.imageSize = sizeModel.imageSize;

        $scope.changeSize = function(size){
            sizeModel.changeSize(size);
        }
        


    });
};