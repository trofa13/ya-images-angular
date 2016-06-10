module.exports = function(yaImages) {
    yaImages.controller('settingsCtrl', function($rootScope, $scope, sizeModel, $location) {
        this.imageSize = sizeModel.imageSize;

        this.changeSize = function(size){
            sizeModel.changeSize(size);
            $location.path('/');
        }
        
    });
};