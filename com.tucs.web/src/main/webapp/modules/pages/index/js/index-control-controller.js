TUCS.index.controller('IndexSelectController', ['$rootScope','$scope','$routeParams', '$window', '$modalInstance', 'FormHelpers','IndexService', 
    function($rootScope,$scope,$routeParams,$window,$modalInstance,formHelpers,indexService) {

	$scope.controls = $scope.modalParam.controls;
	$scope.selectedControl = null;
	
	var selectControl = function () {
		if ($scope.selectedControl != null) {
			$window.location.href = '/control/'+$scope.selectedControl.id+'/details';
			
		}
	}
	
	var closeModal = function() {
        $modalInstance.dismiss('cancel');
        $window.location.href = '/index/default';
    }
    
	
	$scope.selectControl = selectControl;
	$scope.closeModal = closeModal;
}]);
