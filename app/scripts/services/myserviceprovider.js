'use strict';

/**
 * @ngdoc service
 * @name depInjectionExampleApp.myServiceProvider
 * @description
 * # myServiceProvider
 * Service in the depInjectionExampleApp.
 */
angular.module('depInjectionExampleApp')
  .service('myServiceProvider', [ 'oneService', 'anotherService', '$location', function (oneService, anotherService, $location) {

    function getService(){
      if ($location.path().contains('oneway'))
        return oneService;
      else{
       return  anotherService
      }
    }
    return {
      getService: getService
    }





  }]);
