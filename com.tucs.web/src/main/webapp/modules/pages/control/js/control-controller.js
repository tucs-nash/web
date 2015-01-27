TUCS.control.controller('ControlController', ['$rootScope','$scope','$routeParams', '$window', 'CoreService','ControlService',  
    function($rootScope,$scope,$routeParams,$window,coreService,controlService) {
	
	$scope.screenState = {
			success:null,
			error:null,
			alert:null,
			modelError:null,
			canSave:true,
			cancelLink: '/index',
			labelAction: 'LABEL_CONTROL_CREATE'
	};
	
	controlService.getControlLookups(function(data){
		$scope.splities = data.splities;
		$scope.currencies = data.currencies;
		$scope.automatics = data.automatics;
		$scope.startDays = data.startDays;
	}, function() {
		$scope.screenState.error = {
				message: "MESSAGE_DEFAUT_UNEXPECTED",
				class: "alert-danger"
		}
	});
	
	if (coreService.hasControl()) {
		$scope.screenState.labelAction = 'LABEL_CONTROL_EDIT';
		controlService.getControl(coreService.getControl().id, function(data){
			$scope.formInputs = data;
		}, function() {
			$scope.screenState.error = {
					message: "MESSAGE_DEFAUT_UNEXPECTED",
					class: "alert-danger"
			}
		});
	} else {
		$scope.formInputs = {
				id : null,
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
	}
	
	var submitForm = function() {
		var form = $scope.controlForm;    
		coreService.setDirty(form);
        if(form.$valid) {
        	if ($scope.formInputs.id == null) {
        		controlService.createControl($scope.formInputs, function(response) {
        			coreService.setControl(response.id);
        			$window.location.href = '/control/details';
        			$scope.screenState.error = null;
        		}, function(response) {
        			$scope.screenState.error = {message:'MESSAGE_DEFAUT_UNEXPECTED', class:'alert-danger'};
        		});
        	} else {
        		controlService.updateControl($scope.formInputs, function(response) {
        			$window.location.href = '/control/details';
        			$scope.screenState.error = null;
        		}, function(response) {
        			$scope.screenState.error = {message:'MESSAGE_DEFAUT_UNEXPECTED', class:'alert-danger'};
        		});        		
        	}
        }
    };
    $scope.submitForm = submitForm;
}]);
