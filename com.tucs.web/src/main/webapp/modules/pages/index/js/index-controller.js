TUCS.index.controller('IndexController', ['$rootScope','$scope','$routeParams', '$modal', '$window','IndexService', 
    function($rootScope,$scope,$routeParams,$modal,$window,indexService) {
	    var today = new Date();
	    var year = today.getFullYear();
	    var month = 1 + today.getMonth();

		indexService.verifyInitialControlMonthly(function(data){
			if (data == null || data.length == 0) {
				$window.location.href = '/control';
			} else if (data.lengh > 1) {
				$window.location.href = '/index/default';
				//openModalSelectControl(data);
			} else {
				$window.location.href = '/index/default';
				//$window.location.href = '/monthly/'+data.id;
			}
	    }, function() {
	        $scope.screenState.error = {
	            message: "MESSAGE_DEFAUT_UNEXPECTED",
	            class: "alert-danger"
	        }
	    });
	}
]);
