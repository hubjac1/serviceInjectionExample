# Service injection dependency

This project is a small example of a factory design pattern for service in angular 1.4.

## use case example

From a controller we want the same service accessing different resource according the context.

```javascript
angular.module('myApp')
  .controller('MainCtrl',['$scope','myServiceProvider', function ($scope, myServiceProvider) {
    var rightService = myServiceProvider.getService();
    $scope.message = rightService.getMessage();
  }]);
```

In this case myServiceProvider is responsible to provide the right service.
We can use $location to get context information.

```javascript
angular.module('myApp')
  .service('myServiceProvider', [ 'oneService', 'anotherService', '$location', function (oneService, anotherService, $location) {
    return {
      getService: function getService(){
        if ($location.path().contains('oneway'))
          return oneService;
        else
          return  anotherService;
      }
    };
  }]);
```

## Working example

Run `grunt` for building and `grunt serve` for preview.

