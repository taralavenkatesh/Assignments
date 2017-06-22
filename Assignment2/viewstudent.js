var viewStudentMod = angular.module("viewStudentMod", []);
viewStudentMod.controller("viewStudentCtrl", function($scope, $http, $log,
		studentFact,studentFactPromise) {
	$scope.status = "";
	$scope.editForm = false;
	$scope.editData = [];
	$http.get('http://localhost:3000/student').then(function(response) {
		$log.debug(response.data);
		$scope.studentdata = response.data;
	});

	/*
	 * $scope.deleteStudent = function(id) { var url1 =
	 * "http://localhost:3000/student/" + id; $http({ method : "DELETE", url :
	 * url1 }).then(function mySuccess(response) { $log.debug(response.data);
	 * $scope.status = "success"; }, function myError(response) {
	 * $log.debug(response.data); $scope.status = "unnable to delete"; });
	 *  }
	 */
	
	$scope.deleteStudent = function(id) {			
		$log.debug("From Promise");
		studentFactPromise.deleteStudentById(id).then(function(){
			$scope.status = "success";			 
         })
         .catch(function(response){
                 console.log(response.status);
                 $scope.status = "unnable to delete";
         }); 
		
	}

	/*
	 * $scope.editStudent = function(id) { $scope.status = ""; $scope.editForm =
	 * true; $http.get('http://localhost:3000/student/' + id).then(
	 * function(response) { $scope.student = response.data;
	 * $log.debug($scope.student); }, function errorCallback(response) {
	 * $log.debug("error"); }); }
	 */
	
	
	$scope.editStudent = function(id) {	
		$scope.status = "";
		$scope.editForm = true;
		$log.debug("From Promise");
		studentFactPromise.getStudentByID(id).then(function(data){
			 $scope.student = data;
         })
         .catch(function(response){
                 console.log(response.status);
         }); 
		
	}
	
	/*$scope.updateStudent = function() {
		if ($scope.studentform.$valid) {
			$http.put('http://localhost:3000/student/' + $scope.student.id,
					$scope.student).then(function successCallback(response) {
				$log.debug(response);
				$scope.status = "success";
			});

			$scope.editForm = false;
		}
	}
	*/
	
	$scope.updateStudent = function() {
		if ($scope.studentform.$valid) {
			$log.debug("From Promise");
			studentFactPromise.updateStudent($scope).then(function(data){
				$scope.status = "success";
	         })
	         .catch(function(response){
	                 console.log(response.status);
	                 $scope.status = "Failed to Update";
	         }); 
			$scope.editForm = false;
		}

	}
	
	
	

});
