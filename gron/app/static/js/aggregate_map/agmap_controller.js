angular.module('gron')
  .controller('AgmapController', ['$scope', '$http',
    function ($scope, $http) {
      // $scope.chk_agclass = function(count){
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
      var hiduke=new Date(); 
      var month = hiduke.getMonth()+1;
      var day = hiduke.getDate();
      var jikan= new Date();
      var hour = jikan.getHours();
      var minute = jikan.getMinutes();
      $scope.date = month+"/"+ day + " "+ hour + "時"+ minute+"分"
      $http({
        method : 'GET',
        url : '/aggregate'
      }).success(function(gdata, status, headers, config){
          count = gdata["count"]
          $scope.agmap_count = make_map_agdata(count)
          $scope.user_count = gdata["user"]
          console.log($scope.agmap_count)
      }).error(function(gdata, status, headers, config){
        console.log("error")
      });
}]);

var make_map_agdata = function(data){
  count_data_ForMap = []
  //data = [{u'count': 3, u'cluster': u'1_2'},...]
  for(var l1=1;l1<=4;l1++){
    l1_list = []
    for(var l2=1;l2<=4;l2++){
      cluster = l1 + "_" + l2;
      count = data[cluster]
      // l2_data = Enumerable.From(data)
      //                   .Where(function(d){
      //                     if(d.cluster == cluster){
      //                       return d
      //                     }
      //                   })
      //                   .ToArray()[0];
      cl_name = cluster_name[cluster]
      if(count>0){
        l1_list.push({'cluster':cluster,'count':count, 'name':cl_name})
      }else{
        l1_list.push({'cluster':cluster,'count':0, 'name':cl_name})
      };
    }
    count_data_ForMap.push(l1_list)
  }
  console.log(count_data_ForMap)
  return count_data_ForMap
}
