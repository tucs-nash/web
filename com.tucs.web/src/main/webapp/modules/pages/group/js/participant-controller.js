TUCS.group.controller('ParticController', ['$rootScope','$scope','$routeParams', '$modalInstance', 'CoreService','GroupService', 
    function($rootScope,$scope,$routeParams,$modalInstance,coreService,groupService) {
	
	$scope.modal = {
			modalState: {
				error:null,
				alert:null,
				title: 'LABEL_GROUP_ADD_PARTICIPANT_TITLE',
				labelAction: 'LABEL_GROUP_ADD_PARTICIPANT'
			},
			formInputs: {},
			email: null
	}
	

	groupService.getParticipantGroupLookup($scope.modalParam.control, function(data){
		$scope.modal.profiles = data.profiles;
		$scope.modal.controlName = data.nameControl;
		$scope.modal.formInputs.group = data.group;
	}, function() {
		$scope.modal.modalState.error = { message: "MESSAGE_DEFAUT_UNEXPECTED", class: "alert-danger" }
	});

	if ($scope.modalParam.participant != null) {
		$scope.modal.modalState.labelAction = 'LABEL_GROUP_EDIT_PARTICIPANT';
		$scope.modal.modalState.title = 'LABEL_GROUP_EDIT_PARTICIPANT_TITLE';
		groupService.getParticipant($scope.modalParam.participant, function(data){
			$scope.modal.formInputs = data;
			$scope.modal.email = data.user.email;
		}, function() {
			$scope.modal.modalState.error = { message: "MESSAGE_DEFAUT_UNEXPECTED", class: "alert-danger"}
		});
	} else {
		$scope.modal.formInputs = {
				id : null,
				group: null,
				user: null,
				profile: null
		};
	}
		
	var submitForm = function() {
		var form = $scope.participantForm;    
		coreService.setDirty(form);
        if(form.$valid) {
        	if ($scope.modal.formInputs.id == null) {
        		groupService.createParticipant($scope.modal.formInputs, $scope.modal.email, function(response) {
        			closeModal();
        			$scope.getControlDetails();
        		}, function(response) {
        			$scope.modal.modalState.error = {message:'MESSAGE_PARTICIPANT_EXIST', class:'alert-danger'};
        		});
        	} else {
        		groupService.updateParticipant($scope.modal.formInputs, function(response) {
        			closeModal();
        			$scope.getControlDetails();
        		}, function(response) {
        			$scope.modal.modalState = {message:'MESSAGE_DEFAUT_UNEXPECTED', class:'alert-danger'};
        		});        		
        	}
	    };
	}
    
	var closeModal = function() {
		$scope.modal = null;
        $modalInstance.dismiss('cancel');
    }
    
	
	$scope.modal.submitForm = submitForm;
	$scope.closeModal = closeModal;
}]);
