'use strict';

const angular = require('angular');
                require('angular-sanitize');
                require('angular-route');
                require('angular-resource');


const yaImages = angular.module('yaImages', [
    'ngRoute'
]);

yaImages.config(function($routeProvider){
    $routeProvider
        .when('/', {
            template: require('./components/searchPage/template.html'),
            controller: 'searchPageCtrl',
            activeTab: 'searchPage'
        })
        .when('/images/', {
            template: require('./components/images/template.html'),
            controller: 'imagesCtrl',
            activeTab: 'images'

        })
        .when('/settings/', {
            template: require('./components/settings/template.html'),
            controller: 'settingsCtrl',
            activeTab: 'settings'
        })
        .otherwise('/')
});

yaImages.controller('mainCtrl', function($scope, $location){
        $scope.isActive = function(route) {
            return route === $location.path();
        }
})





yaImages.modules = [
    'searchPage',
    'images',
    'settings'
];

yaImages.modules.forEach((module)=> {
    connect(module);
});

function connect(module) {
    let path = './components/' + module + '/';
    require(path + 'Model')(yaImages);    // Model
    require(path + 'Ctrl')(yaImages);     // Controller
    require(path + 'styles');           // Styles
    require(path + 'Component')(        // Component
        yaImages,
        require(path + 'template.html') // Template
    );
}