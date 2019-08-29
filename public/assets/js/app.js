var app = angular.module('app', ['ionic','ui.router'])

.run(['$state', '$rootScope', function ($state, $rootScope) {
// $state.go("home");
}])
.config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	
	$stateProvider

  	.state("home", {
	    cache: false,
	    url: "/home",
	    templateUrl: "assets/templates/home.html",
	    controller: "homectlr"
	})
	.state("menu", {
	    cache: false,
	    url: "/menu",
	    templateUrl: "assets/templates/menu.html",
	    controller: "menuctlr"
	})
   
}]);
  
