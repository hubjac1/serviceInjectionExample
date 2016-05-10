'use strict';

/**
 * @ngdoc overview
 * @name depInjectionExampleApp
 * @description
 * # depInjectionExampleApp
 *
 * Main module of the application.
 */
angular
  .module('depInjectionExampleApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/oneway', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
