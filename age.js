var ageApp = angular.module('ageApp', []);
ageApp.controller('ageController', function($scope){

	$scope.yearBorn = function(){
		$scope.year = 2016 - $scope.age;

	}
})