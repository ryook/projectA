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
      .when('/aggregate_map', {
        templateUrl: 'views/map/aggregate_map.html',
        controller: 'AgmapController'})
      .when('/personal_map/:personal_id', {
        templateUrl: 'views/map/personal_map.html',
        controller: 'PmapController'})
      .otherwise({redirectTo: '/'});
  }]);
