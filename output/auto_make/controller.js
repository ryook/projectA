angular.module("Avapp", [])
.controller("MainController", function($scope){

cluster = "3_4";

getWord(cluster);
makeTitle(cluster);

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
		console.log(data)
	}

function makeTitle(c){
	switch(c){
		case "1_1":
			$scope.title = data["2.0"] + "女の子と" + data["5.0"] + data["3.0"] + "えっち生活♡";
			break;
		case "1_2":
			$scope.title = "なぜか、" + data["2.0"] + "女の子は僕に" + data["3.0"] + "。";
			break;
		case "1_3":
			$scope.title = data["4.0"] + "に" + data["3.0"] + data["1.0"] + "ても、" + "やっぱり" + data["4.0"] + "が好き！";
			break;
		case "1_4":
			$scope.title = "昨日、" + data["3.0"] + "誘ってきた" + data["2.0"] + "女と" + data["6.0"] + "で・・・";
			break;
		case "2_1":
			$scope.title = data["2.0"] + "女と" + data["2.0"] + "女のW" + data["3.0"] + "SEX";
			break;
		case "2_2":
			$scope.title = data["2.0"] + "過ぎる美少女と" + data["3.0"] + "SEX";
			break;
		case "2_3":
			$scope.title = data["4.0"] + "に" + data["1.0"] + "た" + data["2.0"] + "女";
			break;
		case "2_4":
			$scope.title = "新人！" + data["2.0"] + "女の子の" + data["3.0"] + "が" + data["5.0"] + "!!!!!!!";
			break;
		case "3_1":
			$scope.title = "幸せそうな" + data["2.0"] + "女に忍び寄る" + data["4.0"] + "の影";
			break;
		case "3_2":
			$scope.title = data["2.0"] + "女、" + data["3.0"] + "!" + data["5.0"] + data["1.0"] + "!!";
			break;
		case "3_3":
			$scope.title = data["2.0"] + "女は" + data["4.0"] + "に" + data["1.0"] + "れる";
			break;
		case "3_4":
			$scope.title = data["2.0"] + "女は" + data["4.0"] + "に" + data["1.0"] + "れる";
			break;
		case "4_1":
			$scope.title = data["2.0"] + "女の子と" + data["6.0"] + "で" + data["3.0"] + "やっちゃった撲。";
			break;
		case "4_2":
			$scope.title = "僕らの" + data["2.0"] + "女がある日、" + data["4.0"] + "迫ってきた";
			break;
		case "4_3":
			$scope.title = data["2.0"] + "女の子を" + data["4.0"] + "犯しちゃった・・・";
			break;
		case "4_4":
			$scope.title = data["5.0"] + "!!!!!   THE" + data["3.0"] + "る" + data["2.0"] + "女!";
			break;

	}
}

});

