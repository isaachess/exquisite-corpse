var angular = require('angular')
var homeCtrl = require('./js/home.js')
var drawCtrl = require('./js/draw.js')

// Directives
var drawCanvas = require('./js/directives/draw-canvas.js')
var canvasArea = require('./js/directives/canvas-area.js')

var app = angular.module('corpse', [require('angular-ui-router')])

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({enabled: true, requireBase: false})
    $stateProvider
        .state('home', {url: '/', templateUrl: '/html/home.html', controller: homeCtrl.Control, controllerAs: 'vm'})
        .state('draw', {url: '/draw', templateUrl: '/html/draw.html', controller: drawCtrl.Control, controllerAs: 'vm'})
})

.directive('drawCanvas', drawCanvas.main)
.directive('canvasArea', canvasArea.main)
