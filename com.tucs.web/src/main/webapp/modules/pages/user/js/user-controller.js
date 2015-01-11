TUCS.user.controller('UserController', ['$rootScope','$scope','$routeParams', 'FormHelpers','UserService', 
    function($rootScope,$scope,$routeParams,formHelpers,userService) {
	
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
    }, function() {
        $scope.screenState.error = {
            message: "MESSAGE_DEFAUT_UNEXPECTED",
            class: "alert-danger"
        }
    });
	
	var updateUserDetails = function() {
		
	}

	$scope.updateUserDetails = updateUserDetails;
}]);
