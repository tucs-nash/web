TUCS.transac.controller('TransacController', ['$rootScope','$scope','$routeParams', '$modal', 'CoreService','TransacService', 
    function($rootScope,$scope,$routeParams,$modal,coreService,transacService) {
	
	$scope.screenState = {
			success:null,
			error:null,
			alert:null
	};
	
	$scope.filter = {
		month: null,
		year: null,
		category: null,
		participant: null,
		group: null
	}

	transacService.getTransactionsMonthly(coreService.getControl(), filter, function(data){
		$scope.monthly = data;
	}, function() {
		$scope.screenState.error = { message: "MESSAGE_DEFAUT_UNEXPECTED", class: "alert-danger" }
	});
	
}]);
