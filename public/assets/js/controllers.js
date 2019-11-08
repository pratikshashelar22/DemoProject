angular.module('app')
.controller('homectlr', function($anchorScroll,$location, $scope,$state,$ionicPopup,$ionicModal,$ionicScrollDelegate,$http,ionicToast,$http){
	$round = true;
	$scope.data={};
	var emailFormat = /^[^@\s]+@([^@\s]+\.)+[^@\s]+$/i;
	$scope.anchorTab ="";
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
   		if($scope.anchorTab != section){
   			$scope.anchorTab = section;
			$location.hash(section);   //set the location hash
		    var handle = $ionicScrollDelegate.$getByHandle('myPageDelegate').scrollTop();
		    handle.anchorScroll(true);
		}
	    // $ionicScrollDelegate.$getByHandle(section).scrollTop();
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
  	/*$scope.sentmail = function($event){
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
  			var url= "https://script.googleusercontent.com/a/macros/sodelsolutions.com/echo?user_content_key=oZgkEDcdSXcaTUXj3p7kPNhItTwSrtfdQEMi1cfhx9l8PpNZoGzO4c4MHrJLO3s4JjFwW-re0mTa22-W3HXz86Q7YYY7YDywm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_uIqi1JcfNnFIBqnPfj8GUVgVDhj4emyCpFpnl0J3Owo7uRdw1oadTeU0LJmlwYUMjKmeeCsQE6vfFe3UjG4UcSpl8lQJO2vcdO55T6qw8bo&lib=MfbdwIkOt3MEfrkxsLVwA41V5rJybEyUb";
  		*/	/*var req = {
			 method: 'POST',
			 url: 'https://script.google.com/a/sodelsolutions.com/macros/s/AKfycbz9lIKjmuKS6PXLKdOyjF13kw5_m0we16-6Vkuw/exec',
			 transformRequest: 'transformRequestAsFormPost',
			 data: {name : $scope.data.name,
			 	email:$scope.data.email,
			 	message:$scope.data.message
			 },
			 headers: {
			   'Content-Type': 'application/x-www-form-urlencoded'
			 }	
			 		 
			};*/

  			// var url ="https://script.google.com/a/sodelsolutions.com/macros/s/AKfycbz9lIKjmuKS6PXLKdOyjF13kw5_m0we16-6Vkuw/exec";
		  /* $http(req).success( function(response) {
		      $scope.result = response; 
		  }).error(function (data,status) {
                alert("error");
            });*/
            // document.getElementById("thankyou_message").style= "display:block";
          /*  handleFormSubmit(e);
		}
  		
  	}*/
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
	function getFormData(form) {
    var elements = form.elements;
    var honeypot;

    var fields = Object.keys(elements).filter(function(k) {
      if (elements[k].name === "honeypot") {
        honeypot = elements[k].value;
        return false;
      }
      return true;
    }).map(function(k) {
      if(elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      }else if(elements[k].length > 0){
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

    var formData = {};
    fields.forEach(function(name){
      var element = elements[name];
      
      // singular form elements just have one value
      formData[name] = element.value;

      // when our element has multiple items, get their values
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSend
      = form.dataset.email || ""; // no email by default

    return {data: formData, honeypot: honeypot};
  }

  function handleFormSubmit(event) {  // handles form submit without any jquery
    event.preventDefault();           // we are submitting via xhr below
    var form = event.form;
    var formData = getFormData(form);
    var data = formData.data;

    // If a honeypot field is filled, assume it was done so by a spam bot.
    if (formData.honeypot) {
      return false;
    }

    disableAllButtons(form);
    var url = form.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          form.reset();
          var formElements = form.querySelector(".form-elements")
          if (formElements) {
            formElements.style.display = "none"; // hide form
          }
          var thankYouMessage = form.querySelector(".thankyou_message");
          if (thankYouMessage) {
            thankYouMessage.style.display = "block";
          }
        }
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    xhr.send(encoded);
  }
  
  function loaded() {
    // bind to the submit event of our form
    var forms = document.querySelectorAll("form.gform");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
  };
  document.addEventListener("DOMContentLoaded", loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }

})
.controller('menuctlr', function($scope, $stateParams) {
   

});