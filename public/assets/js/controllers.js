angular.module('app')
.controller('homectlr', function($anchorScroll,$location, $scope,$state,$ionicPopup,$ionicModal,$ionicScrollDelegate,$http,ionicToast,$http,$timeout){
	$round = true;
	$scope.data={};
  $scope.url='assets/templates/inovativeWorkPopup.html';
	var emailFormat = /^[^@\s]+@([^@\s]+\.)+[^@\s]+$/i;
	$scope.anchorTab ="";  
  var w=$(window).width();
	$scope.ChangeContent = function(){
		angular.element(document.getElementById("p1")).text("Value changed");
		angular.element( $("ion-navicon-round").toggle("ion-navicon-cross"));
	};
	
	$scope.gotoAnchor = function(section){
			  $location.hash(section);   //set the location hash
        var handle = $ionicScrollDelegate.$getByHandle('myPageDelegate');
        handle.anchorScroll(true);
        $timeout(function(){
            $location.hash(section);   //set the location hash
            var handle = $ionicScrollDelegate.$getByHandle('myPageDelegate');
            handle.anchorScroll(true);
        },100);
	};	
	$scope.openModal = function(type, path) {
     if(type == 'creative')
       $scope.url ="assets/templates/inovativeWorkPopup.html"
     else if(type == 'weAre')
       $scope.url ="assets/templates/WeAre.html"
     else if(type == 'category')
       $scope.url ="assets/templates/WorkCategory.html"
      else if(type == 'completedproj')
       $scope.url ="assets/templates/completedProj.html"
      else if(type == 'recentproj')
       $scope.url ="assets/templates/RecentProj.html"
      else if(type == 'plumbing')
       $scope.url ="assets/templates/plumbingvideo.html"
       else if(type == 'civil')
       $scope.url ="assets/templates/civilworkvideo.html"
      else if(type == 'gallery'){
       $scope.url ="assets/templates/GallaryPopup.html"
       $scope.imagePath = path;
      }
      // $scope.modal.show();
     $timeout( function(){ 
       $scope.modal = $ionicModal.fromTemplateUrl($scope.url, {
          scope: $scope,
          animation: type == 'gallery'? 'slide-in-middle':'slide-in-right'
       }).then(function(modal) {
          $scope.modal = modal;
          modal.show();
       });
     },500);
     
  }
  $scope.closeModal = function() {
       // $scope.modalPopup("close");
      	$scope.modal.hide();
  };
  $scope.sentmail = function($event){
  		var e =$event;
  		document.getElementById("thankyou_message").style = "display:none";
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
  		}else{ 			
  		  document.getElementById('submitMail').disabled = true;
        var formData = $('#gform').serialize();
        $.ajax({
              type        : 'POST', 
              url         : 'https://script.google.com/a/sodelsolutions.com/macros/s/AKfycbz9lIKjmuKS6PXLKdOyjF13kw5_m0we16-6Vkuw/exec',
              data        : formData, 
              dataType    : 'json',
              encode      : true
         }).done(function(data) {
              if(data.result == 'success') {    
                 $scope.data  = {};          
                 document.getElementById("thankyou_message").style= "display:block";
                 document.getElementById("h2text").innerHTML = "Thanks for Contacting Us!!";
                 document.getElementById('submitMail').disabled = false;
              } else {
                document.getElementById("thankyou_message").style= "display:block";
                document.getElementById("h2text").innerHTML = "Sorry!! Failed to Submit Your Message Please Try Again After sometime!!";
                document.getElementById('submitMail').disabled = false;
              }
         }).fail(function (jqXHR,status,err) {
              document.getElementById("thankyou_message").style= "display:block"; 
              document.getElementById("h2text").innerHTML = err;
              document.getElementById('submitMail').disabled = false;
         });        
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
	    var j = w > 600 ? 2 : 1;
	    for (var i=0;i<j;i++) {
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