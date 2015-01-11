TUCS.category.controller('CategoryController', ['$rootScope','$scope','$routeParams','$window','FormHelpers','CategoryService', 
    function($rootScope,$scope,$routeParams,$window,formHelpers,categoryService) {
	
	$scope.screenState = {
			success:null,
			error:null,
			alert:null,
			canSave:false
	};

	if ($routeParams.controlId == null) {
		
	} else {
		
	}
	
}]);
