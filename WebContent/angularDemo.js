var app = angular.module("demoApp",[]);

app.controller("demoCtrl", function($scope){
	$scope.names = ["Roberts", "Steven"];
	
	$scope.add=function(){
		$scope.names.push($scope.newNames);
		$scope.newContact="";
	}
});