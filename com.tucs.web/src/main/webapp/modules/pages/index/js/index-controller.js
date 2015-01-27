TUCS.index.controller('IndexController', ['$rootScope','$scope','$routeParams', '$window', '$modal','CoreService', 'IndexService',
    function($rootScope,$scope,$routeParams,$window,$modal,coreService,indexService) {

		indexService.verifyInitialControlMonthly(function(data){
			if (data == null || data.length == 0) {
				$window.location.href = '/control';
			} else if (data.length > 1) {
				openModalSelectControl(data);
			} else {
				//$window.location.href = '/control/'+data[0].id+'/details';
    			coreService.setControl(data[0].id);
				$window.location.href = '/monthly';
			}
	    }, function() {
	        $scope.screenState.error = {
	            message: "MESSAGE_DEFAUT_UNEXPECTED",
	            class: "alert-danger"
	        }
	    });
	    
	    var openModalSelectControl = function(controls) {
	    	$scope.modalParam = {
	    			controls:controls
	    	}
	    	$modal.open({
		            templateUrl: '/modules/pages/index/view/modals/select-control.html',
		            controller: 'IndexSelectController',
		            size: 'sm',
		            scope: $scope
			 });
	    };    
	}
]);
