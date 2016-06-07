module.exports = function(yaImages) {
	yaImages.factory('queryModel', function($http) {

	var service = {};

/*		service.search = function(query){
			if (localStorage.getItem('response-' + query)){
				console.log('query already have been done');
				service.response = JSON.parse(localStorage.getItem('response-' + query));
			} else {
				$http({
					method: 'GET',
					url: './api/response.json'
				}).then(function successCallback(response) {
						handleResponse(response.data);
						localStorage.setItem('response-' + query,  JSON.stringify(response.data));
					}, function errorCallback(response) {
						console.warn('Error:', response);
				});

				function handleResponse(data){
					service.response = data;
				}
			}
		}*/


		//decodeUriComponent
		service.search = function(query){

			if (localStorage.getItem('response-' + query)){
				console.log('query already have been done');

				service.response = JSON.parse(localStorage.getItem('response-' + query));
			} else {
				$http({
					method: 'GET',
					url: 'http://localhost:3001/?search=' + query
					//url: 'https://crossorigin.me/https://yandex.ru/images/search?format=json&request=%5B%7B%22block%22%3A%22serp-controller%22%2C%22params%22%3A%7B%7D%2C%22version%22%3A2%7D%2C%7B%22block%22%3A%22serp-list_infinite_yes%22%2C%22params%22%3A%7B%7D%2C%22version%22%3A2%7D%2C%7B%22block%22%3A%22more_direction_next%22%2C%22params%22%3A%7B%7D%2C%22version%22%3A2%7D%2C%7B%22block%22%3A%22gallery__items%3Aajax%22%2C%22params%22%3A%7B%7D%2C%22version%22%3A2%7D%5D&p=1&text=' + query
				}).then(function successCallback(response){
						var result = JSON.stringify(response.data).match(/"img_href\\":\\".+?"/g),
							finalResult = [];

						for (var i=0; i < result.length; i++){
							if(result[i].match(/http.+.jpg/) !== null){
								finalResult.push(result[i].match(/http.+.jpg/)[0]);
							}
						}
						service.response = finalResult;
						localStorage.setItem('response-' + query,  JSON.stringify(finalResult));


					}, function errorCallback (response){
						console.info('Error: ', response)
				})
			}
			return service.response;
		}


		service.get = function() {
			return service.response;
		};

	return service;
	});
};