TUCS.group.controller('GroupController', ['$rootScope','$scope','$routeParams', '$modalInstance', 'FormHelpers','GroupService',
    function($rootScope,$scope,$routeParams,$modalInstance,formHelpers,groupService) {
	
	$scope.modal = {
			modalState: {
				error:null,
				alert:null,
				collapse:true,
				title: 'LABEL_GROUP_TITLE_ADD',
				labelAction: 'LABEL_GROUP_CREATE'
			},
			formGroup: {},
			formParticipant: {
					id : null,
					group: null,
					user: {email: null},
					profile: null
			},
			email: null
	}
	
	groupService.getParticipantGroupLookup($scope.modalParam.control, function(data){
		$scope.modal.profiles = data.profiles;
		$scope.modal.controlName = data.nameControl;
		$scope.modal.formGroup.groupParent = data.group;
	}, function() {
		$scope.modal.modalState.error = {message: "MESSAGE_DEFAUT_UNEXPECTED", class: "alert-danger"}
	});

	if ($scope.modalParam.group != null) {
		$scope.modal.modalState.labelAction = 'LABEL_GROUP_EDIT';
		$scope.modal.modalState.title = 'LABEL_GROUP_EDIT_GROUP_TITLE';
		groupService.getGroup($scope.modalParam.group, function(data){
			$scope.modal.formInputs = data;
		}, function() {
			$scope.modal.modalState.error = {message: "MESSAGE_DEFAUT_UNEXPECTED",class: "alert-danger"}
		});
	} else {
		$scope.modal.formGroup = {
				id : null,
				name: null,
				description: null,
				groupParent: null,
				control: {id: $scope.modalParam.control},
				enParticipants : {}
		};
	}
	
	var addParticipant = function() {
		if (!$scope.groupForm.participantemail.$invalid) {
			var participants = $scope.modal.formGroup.enParticipants;
			var hasParticipant = false;
			for (var i = 0; i < participants.lenght; i++) {
				if (participants[i].email == $scope.modal.formParticipant.user.email) {
					hasParticipant = true;
				}
			}
			if (!hasParticipant) {
				groupService.addParticipant($scope.modal.formParticipant.user, function(response) {
					$scope.modal.formGroup.enParticipants[participants.lenght] = response;
				}, function(response) {
					$scope.modal.modalState.error = {message: "MESSAGE_DEFAUT_UNEXPECTED",class: "alert-danger"}
				});							
			} else {
				$scope.modal.modalState.error = {message:'MESSAGE_PARTICIPANT_EXIST', class:'alert-danger'};
				$scope.modal.formGroup.formParticipant.user.email = null; 
				$scope.modal.formGroup.formParticipant.profile = null; 
			}
		} 
	}

	var submitForm = function() {
		if (modal.modalState.collapse) {
			$scope.modal.modalState = {message:'MESSAGE_CANCEL_ADD_PARTICIPANT', class:'alert-danger'};
		}
		
		var form = $scope.groupForm;    
		formHelpers.setDirty(form);
        if(form.$valid) {
        	if ($scope.modal.formInputs.id == null) {
        		groupService.createGroup($scope.modal.formGroup, function(response) {
        			closeModal();
        			$scope.getControlDetails();
        		}, function(response) {
        			$scope.modal.modalState.error = {message:'MESSAGE_PARTICIPANT_EXIST', class:'alert-danger'};
        		});
        	} else {
        		groupService.updateGroup($scope.modal.formGroup, function(response) {
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
    
	
	$scope.modal.addParticipant = addParticipant;
	$scope.modal.submitForm = submitForm;
	$scope.closeModal = closeModal;
	
}]);
