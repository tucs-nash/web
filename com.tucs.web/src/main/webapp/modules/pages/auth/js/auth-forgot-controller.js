TUCS.auth.controller('ForgotController', ['$rootScope','$scope','$routeParams', '$modalInstance' ,'FormHelpers','AuthService',
    function($rootScope,$scope,$routeParams,$modalInstance,formHelpers,authService) {

		$scope.email = null;
		
		var forgotPassword = function() {
			var form = $scope.forgotPasswordForm;	        
	        formHelpers.setDirty(form);
	        
	        if(form.$valid) {
	        	authService.forgotPassword($scope.email, function(response) {
            		if (response) {
            			$scope.screenState.success = {message:'MESSAGE_FORGOT_SUCCESS', class:'alert-success', icon:'fa-check'}
            			$scope.screenState.modelError = null;
            			closeModal();	        		
            		} else {
            			$scope.screenState.modelError = {message:'MESSAGE_FORGOT_ERROR_VALID', class:'alert-danger'};
            			$scope.screenState.success = null;
            		}
	        	}, function(response) {
	        		$scope.screenState.modelError = {message:'MESSAGE_DEFAUT_UNEXPECTED', class:'alert-danger'};
	        		$scope.screenState.success = null;
	        	});
	        }
	    };
	    
	    var closeModal = function() {
	        $modalInstance.dismiss('cancel');
	    }
	    
	    $scope.forgotPassword = forgotPassword;
	    $scope.closeModal = closeModal;
}]);
