var todoApp = angular.module('todoApp', []);
todoApp.controller('todoController', function($scope){

	$scope.tasks = [

	{
		checkbox: false,
		title: null,
		description: null,
		deadline: null
	}

	];

	$scope.addTask = function(){
		$scope.tasks.push({ checkbox: false, title: $scope.newTitle, description: $scope.newDescription, deadline: $scope.newDeadline});
		$scope.newTitle = "";
		$scope.newDescription = "";
		$scope.newDeadline = "";
		console.log($scope.tasks);
		
	}

	$scope.removeTask = function(){
		if($scope.checkbox = true) {
			$scope.tasks.splice($scope.tasks.checkbox = true);
		}
	}

});