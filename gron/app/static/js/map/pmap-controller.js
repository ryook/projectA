// angular.module("gron", [])
// .controller("PmapController", function($scope, $http, $window){
  // console.log("aaaaaaaaa")
  // $http({
  // 	method : 'GET',
  // 	url : 'personal/10'
  // }).success(function(data){
  //   $scope.test = data;
  // }).error(function(){
  // 	console.log("error")
  // })
// })

angular.module('gron')
  .controller('PmapController', ['$scope', function ($scope) {
    $scope.test = "aaaa"

}]);
