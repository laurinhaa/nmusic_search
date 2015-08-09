angular.module('myApp', [])
    .controller('MainController', function($scope, $http){
    
    $scope.search = function() {
        fetch();
    }
    
    function fetch(){
   $http.get('http://services.sapo.pt/Music/OnDemand/Provider/apiv3/find?what=albums&text=' + $scope.searchTerm)
        .success(function(data){
            $scope.details = data.albums.results;
        })
        .error(function(err) { 
              $scope.details = err; 
        }); 
    }
    
});