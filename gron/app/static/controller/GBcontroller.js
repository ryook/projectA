angular.module("gron", [])
.controller("test", function(){
	$scope.aa = "aaa"
})
.controller("GBController", function($scope){
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
			console.log($scope.img_list);
		}else{
			$scope.likes.push(d);
			console.log($scope.likes)
			$scope.page = "4";
			like_cluster= [];
			for(h=0; h<$scope.likes.length; h++){
				like_cluster.push($scope.likes[h]["cluster"]);
			}
			$scope.count_list = [];
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
						$scope.count_list.push(count_obj);
						count_obj = {}
					}
					num = 0;
				}
			}
		}
		console.log($scope.likes);
	}
});
