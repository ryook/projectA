// Declare app level module which depends on filters, and services
angular.module('gron', ['ngResource', 'ngRoute', 'ui.bootstrap', 'ui.date'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home/home.html',
        controller: 'HomeController'})
      .when('/gb', {
        templateUrl: 'views/GB/gb.html',
        controller: 'GBController'})
      .when('/personal_map/', {
        templateUrl: 'views/map/personal_map.html',
        controller: 'PmapController'})
      .otherwise({redirectTo: '/'});
  }]);
