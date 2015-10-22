var avApp = angular.module("avApp", ["ngResource"]);

avApp.controller("mainCtrl", ["$scope", "$resource", function($scope, $resource){
	var avData = $resource("data.json");
	$scope.reviewData = avData.query();
	/*var arrobj = {};

	for(var i=0; i < reviewData.length; i++){
		arrobj[reviewData[i]['cluster']] = reviewData[1];
	}

	newData = [];

	for(var key in arrobj){
		newData.push(arrobj[key]);
	}*/

//画像読み込み部分適当に書いただけ
	$scope.click = function(){
		$scope.getImage.src = d[image];
	};
}]);
