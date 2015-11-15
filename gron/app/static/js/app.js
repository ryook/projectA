// Declare app level module which depends on filters, and services
angular.module('gron', ['ngResource', 'ngRoute', 'ui.bootstrap', 'ui.date'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home/home.html',
        controller: 'HomeController'})
        .when('/map', {
          templateUrl: 'views/map/personal_map.html',
          controller: 'PmapController'})
        .when('/gb', {
          templateUrl: 'views/GB/gb.html',
          controller: 'GBController'})
      .otherwise({redirectTo: '/'});
  }]);
