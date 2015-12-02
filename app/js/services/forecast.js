app.factory('forecast', ['$http', function($http) {
	return $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=Berlin,de&cnt=5&appid=37c0cff975a3ba3a8cb0f5642e63ee47')
  	.success(function(data) {
  		return data;
  	})
  	.error(function(err) {
  		return err;
  	});
}]);
