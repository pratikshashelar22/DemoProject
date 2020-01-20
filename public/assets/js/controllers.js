angular.module('app')
.controller('homectlr', function($anchorScroll,$location, $scope,$state,$ionicPopup,$ionicModal,$ionicScrollDelegate,$http,ionicToast,$http,$timeout){
	$round = true;
	$scope.data={};
  $scope.url='assets/templates/inovativeWorkPopup.html';
  var slideIndex = 1;
  $scope.completedProj =[
   {"name":"Meghdoot co. op. Housing Society,Tilaknagar, Dombivli East.","work":"Structural Repairing, External Plaster,External Paint.","year":"2005","cost":"12,00,000/-"},
   {"name":"DevAshih Co. Op. Housing Society,Tilaknagar,Dombivli East.","work":"Structural Repairing, External Plaster,External Paint.","year":"2006","cost":"10,50,000/-"},
   {"name":"Manorama Co. Op. Housing Society,RokelDepo Gully,SantNamdev Path,Dombivli East.","work":"Structural Repairing, External Plaster,External Paint.","year":"2005","cost":"12,00,000/-"},
   {"name":"NavRam darshan Co. Op. Housing Society,Jijai Nagar,Gograsswadi,Dombivli East.","work":"Structural Repairing, External Patch Plaster,Crack filling,Terrace Water Proofing,Plumbing,Painting.","year":"2007","cost":"16,75,000/-"},
   {"name":"SukhSamadhan Co. Op. Housing Society,Tilaknagar,Dombivli East.","work":"Terrace Waterproofing,Patch Plaster.","year":"2008","cost":"5,50,000"},
   {"name":"Shubhda Co. Op. Housing Society,Dombivli East.","work":"Structural Repairing, External Plaster,Plumbing work.","year":"2010","cost":"12,00,000/-"},
   {"name":"Ashwini Building,Tilak Nagar,Dombivli East.","work":"Structural repair,Patch Plaster,Crack Filling,Plumbing Work.","year":"2010","cost":"4,25,000/-"},
   {"name":"Godawari Society,Dombivli","work":"Compound wall Repair,Staircase paint,Soling coba,","year":"2011","cost":"3,60,000/-"},
   {"name":"Gulmohar Co. Op. Housing Society, Tilak Nagar,Dombivli East.","work":"External Plaster,External Paint,Soling coba, Paver fixing ,Plumbing work.","year":"2012","cost":"15,45,000/-/-"},
   {"name":"VishrantiDham,Dombivli East.","work":"Structural repair,Patch work,Crack Filling,Terrace Waterproofing,UGTank Repair, Plumbing Work","year":"2012","cost":"5,00,000/-"},
   {"name":"Amar villa,Dombivli East.","work":"Structural repair,Patch work,Crack Filling.","year":"2012","cost":"4,00,000/-"},
   {"name":"Shree Building,Bandhutwa Society,Dombivli East.","work":"Structural repair,Patch work,Crack Filling,External Paint.","year":"2012","cost":"5,75,000/-"},
   {"name":"Laljiva Co. Op. Housing Society,Tilak Nagar, Dombivli East.","work":"Laljiva Co. Op. Housing Society,Tilak Nagar, Dombivli East.","year":"2013","cost":"6,50,000/-"},
   {"name":"G.S.B. Mandal School,Ambika Nagar, Gograsswadi,Dombivli East.","work":"Drainage line laying,Soling Coba,Plumbing Work.","year":"2014","cost":"4,00,000/-"},
   {"name":"Gunjan Society,Tilak Nagar, Dombivli East.","work":"Overhead Tank Repair and Plaster, Dadoo Tiles fixing in Water Tank,Plumbing Work","year":"2014","cost":"2,00,000/-"},
   {"name":"Santosh Darshan Society,Jijai Nagar,Gograsswadi,Dombivli East.","work":"Drainage line laying,Soling Coba,Paver Fixing,Plumbing Work,Grill Fixing.","year":"2015","cost":"10,50,000/-"},
   {"name":"Bhanu Society,Bhanunagar, Near P.P. Chamber mall,Dombivli East.","work":"Drainage line laying,Soling Coba,New R.C.C UG tank construction,Plumbing Work","year":"2015","cost":"4,35,000/-"},
   {"name":"Raj Hans Society,Dombivli East","work":"Exiting UG Tank Waterproofing and Plastering,New R.C.C. UG tank Construction,Pump room Repair.","year":"2015","cost":"2,75,000/-"},
   {"name":"Amar Niketan Society,Tilak Nagar, Dombivli East.","work":"Structural repair,Patch work,Crack Filling,OHT Waterproofing and Plastering,G.I. Railling Fixing in Staircase.","year":"2016","cost":"6,54,000/-"},
   {"name":"Nilam Bunglow,Dombivli East.","work":"Crackfilling,Painting.","year":"2016","cost":"2,00,000/-"},
   {"name":"Murlivihar Society,Dombivli East.","work":"Structural repair,Patch work,Crack Filling,Painting.","year":"2016","cost":"4,50,000/-"},
   {"name":"Raj Hans Society,Dombivli East.","work":"OH tanks Repair, Plaster, Waterproofing","year":"2017","cost":"2,00,000/-"},
   {"name":"Shri Samarth Krupa Society,Nandivali Road,Dombivli East.","work":"OH tanks- Repair, Waterproofing, Plaster,  Tiles fixing.","year":"2017","cost":"3,50,000/-"},
   {"name":"Virat Co. Op. Housing Society, Tilak Nagar,Dombivli East.","work":"Drainage Line Repairing, Soling coba.","year":"2018","cost":"2,50,000/-"},
   {"name":"Bhanu Co. Op. Hsg. Soc. Ltd., Near Railway Station Dombivli East.","work":"Structural repair,Patch work,Crack Filling,Painting Work,Plumbing work.","year":"May 2018","cost":"12,00,000/-"},
   {"name":"Manorama Society.Rockel depo gully,Sant namdev path, Dombivli East.","work":"Structural repair,Patch work,Crack Filling,Painting Work, Plumbing work.","year":"2018","cost":"6,00,000/-"},
   {"name":"Navramdarshan Society(Gograsswadi), Manorama Society (SantNamdev Path), Yojna Society (Ambika Nagar), Sita Ram Nagar CHS , AjanthaDarshan CHS.Etc. and many more..","work":"Municipal Main Line Water Connections.","year":"","cost":"Our Customers Happiness Can’t be judge by money"}
   ];
   $scope.recentProj =[
   {"name":"Meghdoot co. op. Housing Society,Tilaknagar, Dombivli East.","work":"Structural Repairing, External Plaster,External Paint.","year":"2005","cost":"12,00,000/-"},
   {"name":"DevAshih Co. Op. Housing Society,Tilaknagar,Dombivli East.","work":"Structural Repairing, External Plaster,External Paint.","year":"2006","cost":"10,50,000/-"},
   {"name":"Manorama Co. Op. Housing Society,RokelDepo Gully,SantNamdev Path,Dombivli East.","work":"Structural Repairing, External Plaster,External Paint.","year":"2005","cost":"12,00,000/-"},
   {"name":"NavRam darshan Co. Op. Housing Society,Jijai Nagar,Gograsswadi,Dombivli East.","work":"Structural Repairing, External Patch Plaster,Crack filling,Terrace Water Proofing,Plumbing,Painting.","year":"2007","cost":"16,75,000/-"},
   {"name":"SukhSamadhan Co. Op. Housing Society,Tilaknagar,Dombivli East.","work":"Terrace Waterproofing,Patch Plaster.","year":"2008","cost":"5,50,000"},
   {"name":"Shubhda Co. Op. Housing Society,Dombivli East.","work":"Structural Repairing, External Plaster,Plumbing work.","year":"2010","cost":"12,00,000/-"},
   {"name":"Ashwini Building,Tilak Nagar,Dombivli East.","work":"Structural repair,Patch Plaster,Crack Filling,Plumbing Work.","year":"2010","cost":"4,25,000/-"},
   {"name":"Godawari Society,Dombivli","work":"Compound wall Repair,Staircase paint,Soling coba,","year":"2011","cost":"3,60,000/-"},
   {"name":"Gulmohar Co. Op. Housing Society, Tilak Nagar,Dombivli East.","work":"External Plaster,External Paint,Soling coba, Paver fixing ,Plumbing work.","year":"2012","cost":"15,45,000/-/-"},
   {"name":"VishrantiDham,Dombivli East.","work":"Structural repair,Patch work,Crack Filling,Terrace Waterproofing,UGTank Repair, Plumbing Work","year":"2012","cost":"5,00,000/-"},
   {"name":"Amar villa,Dombivli East.","work":"Structural repair,Patch work,Crack Filling.","year":"2012","cost":"4,00,000/-"},
   {"name":"Shree Building,Bandhutwa Society,Dombivli East.","work":"Structural repair,Patch work,Crack Filling,External Paint.","year":"2012","cost":"5,75,000/-"}
   ];

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
 /* $scope.openModal1 = function() {
    document.getElementById("myModal").style.display = "block";
  }*/

/*$scope.closeModal1 = function() {
  document.getElementById("myModal").style.display = "none";
}
  

$scope.plusSlides = function(n) {
  slideIndex += n
  $scope.showSlides1(slideIndex);
}

$scope.currentSlide = function(n) {
  slideIndex = n
  $scope.showSlides1(slideIndex);
}

$scope.showSlides1 = function(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
};*/
// $scope.showSlides1(slideIndex);
})
.controller('menuctlr', function($scope, $stateParams) {
   
});