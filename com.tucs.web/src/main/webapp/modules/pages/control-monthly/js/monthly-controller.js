TUCS.monthly.controller('ControlMonthlyController', ['$rootScope','$scope','$routeParams', '$modal', 'CoreService','ControlMonthlyService',
    function($rootScope,$scope,$routeParams,$modal,coreService,controlMonthlyService) {
	
	$scope.test = coreService.getControl();
	$scope.screenState = {
			success:null,
			error:null,
			alert:null
	};

	controlMonthlyService.getMonthlyCurrent(coreService.getControl(), function(data){
		$scope.monthly = data;
	}, function() {
		$scope.screenState.error = { message: "MESSAGE_DEFAUT_UNEXPECTED", class: "alert-danger" }
	});

}]);
