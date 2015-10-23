var avApp = angular.module("avApp", ["ngResource"]);

avApp.controller("mainCtrl", ["$scope", "$resource", function($scope, $resource){
	//var avData = $resource("data.json");
	//clu_Data = avData.query();
	var cluNum = data;
	var numbclu = {};

//クラスタ番号のみ抽出
	for(var i = 0; i < cluNum.length; i++){
		numbclu[cluNum[i]["cluster"]] = cluNum[i];
	}

	numbClu =[];

	for(var key in numbclu){
		numbClu.push(numbclu[key]);
	}

	onlynum = [];
	for (key in numbClu){
		onlynum.push(numbClu[key].cluster);
	}

	$scope.reviewData = onlynum;
	$scope.selectedItem = null;
	var imageList = [];
	$scope.changeItem = function(){
		var selected = $scope.selectedItem;
		console.log(selected);
		for (var i=0; i < cluNum.length; i++){
			if (selected == cluNum[i]["cluster"]){
				imageList.push(cluNum[i]["img"]);
			}
		}
		console.log(imageList);
		imageList = [];
	};

	console.log(onlynum);

	var option = document.myForm.mySelect.options;



//画像読み込み部分適当に書いただけ
	$scope.click = function(){
		
	};
}]);
