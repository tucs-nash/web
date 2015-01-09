TUCS.control.controller('ControlDetailsController', ['$rootScope','$scope','$routeParams', 'FormHelpers','ControlService',  
    function($rootScope,$scope,$routeParams,formHelpers,controlService) {
	
	$scope.screenState = {
			success:null,
			error:null,
			alert:null
	};

	controlService.getControlDetails(controlId, function(data){
		$scope.controlDetails = data;
	}, function() {
		$scope.screenState.error = {
				message: "MESSAGE_DEFAUT_UNEXPECTED",
				class: "alert-danger"
		}
	});
}]);
