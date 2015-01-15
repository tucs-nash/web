TUCS.index.controller('IndexController', ['$rootScope','$scope','$routeParams', '$window', '$modal','IndexService', 
    function($rootScope,$scope,$routeParams,$window,$modal,indexService) {
	    var today = new Date();
	    var year = today.getFullYear();
	    var month = 1 + today.getMonth();

	    indexService.verifyInitialControlMonthly(function(data){
			if (data == null || data.length == 0) {
				$window.location.href = '/control';
			} else if (data.length > 1) {
				openModalSelectControl(data);
			} else {
				$window.location.href = '/control/'+data[0].id+'/details';
				//$window.location.href = '/monthly/'+data.id;
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
