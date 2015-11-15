angular.module("gron")
.controller("GBController", ['$scope', '$http', '$window', function($scope, $http, $window){
	$scope.page = "1";
	$scope.page2 = function(){
		$scope.page = "2";
		$scope.likes = [];
	};
	$scope.page3 = function(){
		$scope.page = "3";
		$scope.click = 0;
		$scope.counter = 16 - $scope.click;
		var shuffle_data = Enumerable.From(av_data)
			.Shuffle()
			.ToArray();
		$scope.x_list = [];
		for(k=1; k<5; k++){
			for(l=1; l<5; l++){
				result_data = Enumerable.From(shuffle_data)
					.Where(function(x){
						if(x.cluster == k + "_" + l){
							return x;
						}
					})
					.ToArray();
					$scope.x_list.push(result_data.slice(0, 16));
				}
			}
		console.log($scope.x_list);
		$scope.img_list =[];
		for(i=0; i<$scope.x_list.length; i++){
			$scope.img_list.push($scope.x_list[i][$scope.click]);
		}
		$scope.select_data = Enumerable.From($scope.img_list)
			.Shuffle()
			.ToArray();
		console.log($scope.img_list);
	};

	$scope.imgclick = function(d){
		$scope.img_list = [];
		$scope.click += 1;
		$scope.counter = 16 - $scope.click;
		if($scope.click<2){
			$scope.likes.push(d);
			for(i=0; i<$scope.x_list.length; i++){
				$scope.img_list.push($scope.x_list[i][$scope.click]);
			}
			$scope.select_data = Enumerable.From($scope.img_list)
				.Shuffle()
				.ToArray();
		}else{
			$scope.likes.push(d);
			$scope.page = "4";
			like_cluster= [];
			for(h=0; h<$scope.likes.length; h++){
				like_cluster.push($scope.likes[h]["cluster"]);
			}
			count_list = [];
			count_obj ={}
			num = 0;
			for(c=1; c<5; c++){
				for(s=1; s<5; s++){
					for(t=0; t<like_cluster.length; t++){
						if(like_cluster[t] == c + "_" + s){
							num += 1;
						}
					}
					if(num !== 0){
						count_obj["cluster"] = c + "_" + s;
						count_obj["count"] = num;
						count_list.push(count_obj);
						count_obj = {}
					}
					num = 0;
				}
			}
			count_list.sort(function(a,b){
		    if(a.count > b.count) return -1;
		    if(a.count < b.count) return 1;
		    return 0;
			});
			console.log(count_list)
			$scope.count_list = count_list
			$scope.title = makeTitle(count_list[0]["cluster"])
		}

		$scope.view_personal_map = function(){
			data = {}
			data["title"] = $scope.title
			data["count"] = $scope.count_list
			data["likes"] = $scope.likes
			$http({
				method : 'POST',
				url : 'personal/post',
				data : data
			}).success(function(data){
				console.log("personal succeded")
				$location.path('/personal/'+data);
			}).error(function(){
				console.log("error")
			})
		}
	}
}]);


function getWord(c){
		word_num = {};
		word = Enumerable.From(word_data)
				.Where(function(x){
					if(x.cluster == c){
						return x;
					}
				})
				.GroupBy("$.type_w", null, "{type: $}")
				.ToArray();

		data = {}
		for(i=0; i<word.length; i++){
			word_result = Enumerable.From(word_data)
				.Shuffle()
				.Where(function(x){
					if(x.cluster == c){
						if(x.type_w == word[i]["type"]){
							return x
						}
					}
				})
				.ToArray();
				data[word[i]["type"]] = word_result[0]["word"]
		}
		return data
}

function makeTitle(c){
	data = getWord(c)
	switch(c){
		case "1_1":
			return data["2.0"] + "女の子と" + data["5.0"] + data["3.0"] + "えっち生活♡";
			break;
		case "1_2":
			return "なぜか、" + data["2.0"] + "女の子は僕に" + data["3.0"] + "。";
			break;
		case "1_3":
			return data["4.0"] + "に" + data["3.0"] + data["1.0"] + "ても、" + "やっぱり" + data["4.0"] + "が好き！";
			break;
		case "1_4":
			return "昨日、" + data["3.0"] + "誘ってきた" + data["2.0"] + "女と" + data["6.0"] + "で・・・";
			break;
		case "2_1":
			return data["2.0"] + "女と" + data["2.0"] + "女のW" + data["3.0"] + "SEX";
			break;
		case "2_2":
			return data["2.0"] + "過ぎる美少女と" + data["3.0"] + "SEX";
			break;
		case "2_3":
			return data["4.0"] + "に" + data["1.0"] + "た" + data["2.0"] + "女";
			break;
		case "2_4":
			return "新人！" + data["2.0"] + "女の子の" + data["3.0"] + "が" + data["5.0"] + "!!!!!!!";
			break;
		case "3_1":
			return "幸せそうな" + data["2.0"] + "女に忍び寄る" + data["4.0"] + "の影";
			break;
		case "3_2":
			return data["2.0"] + "女、" + data["3.0"] + "!" + data["5.0"] + data["1.0"] + "!!";
			break;
		case "3_3":
			return data["2.0"] + "女は" + data["4.0"] + "に" + data["1.0"] + "れる";
			break;
		case "3_4":
			return data["2.0"] + "女は" + data["4.0"] + "に" + data["1.0"] + "れる";
			break;
		case "4_1":
			return data["2.0"] + "女の子と" + data["6.0"] + "で" + data["3.0"] + "やっちゃった撲。";
			break;
		case "4_2":
			return "僕らの" + data["2.0"] + "女がある日、" + data["4.0"] + "迫ってきた";
			break;
		case "4_3":
			return data["2.0"] + "女の子を" + data["4.0"] + "犯しちゃった・・・";
			break;
		case "4_4":
			return data["5.0"] + "!!!!!   THE" + data["3.0"] + "る" + data["2.0"] + "女!";
			break;
	}
}
