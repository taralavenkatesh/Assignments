var studentFact = angular.module("studentFact", []);
studentFact.factory('studentFact', function($log, $http) {
	var fact = {};

	fact.getStudentByID = function(id) {
		var studentData = {};
		$http.get('http://localhost:3000/student/' + id).then(
				function(response) {
					studentData = response.data;
				}, function errorCallback(response) {
					studentData = null;
				});

		return studentData;
	}
	return fact;
});


studentFact.factory('studentFactPromise', function($log,$q,$http) {
	var fact2 = {};

	fact2.getStudentByID = function(id) {        
		var deferred = $q.defer();        
		$http.get('http://localhost:3000/student/' + id)
		.then(function(response){
			$log.debug(response.data);
			deferred.resolve(response.data);
		})
		.catch(function(response){
			deferred.reject(response);
		});
		return deferred.promise;	
	}

	
	
	fact2.getStudentData = function(id) {        
		var deferred = $q.defer();        
		$http.get('http://localhost:3000/student/')
		.then(function(response){
			$log.debug(response.data);
			deferred.resolve(response.data);
		})
		.catch(function(response){
			deferred.reject(response);
		});
		return deferred.promise;	
	}
	

	fact2.deleteStudentById = function(id) {        
		var deferred = $q.defer();        
		$http.delete('http://localhost:3000/student/' + id)
		.then(function(response){
			$log.debug(response.data);
			deferred.resolve(response.data);
		})
		.catch(function(response){
			deferred.reject(response);
		});
		return deferred.promise;	
	}

	fact2.updateStudent = function($scope) {        
		var deferred = $q.defer();        
		$http.put('http://localhost:3000/student/' + $scope.student.id,
				$scope.student)
				.then(function(response){
					$log.debug(response.data);
					deferred.resolve(response.data);
				})
				.catch(function(response){
					deferred.reject(response);
				});
		return deferred.promise;	
	}

	return fact2;

});