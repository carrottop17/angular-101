var makeChangeApp = angular.module('makeChangeApp', []);
makeChangeApp.controller('makeChangeController', function($scope){

	$scope.makeChange = function(){
		var amount = ($scope.amountGiven - $scope.billAmount) * 100;
		var change = [];
		var makeSomeChange = function(amount) {
  			
      			total = 0;
  			[25, 10, 5, 1].forEach(function(coin) {
    			while (total + coin <= amount) {
      				change.push(coin);
      				total += coin;
    			}
  		});
  		return change;
		};
		console.log(makeSomeChange(amount));

		var quarters = 0;
		var dimes = 0;
		var nickels = 0;
		var pennies = 0;
		for (var i = 0; i < change.length; i++) {
			if(change[i] == 25){
				quarters++;
			}
			if(change[i] == 10){
				dimes++;
			}
			if(change[i] == 5){
				nickels++;
			}
			if(change[i] == 1){
				pennies++;
			}
		}
		$scope.quarters = quarters;
		$scope.dimes = dimes;
		$scope.nickels = nickels;
		$scope.pennies = pennies;
	}

	

	
});