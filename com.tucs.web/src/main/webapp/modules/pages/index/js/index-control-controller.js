TUCS.index.controller('IndexSelectController', ['$rootScope','$scope','$routeParams', '$window', '$modalInstance', 'CoreService','IndexService',
    function($rootScope,$scope,$routeParams,$window,$modalInstance,coreService,indexService) {

	$scope.controls = $scope.modalParam.controls;
	$scope.selectedControl = null;
	
	var selectControl = function () {
		if ($scope.selectedControl != null) {
			coreService.setControl($scope.selectedControl.id);
			$window.location.href = '/monthly/'+$scope.selectedControl.id;
			
		}
	}
	
	var closeModal = function() {
        $modalInstance.dismiss('cancel');
        $window.history.back();
    }
    
	
	$scope.selectControl = selectControl;
	$scope.closeModal = closeModal;
}]);
