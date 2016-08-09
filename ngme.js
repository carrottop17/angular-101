var styleApp = angular.module('styleApp', []);
styleApp.controller('styleController', function($scope){
	$scope.myColor = "red";

	var Student = function(name, formerly){
		this.name = name;
		this.former = formerly;
	}

	$scope.students = [];

	$scope.students.push(new Student('Brett', 'USAF'));
	$scope.students.push(new Student('Wes', 'Wildcat'));
	$scope.students.push(new Student('Drew', 'Westminster Warrior'));
	$scope.students.push(new Student('Daniel', 'Cheering for Argentina in Rio'));
	$scope.students.push(new Student('Danielle', 'Like\'s the Who'));
	$scope.students.push(new Student('Dan', 'Lego nerd'));
	$scope.students.push(new Student('Danny', 'Strat Ruiner'));
	$scope.students.push(new Student('Alex', 'Assassain, for real'));
	$scope.students.push(new Student('Paige', 'Burnt Easily'));
	$scope.students.push(new Student('Dave', 'Cam lover'));
	$scope.students.push(new Student('Eric', 'Uselss with BS'));
	$scope.students.push(new Student('Shirlette', 'Where the heck is she'));
	$scope.students.push(new Student('Jackson', 'Volition Dev'));
	$scope.students.push(new Student('JT', 'Every woman\'s dream'));
	$scope.students.push(new Student('Summer', 'CS ninja'));
	
});