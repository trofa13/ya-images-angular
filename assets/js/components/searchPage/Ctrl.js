module.exports = function(yaImages) {
    yaImages.controller('searchPageCtrl', function($rootScope, $scope, $location, queryModel) {
        this.query = '';


        this.showResults = function(query){
            this.query = '';
            $location.path('/images/' + encodeURIComponent(query));
        };

        this.queryHistory = JSON.parse(localStorage.getItem('responses'));
        
    });
};