angular.module('gron', ['ngRoute'],
  function($routeProvider){
    $routeProvider.when('/',{
      templateUrl : 'view/test.html',
      controller : 'test'
    });
  })
