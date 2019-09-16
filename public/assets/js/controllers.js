angular.module('app')
.controller('homectlr',function($scope,$state){
	$round = true;
	$scope.ChangeContent = function(){
		angular.element(document.getElementById("p1")).text("Value changed");
		angular.element( $("ion-navicon-round").toggle("ion-navicon-cross"));
	};

})
.controller('menuctlr', function($scope, $stateParams) {
   

});