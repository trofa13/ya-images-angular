module.exports = function(yaImages) {
    yaImages.controller('searchPageCtrl', function($rootScope, $scope, $location, queryModel) {
        $scope.query = '';


        $scope.showResults = function(query){
            $scope.query = '';
            $location.path('/images/' + encodeURIComponent(query));
        };

        $scope.queryHistory = (function(){
            var keys = Object.keys(localStorage),
                i = keys.length,
                result = [];
            while (i--){
                var query = keys[i].split('-')[1];
                result.push(query);
            }
            return result;
        })();
    });
};