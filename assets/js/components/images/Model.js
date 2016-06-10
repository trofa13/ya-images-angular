module.exports = function(yaImages) {
	yaImages.factory('imagesModel', function($q, $http) {
        var service = {};

        service.search = function(query){

            return $q(function(resolve){
                $http({
                method: 'GET',
                url: 'http://localhost:3001/?search=' + query
                //url: 'https://crossorigin.me/https://yandex.ru/images/search?format=json&request=%5B%7B%22block%22%3A%22serp-controller%22%2C%22params%22%3A%7B%7D%2C%22version%22%3A2%7D%2C%7B%22block%22%3A%22serp-list_infinite_yes%22%2C%22params%22%3A%7B%7D%2C%22version%22%3A2%7D%2C%7B%22block%22%3A%22more_direction_next%22%2C%22params%22%3A%7B%7D%2C%22version%22%3A2%7D%2C%7B%22block%22%3A%22gallery__items%3Aajax%22%2C%22params%22%3A%7B%7D%2C%22version%22%3A2%7D%5D&p=1&text=' + query
            }).then(function successCallback(response){
                    var result = JSON.stringify(response.data).match(/"img_href\\":\\".+?"/g),
                        finalResult = [];

                    for (let i=0; i < result.length; i++){
                        if(result[i].match(/http.+.jpg/) !== null){
                            finalResult.push(result[i].match(/http.+.jpg/)[0]);
                        }
                    }

                    var lsItem = [];
                    if (localStorage.getItem('responses')){

                        var lsArr = JSON.parse(localStorage.getItem('responses'));
                        
                        //Check if current query is already in the LocalStorage
                        if (lsArr.indexOf(query) !== -1){
                            lsItem = lsArr;
                        } else {
                            lsItem = lsArr;
                            lsItem.push(query);
                        }

                    } else {
                        lsItem.push(query);
                    }
                    
                    localStorage.setItem('responses',  JSON.stringify(lsItem));

                    resolve(finalResult);
                }, function errorCallback (response){
                    console.warn('Error: ', response);
                });
            })
        };

        return service;
	});
};