angular.module('gron')
  .controller('PmapController', ['$scope', '$routeParams', '$http',
    function ($scope, $routeParams, $http) {
      personal_id = $routeParams.personal_id;
      $scope.personal_id = personal_id;
      $http({
        method : 'GET',
        url : '/personal/' + personal_id
      }).success(function(data, status, headers, config){
        if(!$scope.title){
          $scope.title = data["title"]
          $scope.likes = data["likes"]
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
      if(l2_data){
        l1_list.push({'cluster':cluster,'count':l2_data["count"]})
      }else{
        l1_list.push({'cluster':cluster,'count':0})
      };
    }
    count_data_ForMap.push(l1_list)
  }
  return count_data_ForMap
}
