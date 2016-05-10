'use strict';

/**
 * @ngdoc service
 * @name depInjectionExampleApp.anotherService
 * @description
 * # anotherService
 * Service in the depInjectionExampleApp.
 */
angular.module('depInjectionExampleApp')
  .service('anotherService', function () {
    var getMessage = function(){return 'message from another service'};
    return {
      getMessage: getMessage
    }
  });
