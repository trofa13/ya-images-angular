module.exports = function(yaImages) {
    yaImages.controller('searchPageCtrl', function($rootScope, $scope, $location, queryModel) {
        $scope.query = '';


        $scope.showResults = function(query){
            queryModel.search(query);
            $scope.query = '';
            $location.path('/images/');
        };

        $scope.queryHistory = (function(){
            var keys = Object.keys(localStorage),
                i = keys.length,
                result = [];
            while (i--){
                var query = keys[i].split('-')[1];
                result.push(query)
            }
            return result;

        })();

        function getAllStorage() {

            var archive = {}, 
                keys = Object.keys(localStorage),
                i = keys.length;

            while ( i-- ) {
                archive[ keys[i] ] = localStorage.getItem( keys[i] );
            }
            console.log(archive)
            return archive;
        }
    });
};