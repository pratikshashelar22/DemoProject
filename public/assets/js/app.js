 var app = angular.module('app', ['ionic','ionic-toast','ui.router'])

.run(['$state', '$rootScope', function ($state, $rootScope) {
// $state.go("home");
 $(document).bind("contextmenu",function(e) {
     e.preventDefault();
    });
    $(document).keydown(function(e){
    if(e.which === 123){
       return false;
    }
});
	/*document.addEventListener('keydown', function() {
	  if (event.keyCode == 123) {
	    alert("This function has been disabled to prevent you from stealing my code!");
	    return false;
	  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
	    alert("This function has been disabled to prevent you from stealing my code!");
	    return false;
	  } else if (event.ctrlKey && event.keyCode == 85) {
	    alert("This function has been disabled to prevent you from stealing my code!");
	    return false;
	  }
	}, false);

	if (document.addEventListener) {
	  document.addEventListener('contextmenu', function(e) {
	    alert("This function has been disabled to prevent you from stealing my code!");
	    e.preventDefault();
	  }, false);
	} else {
	  document.attachEvent('oncontextmenu', function() {
	    alert("This function has been disabled to prevent you from stealing my code!");
	    window.event.returnValue = false;
	  });
	}*/
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
  
