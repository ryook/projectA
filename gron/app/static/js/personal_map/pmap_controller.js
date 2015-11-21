angular.module('gron')
  .controller('PmapController', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http) {
      // $scope.chk_class = function(count){
      //   if(count > 6){
      //     // console.log(count)
      //     cl =  "_4 l2"
      //   }else if (count <= 6 && count > 4){
      //     // console.log(count)
      //     cl =  "_3 l2"
      //   }else if (count <= 4 && count > 2){
      //     // console.log(count)
      //     cl =  "_2 l2"
      //   }else if (count <= 2 && count > 0) {
      //     // console.log(count)
      //     cl ="_1 l2"
      //   }else {
      //     // console.log(count)
      //     cl = "_0"
      //   }
      //   console.log(cl)
      //   return cl
      // }
      personal_id = $routeParams.personal_id;
      $scope.personal_id = personal_id;
      $http({
        method : 'GET',
        url : '/personal/' + personal_id
      }).success(function(data, status, headers, config){
        if(!$scope.title){
          $scope.title = data["title"]
          $scope.likes = data["likes"]
          $scope.age = data["age"]
          count = data["count"]
          $scope.map_count = make_map_data(count)
        }
      }).error(function(data, status, headers, config){
        console.log("error")
      });
}]);

var make_map_data = function(data){
  count_data_ForMap = []
  //data = [{u'count': 3, u'cluster': u'1_2'},...]
  for(var l1=1;l1<=4;l1++){
    l1_list = []
    for(var l2=1;l2<=4;l2++){
      cluster = l1 + "_" + l2;
      l2_data = Enumerable.From(data)
                        .Where(function(d){
                          if(d.cluster == cluster){
                            return d
                          }
                        })
                        .ToArray()[0];
      cl_name = cluster_name[cluster]
      if(l2_data){
        l1_list.push({'cluster':cluster,'count':l2_data["count"], 'name':cl_name})
      }else{
        l1_list.push({'cluster':cluster,'count':0, 'name':cl_name})
      };
    }
    count_data_ForMap.push(l1_list)
  }
  console.log("p",count_data_ForMap)
  return count_data_ForMap
}
