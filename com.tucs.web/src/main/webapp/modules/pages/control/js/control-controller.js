TUCS.control.controller('ControlController', ['$rootScope','$scope','$routeParams', '$modal', 'FormHelpers','ControlService', 
    function($rootScope,$scope,$routeParams,$modal,formHelpers,controlService) {
	
	var controlId = $routeParams.controlId;
	
	$scope.screenState = {
			success:null,
			error:null,
			alert:null,
			modelError:null,
			canSave:false,
			cancelLink: "/logout"
	};
	
	controlService.getControlLookups(function(data){
		$scope.splities = data.splities;
		$scope.currencies = data.currencies;
		$scope.automatics = data.automatics;
	}, function() {
		$scope.screenState.error = {
				message: "MESSAGE_DEFAUT_UNEXPECTED",
				class: "alert-danger"
		}
	});
	
	if (controlId == null) {
		$scope.formInputs = {
				name: null,
				description: null,
				startDay: null,
				currency: null,
				shared: false,
				hasClosing: false,
				hasSaving: false,
				balanceDefault: null,
				automaticClosing: null,
				typeSplit: null
		};		
	} else {
		controlService.getControl(controlId, function(data){
			$scope.formInputs = data;
		}, function() {
			$scope.screenState.error = {
					message: "MESSAGE_DEFAUT_UNEXPECTED",
					class: "alert-danger"
			}
		});
	}

}]);
