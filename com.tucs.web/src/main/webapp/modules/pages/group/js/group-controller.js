TUCS.group.controller('GroupController', ['$rootScope','$scope','$routeParams', '$modal', 'FormHelpers','GroupService',
    function($rootScope,$scope,$routeParams,$modal,formHelpers,groupService) {
	
	$scope.screenState = {
			success:null,
			error:null,
			alert:null,
			canSave:false
	};
	
}]);
