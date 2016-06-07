module.exports = function(yaImages) {
	yaImages.factory('sizeModel', function() {

		var service = {};

		service.imageSize = ['150x150', '200x200','300x300', '400x400', '500x500'];

		service.changeSize = function(size){
			service.sizes = size.split('x');
		};


		return service;

	});
};