'use strict';

/**
 * @ngdoc function
 * @name depInjectionExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the depInjectionExampleApp
 */
angular.module('depInjectionExampleApp')
  .controller('MainCtrl',['$scope','myServiceProvider', function ($scope, myServiceProvider) {
    var rightService = myServiceProvider.getService();
    $scope.message = rightService.getMessage();
  }]);
