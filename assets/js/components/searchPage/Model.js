module.exports = function(yaImages) {
	yaImages.factory('queryModel', function($http) {

	var service = {};

		service.search = function(query){
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
		}



		service.get = function() {
			return service.response;
		};

		service.set = function(tab) {
			this.active = tab;
			//debugger;
			return this.active;
		};
	return service;
	}
	

	);
};