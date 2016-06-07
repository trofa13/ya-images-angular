module.exports = function(yaImages, template) {
	yaImages.component('images', {
		bindings: {},
		template: template,
		controller: 'TabCtrl',
		replace: true
	});
};