module.exports = function(yaImages) {
    yaImages.controller('searchPageCtrl', function($rootScope, $scope, $location, queryModel) {
        $scope.query = '';


        $scope.showResults = function(query){
            $scope.query = '';
            $location.path('/images/' + encodeURIComponent(query));
        };

        $scope.queryHistory = JSON.parse(localStorage.getItem('responses'));

        

    });
};