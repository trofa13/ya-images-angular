'use strict';

const angular = require('angular');
                require('angular-sanitize');
                require('angular-route');
                require('angular-resource');


const yaImages = angular.module('yaImages', [
    'ngRoute'
]);

yaImages.modules = [
    'searchPage'
];

module.exports = yaImages;