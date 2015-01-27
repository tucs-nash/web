TUCS.control.controller('ControlDetailsController', ['$rootScope','$scope','$routeParams','$modal', 'CoreService','ControlService',  
    function($rootScope,$scope,$routeParams,$modal,coreService,controlService) {
	
	$scope.screenState = {
			success:null,
			error:null,
			alert:null
	};

	var getControlDetails = function() {
		controlService.getControlDetails(coreService.getControl(), function(data){
			$scope.controlDetails = data;
			$scope.groupActive = data.control.shared;
		}, function() {
			$scope.screenState.error = {
					message: "MESSAGE_DEFAUT_UNEXPECTED",
					class: "alert-danger"
			}
		});
	
	};
    var openModalCategory = function(controlId, categoryId) {
    	$scope.modalParam = {
    			category:categoryId,
    			control: controlId
    	}
    	$modal.open({
	            templateUrl: '/modules/pages/category/view/modals/category.html',
	            controller: 'CategoryController',
	            size: 'lg',
	            scope: $scope
		 });
    };
    var openModalParticipant = function(controlId, participantId) {
    	$scope.modalParam = {
    			participant:participantId,
    			control: controlId
    	}
    	$modal.open({
    		templateUrl: '/modules/pages/group/view/modals/participant.html',
    		controller: 'ParticController',
    		size: 'lg',
    		scope: $scope
    	});
    };

    var openModalGroup = function(controlId, groupId) {
    	$scope.modalParam = {
    			group:groupId,
    			control: controlId
    	}
    	$modal.open({
    		templateUrl: '/modules/pages/group/view/modals/group.html',
    		controller: 'GroupController',
    		size: 'lg',
    		scope: $scope
    	});
    };
    
    getControlDetails();
    
    $scope.openModalCategory = openModalCategory;
    $scope.openModalParticipant = openModalParticipant;
    $scope.openModalGroup = openModalGroup;
    $scope.getControlDetails = getControlDetails;

}]);
