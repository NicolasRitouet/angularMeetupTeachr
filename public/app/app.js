'use strict';

angular.module('angularmeetupteachrApp', ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'MainCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});