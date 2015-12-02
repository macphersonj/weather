app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
	$scope.weatherData =
  	forecast.success(function(data) {
    	$scope.weatherData = data;
  	})
	$scope.CurrentDate = new Date();
}]);
