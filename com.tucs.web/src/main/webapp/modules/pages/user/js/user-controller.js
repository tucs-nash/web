TUCS.user.controller('UserController', ['$rootScope','$scope','$routeParams', 'FormHelpers','UserService', 
    function($rootScope,$scope,$routeParams,formHelpers,userService) {
	
	$scope.screenState = {
			success:null,
			error:null
	};
	
	userService.getUserDetails(function(data){
        $scope.user = data;
    }, function() {
        $scope.screenState.error = {
            message: "Sorry there has been an error trying to retrieve the user details, please try again",
            class: "alert-danger"
        }
    });
	
	var updateUserDetails = function() {
		
	}

	$scope.updateUserDetails = updateUserDetails;
}]);
