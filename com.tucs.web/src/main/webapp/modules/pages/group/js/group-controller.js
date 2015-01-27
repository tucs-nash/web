TUCS.group.controller('GroupController', ['$rootScope','$scope','$routeParams', '$modalInstance', 'CoreService','GroupService',
    function($rootScope,$scope,$routeParams,$modalInstance,coreService,groupService) {
	
	$scope.modal = {
			modalState: {
				error:null,
				alert:null,
				collapse:true,
				addedPart:false,
				title: 'LABEL_GROUP_TITLE_ADD',
				alertMsg: 'MESSAGE_ALERT_ADD_PARTICIPANT',
				labelAction: 'LABEL_GROUP_CREATE'
			},
			formGroup: {},
			formParticipant: {
					id : null,
					group: null,
					user: {email: null},
					deleted: false,
					profile: null
			},
			deleteds : [],
			groupParent : null
	}
	
	groupService.getParticipantGroupLookup($scope.modalParam.control, function(data){
		$scope.modal.profiles = data.profiles;
		$scope.modal.controlName = data.nameControl;
		$scope.modal.groupParent = {id: data.group.id};
	}, function() {
		$scope.modal.modalState.error = {message: "MESSAGE_DEFAUT_UNEXPECTED", class: "alert-danger"}
	});

	if ($scope.modalParam.group != null) {
		$scope.modal.modalState.labelAction = 'LABEL_GROUP_EDIT';
		$scope.modal.modalState.alertMsg = 'MESSAGE_ALERT_EDIT_PARTICIPANT';
		$scope.modal.modalState.title = 'LABEL_GROUP_EDIT_GROUP_TITLE';
		groupService.getGroup($scope.modalParam.group, function(data){
			$scope.modal.formGroup = data;
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
				enParticipants : []
		};
	}
	
	var addParticipant = function() {
		if (!$scope.groupForm.participantemail.$invalid) {
			var participants = $scope.modal.formGroup.enParticipants;
			var hasParticipant = false;

			for (var i = 0; i < participants.length; i++) {
				if (participants[i].email == $scope.modal.formParticipant.user.email) {
					hasParticipant = true;
				}
			}
			if (!hasParticipant) {
				groupService.addParticipant($scope.modal.formParticipant, function(response) {
					$scope.modal.formGroup.enParticipants.push(response);
					$scope.modal.modalState.addedPart = true;
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

	var editParticipant = function(row) {
		$scope.modal.modalState.collapse = false;
		var index = $scope.modal.formGroup.enParticipants.indexOf(row);
		$scope.modal.formParticipant = $scope.modal.formGroup.enParticipants[index];
	}
	
	var deleteParticipant = function(row) {
		var index = $scope.modal.formGroup.enParticipants.indexOf(row);
		var del= $scope.modal.formGroup.enParticipants[index];

		$scope.modal.formGroup.enParticipants.splice(index,1);
		
		if (del.id != null) {
			del.deleted = true;
			$scope.modal.deleteds.push(del);			
		}
	}
	
	var submitForm = function() {
		var form = $scope.groupForm;    
		coreService.setDirty(form);
        if(form.$valid) {
        	$scope.modal.formGroup.groupParent = $scope.modal.groupParent
        	if ($scope.modal.formGroup.id == null) {
        		groupService.createGroup($scope.modal.formGroup, function(response) {
        			closeModal();
        			$scope.getControlDetails();
        		}, function(response) {
        			$scope.modal.modalState.error = {message:'MESSAGE_PARTICIPANT_EXIST', class:'alert-danger'};
        		});
        	} else {
        		$scope.modal.formGroup.enParticipants = $scope.modal.formGroup.enParticipants.concat($scope.modal.deleteds);
        		groupService.updateGroup($scope.modal.formGroup, function(response) {
        			closeModal();
        			$scope.getControlDetails();
        		}, function(response) {
        			$scope.modal.modalState = {message:'MESSAGE_DEFAUT_UNEXPECTED', class:'alert-danger'};
        		});        		
        	}
	    };
	}
    
	var doneAddParticipant = function() {
		$scope.modal.modalState.collapse = true;
		if ($scope.modal.modalState.addedPart) {
			$scope.modal.modalState.alert = {message: $scope.modal.modalState.alertMsg, class: "alert-info"}					
		}
	}

	var closeModal = function() {
		$scope.modal = null;
        $modalInstance.dismiss('cancel');
    }
    
	
	$scope.modal.editParticipant  = editParticipant ;
	$scope.modal.deleteParticipant = deleteParticipant ;
	$scope.modal.doneAddParticipant = doneAddParticipant;
	$scope.modal.addParticipant = addParticipant;
	$scope.modal.submitForm = submitForm;
	$scope.closeModal = closeModal;
	
}]);
