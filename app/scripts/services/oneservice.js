'use strict';

/**
 * @ngdoc service
 * @name depInjectionExampleApp.oneService
 * @description
 * # oneService
 * Service in the depInjectionExampleApp.
 */
angular.module('depInjectionExampleApp')
  .service('oneService', function () {
    var getMessage = function(){return 'message from one service'};
    return {
      getMessage: getMessage
    }
  });
