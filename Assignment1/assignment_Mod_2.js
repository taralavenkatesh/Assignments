var mod2 = angular.module("mod2", []);
mod2.service("myService", function () {
	this.saveStudent = function($scope)
	{

		var newItem ={};
		newItem.name= $scope.name;
		newItem.marks1=$scope.marks1;
		newItem.marks2=$scope.marks2;
		newItem.marks3=$scope.marks3;

		return newItem;    
	}
} );