app.controller("mainController", function($scope, $http){

    $scope.apiKey = "";
    $scope.init = function() {
      var today = new Date();
      var apiDate = today.getFullYear() + ("0" + (today.getMonth() + 1)).slice(-2) + "" + ("0" + today.getDate()).slice(-2);
        $http.jsonp('http://api.trakt.tv/calendar/premieres.json/' + $scope.apiKey + '/' + apiDate + '/' + 30 + '/?callback=JSON_CALLBACK').success(function(data) {
            console.log(data);
        }).error(function(error) {
 
        });

    };

});

