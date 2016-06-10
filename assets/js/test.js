'use strict';

const angular = require('angular');
                require('angular-sanitize');
                require('angular-route');
                require('angular-resource');

const yaImages = angular.module('yaImages', [
    'ngRoute'
]);

yaImages.controller('mainCtrl', function($scope, $location){
        $scope.isActive = function(route) {
            return route === $location.path();
        };
});


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
    require(path + 'Component')(        // Component
        yaImages,
        require(path + 'template.html') // Template
    );
};