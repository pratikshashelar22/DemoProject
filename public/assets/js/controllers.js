angular.module('app')
.controller('homectlr', function($anchorScroll,$location, $scope,$state){
	$round = true;
	$scope.ChangeContent = function(){
		angular.element(document.getElementById("p1")).text("Value changed");
		angular.element( $("ion-navicon-round").toggle("ion-navicon-cross"));
	};
	$scope.gotoAnchor = function(section){
		var newHash = section;
	      if ($location.hash() !== newHash) {
	        // set the $location.hash to `newHash` and
	        // $anchorScroll will automatically scroll to it
	        $location.hash(section);
	      } else {
	        // call $anchorScroll() explicitly,
	        // since $location.hash hasn't changed
	        $anchorScroll();
   		}
	};

})
.controller('menuctlr', function($scope, $stateParams) {
   

});