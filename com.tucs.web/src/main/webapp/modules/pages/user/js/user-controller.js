TUCS.user.controller('UserController', ['$rootScope','$scope','$routeParams', 'CoreService','UserService', 
    function($rootScope,$scope,$routeParams,coreService,userService) {
	
	$scope.screenState = {
			success:null,
			error:null
	};
	
	userService.getUserLookups(function(data){
		$scope.accounts = data.accounts;
		$scope.languages = data.languages;
	}, function() {
		$scope.screenState.error = {
				message: "MESSAGE_DEFAUT_UNEXPECTED",
				class: "alert-danger"
		}
	}),
	
	userService.getUserDetails(function(data){
        $scope.user = data;
        $scope.title = data.firstName + ' ' + data.lastName;
        $scope.oldPassword = null;
        $scope.newPassword = null;
        $scope.confirmNewPassword = null;
    }, function() {
        $scope.screenState.error = {
            message: "MESSAGE_DEFAUT_UNEXPECTED",
            class: "alert-danger"
        }
    });
	
	var cleanUserDetailsForm = function () {
		$scope.user = {
				firstName: null,
				lastName: null,
				phone: null,
			};
    };
	
	var updateUserPersonalDetails = function() {
		
		var form = $scope.userDetailsForm;
		
		coreService.setDirty(form);
		
		if(form.$valid) {
        	userService.updateUserDetails($scope.user, function(response) {
        		$scope.screenState.success = {message:'MESSAGE_REGISTER_SUCCESS', class:'alert-success', icon:'fa-check'}
        		$scope.screenState.error = null;
        		cleanUserDetailsForm();	        		
        	}, function(response) {
        		$scope.screenState.error = {message:'MESSAGE_DEFAUT_UNEXPECTED', class:'alert-danger'};
        		$scope.screenState.success = null;
        	});
        }
		
	};
	
	var updateUserPassword = function() {
		var form = $scope.changePassworForm;
        
        if ($scope.newPassword != $scope.confirmPassword) {
        	form.$valid = false;
        	form.confirmNewPassword.$invalid = true;
        	form.newPassword.$invalid = true;
        	$scope.screenState.error = {message:'MESSAGE_REGISTER_ERROR_PASSWORD_VALID', class:'alert-danger'};
        }

        coreService.setDirty(form);
        
        if(form.$valid) {
        	$scope.user.password = $scope.newPassword;
        	userService.updateUserDetails($scope.user, function(response) {
        		$scope.screenState.success = {message:'MESSAGE_REGISTER_SUCCESS', class:'alert-success', icon:'fa-check'}
        		$scope.screenState.error = null;
        		cleanChangePasswordForm();	        		
        	}, function(response) {
        		$scope.screenState.error = {message:'MESSAGE_DEFAUT_UNEXPECTED', class:'alert-danger'};
        		$scope.screenState.success = null;
        	});
        }
    };
    
    var cleanChangePasswordForm = function () {
		$scope = {
				oldPassword: null,
				newPassword: null,
				confirmNewPassword: null
			};
    };
    
    var verifyOldPassword = function() {
        if ($scope.oldPassword != null) {
        	userService.verifyPassword($scope.oldPassword, $scope.user, function (response) {
        		if (response) {
        			$scope.oldPassword.$invalid = true;
        			$scope.screenState.alert = {message:'MESSAGE_CHANGE_PASSWORD_OLD_PASSWORD_INVALID', class:'alert-info'};
        		} 
            }, function () {
            	
            });
        }
    };

	$scope.updateUserPersonalDetails = updateUserPersonalDetails;
	$scope.updateUserPassword = updateUserPassword;
}]);
