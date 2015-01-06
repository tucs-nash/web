TUCS.control.factory('ControlService', ['$http',function($http) {

    return {
    	getControlLookups:function(successCallback, errorCallback) {
            $http.get('/control/lookups').success(function(response) {
                successCallback(response);
            }).error(function(response) {
                errorCallback(response);
            });
        },
        getControl:function(id, successCallback, errorCallback) {
	    	$http.post('/control/{id}').success(function(response) {
	    		successCallback(response);
	    	}).error(function(response) {
	    		errorCallback(response);
	    	});
	    }
    }	
}]);

