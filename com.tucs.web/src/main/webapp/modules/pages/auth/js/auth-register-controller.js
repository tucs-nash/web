TUCS.auth.controller('RegisterController', ['$rootScope','$scope','$routeParams', '$modal', 'FormHelpers','AuthService', 'page', 
    function($rootScope,$scope,$routeParams,$modal,formHelpers,authService, page) {
	
	$rootScope.login = true;
	
	$scope.screenState = {
			success:null,
			error:null,
			alert:null,
			modelError:null,
			canSave:false
	};
	
	if (page == 'register') {	
		$scope.formInputs = {
			email: null,
			firstName: null,
			lastName: null,
			phone: null,
			password: null
		};
		$scope.confirmPassword = null;
		
		var verifyEmail = function() {
			cleanScreenState();
            if ($scope.formInputs.email != null) {
            	authService.verifyEmail($scope.formInputs.email, function (response) {
            		if (response) {
            			$scope.screenState.alert = {message:'Email already exist!', class:'alert-info'};
            		} else {
            			$scope.screenState.canSave = true;
            		}
                }, function () {

                });
            }
	    };
		
		var createRegister = function() {
			var form = $scope.registerForm;
	        
	        if ($scope.formInputs.password != $scope.confirmPassword) {
	        	form.$valid = false;
	        	form.confirmPassword.$invalid = true;
	        	form.password.$invalid = true;
	        	$scope.screenState.error = {message:'Password and Confirm Password must be equals!', class:'alert-danger'};
	        }

	        formHelpers.setDirty(form);
	        
	        if(form.$valid) {
	        	authService.createRegister($scope.formInputs, function(response) {
	        		$scope.screenState.success = {message:'Register successfully done!', class:'alert-success', icon:'fa-check'}
	        		$scope.screenState.error = null;
	        		cleanForm();	        		
	        	}, function(response) {
	        		$scope.screenState.error = {message:'An unexpected error occurred. Please try again', class:'alert-danger'};
	        		$scope.screenState.success = null;
	        	});
	        }
	    };
	    
	    var cleanForm = function () {
			$scope.formInputs = {
					email: null,
					firstName: null,
					lastName: null,
					phone: null,
					password: null
				};
			$scope.screenState.canSave = false;
			$scope.confirmPassword = null;
	    }
	    
	    $scope.createRegister = createRegister;
	    $scope.verifyEmail = verifyEmail;
	 } else {
		 if($routeParams.error) {
     		$scope.screenState.error = {message:'Email and Password is incorrect!', class:'alert-danger'};			 
		 }
	 }
    
	var modelForgot = null;
	var openModelForgot = function() {
		cleanScreenState();
		 modelForgot = $modal.open({
	            templateUrl: '/modules/pages/auth/view/modals/forgot-password.html',
	            controller: 'ForgotController',
	            size: 'sm',
	            scope: $scope
        });
    };

    var cleanScreenState = function () {
    	$scope.screenState = {
    			success:null,
    			error:null,
    			alert:null,
    			canSave:false
    	};	
    }
    
    $scope.openModelForgot = openModelForgot;
}]);
