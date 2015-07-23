var angular = require('angular')
var homeCtrl = require('./js/home.js')

var app = angular.module('corpse', [require('angular-ui-router')])

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({enabled: true, requireBase: false})
    console.log('$stateProvider', $stateProvider)
    console.log('$urlRouterProvider', $urlRouterProvider)
    console.log('control', homeCtrl.control)
    $stateProvider
        .state('home', {url: '/', templateUrl: '/public/html/home.html', controller: homeCtrl.control, controllerAs: 'vm'})
})
