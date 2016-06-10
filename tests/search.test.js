describe('Search', function(){
  
 beforeEach(angular.mock.module('yaImages'));

    describe('queryModel', function(){

     /*   var queryModel;
        beforeEach(inject(function(_queryModel_){
            queryModel = _queryModel_;
        }));
    
*/
        it('exists', inject(function(queryModel) {
            expect(queryModel).toBeDefined();
        }));

    });




    describe('sizeModel', function(){

        it('exists', inject(function(sizeModel) {
            expect(sizeModel).toBeDefined();
        }));

    });

});