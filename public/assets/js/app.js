 var app = angular.module('app', ['ionic','ionic-toast','ui.router'])

.run(['$state', '$rootScope', function ($state, $rootScope) {
// $state.go("home");
}])
.config([ '$stateProvider', '$urlRouterProvider','$locationProvider','$httpProvider', function($stateProvider, $urlRouterProvider, $locationProvider,$httpProvider) {
	// $locationProvider.html5Mode(true).hashPrefix('!');
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
	.state("inovativeWorkPopup", {
	    cache: false,
	    url: "/inovativeWork",
	    templateUrl: "assets/templates/inovativeWorkPopup.html"	    
	})
	
	
	 $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

   
}]);
  
