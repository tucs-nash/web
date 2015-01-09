TUCS.group.controller('GroupController', ['$rootScope','$scope','$routeParams', '$modal', 'FormHelpers','GroupService',
    function($rootScope,$scope,$routeParams,$modal,formHelpers,groupService) {
	
	$scope.screenState = {
			success:null,
			error:null,
			alert:null,
			modelError:null,
			canSave:false,
			cancelLink: '/index'
	};
		
	groupService.startGroup($routeParams.controlId, function(data){
		$scope.formInputs = data;
		$scope.controlName = data.control.name;
	}, function() {
		$scope.screenState.error = {
				message: "MESSAGE_DEFAUT_UNEXPECTED",
				class: "alert-danger"
		}
	});	
}]);
