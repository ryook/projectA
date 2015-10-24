var avApp = angular.module("avApp", []);

avApp.controller("mainCtrl", ["$scope", function($scope){

	var wordFe = word_Data;
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
	var wordList = [];
	$scope.changeItem = function(){
		var selected = $scope.selectedItem;
		console.log(selected);
		for (var i=0; i < cluNum.length; i++){
			if (selected == cluNum[i]["cluster"]){
				imageList.push(cluNum[i]["img"]);
			}
		}
		$scope.imageList = imageList;

		for (var j=0; j < wordFe.length; j++){
			if(selected == wordFe[j]["cluster"]){
				wordList.push(wordFe[j]["word"]);
			}
		}
		$scope.wordList = wordList.slice(0,300);


		console.log(imageList);
		console.log(wordList);
		imageList = [];
		wordList = [];
	};
}]);
