TUCS.category.controller('CategoryController', ['$rootScope','$scope','$routeParams', '$modalInstance' ,'FormHelpers','CategoryService',
    function($rootScope,$scope,$routeParams,$modalInstance,formHelpers,categoryService) {
	
	$scope.modal = {
			modalState: {
				error:null,
				title: 'LABEL_CATEGORY_TITLE_ADD',
				labelAction: 'LABEL_CATEGORY_CREATE'
			},
			formInputs: {}
	}
	

	categoryService.getCategoryLookup($scope.modalParam.control, $scope.modalParam.category, function(data){
		$scope.categories = data.categories;
		$scope.controlName = data.nameControl;
		$scope.closing = data.hasClosing;
	}, function() {
		$scope.screenState.error = { message: "MESSAGE_DEFAUT_UNEXPECTED", class: "alert-danger"}
	});

	if ($scope.modalParam.category != null) {
		$scope.modal.modalState.labelAction = 'LABEL_CATEGORY_EDIT';
		$scope.modal.modalState.title = 'LABEL_CATEGORY_TITLE_EDIT';
		categoryService.getCategory($scope.modalParam.category, function(data){
			$scope.modal.formInputs = data;
		}, function() {
			$scope.modal.modalState.error = { message: "MESSAGE_DEFAUT_UNEXPECTED", class: "alert-danger" }
		});
	} else {
		$scope.modal.formInputs = {
				id : null,
				name: null,
				description: null,
				budget: null,
				parent: null,
				control: {id: $scope.modalParam.control}
		};
	}
		
	var submitForm = function() {
		var form = $scope.categoryForm;    
		formHelpers.setDirty(form);
        if(form.$valid) {
        	if ($scope.modal.formInputs.id == null) {
        		categoryService.createCategory($scope.modal.formInputs, function(response) {
        			closeModal();
        			$scope.getControlDetails();
        		}, function(response) {
        			$scope.modal.modalState = {message:'MESSAGE_DEFAUT_UNEXPECTED', class:'alert-danger'};
        		});
        	} else {
        		categoryService.updateCategory($scope.modal.formInputs, function(response) {
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
