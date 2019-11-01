angular.module('app')
.controller('homectlr', function($anchorScroll,$location, $scope,$state,$ionicPopup,$ionicModal,$ionicScrollDelegate,$http,ionicToast){
	$round = true;
	$scope.data={};
	var emailFormat = /^[^@\s]+@([^@\s]+\.)+[^@\s]+$/i;
	$scope.ChangeContent = function(){
		angular.element(document.getElementById("p1")).text("Value changed");
		angular.element( $("ion-navicon-round").toggle("ion-navicon-cross"));
	};
	$scope.modal = $ionicModal.fromTemplateUrl('assets/templates/inovativeWorkPopup.html', {
	      scope: $scope,
	      animation: 'slide-in-right'
	   }).then(function(modal) {
	      $scope.modal = modal;
	   });
	$scope.gotoAnchor = function(section){
		/*var newHash = section;
	      if ($location.hash() !== newHash) {
	        // set the $location.hash to `newHash` and
	        // $anchorScroll will automatically scroll to it
	        $location.hash(section);
	      } else {
	        // call $anchorScroll() explicitly,
	        // since $location.hash hasn't changed
	        $anchorScroll();
   		}*/
   		$location.hash(section);   //set the location hash
	    var handle = $ionicScrollDelegate.$getByHandle('myPageDelegate');
	    handle.anchorScroll(true);
	};
	$scope.CivilWorkSample = function(){
		/*var myPopup = $ionicPopup.show({
	    templateurl: 'assets/templates/inovativeWorkPopup.html',
	    title: 'Engaged With Innovative Civil Work',
	    subTitle: 'Please use normal things',
	    scope: $scope,
	    buttons: [
	      { text: 'Cancel' },
	      {
	        text: '<b>Save</b>',
	        type: 'button-positive',
	        onTap: function(e) {
	          if (!$scope.data.wifi) {
	            //don't allow the user to close unless he enters wifi password
	            e.preventDefault();
	          } else {
	            return $scope.data.wifi;
	          }
	        }
	      }
	    ]
	  });

	  myPopup.then(function(res) {
	    console.log('Tapped!', res);
	  });
*/
	  
	}
	 $scope.openModal = function() {
      $scope.modal.show();
  	};
	
   	$scope.closeModal = function() {
      	$scope.modal.hide();
  	};
  	$scope.sentmail = function($event){
  		if(!$scope.data.name){
  			ionicToast.show("Please Enter Name", 'bottom', false, 5000);
  			$event.preventDefault();
  		}else if(!$scope.data.email){
  			ionicToast.show("Please Enter Email Id", 'bottom', false, 5000);
  			$event.preventDefault();
  		}else if(!emailFormat.test($scope.data.email)){
  			ionicToast.show("Please Enter Valid Email", 'bottom', false, 5000);
  			$event.preventDefault();
  		}else if(!$scope.data.message){
  			ionicToast.show("Please Enter Name", 'bottom', false, 5000);
  			$event.preventDefault();
  		}
  		
  	}
   	$('#recipeCarousel').carousel({
	  interval: 10000
	})
   	$('#recipeCarousel2').carousel({
	  interval: 10000
	})
	$('.carousel .carousel-item').each(function(){
	    var next = $(this).next();
	    if (!next.length) {
	    next = $(this).siblings(':first');
	    }
	    next.children(':first-child').clone().appendTo($(this));
	    
	    for (var i=0;i<2;i++) {
	        next=next.next();
	        if (!next.length) {
	        	next = $(this).siblings(':first');
	      	}
	        
	        next.children(':first-child').clone().appendTo($(this));
	      }
	});
	$('.carousel .carousel-item2').each(function(){
	    var next = $(this).next();
	    if (!next.length) {
	    next = $(this).siblings(':first');
	    }
	    next.children(':first-child').clone().appendTo($(this));
	    
	    for (var i=0;i<2;i++) {
	        next=next.next();
	        if (!next.length) {
	        	next = $(this).siblings(':first');
	      	}
	        
	        next.children(':first-child').clone().appendTo($(this));
	      }
	});
})
.controller('menuctlr', function($scope, $stateParams) {
   

});