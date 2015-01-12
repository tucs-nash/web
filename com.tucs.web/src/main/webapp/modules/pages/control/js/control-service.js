TUCS.control.factory('ControlService', ['$http',function($http) {

    return {
    	getControlLookups:function(successCallback, errorCallback) {
            $http.get('/control/lookups').success(function(response) {
                successCallback(response);
            }).error(function(response) {
                errorCallback(response);
            });
        },
        getControlDetails:function(id, successCallback, errorCallback) {
	    	$http.get('/control/details/'+id).success(function(response) {
	    		successCallback(response);
	    	}).error(function(response) {
	    		errorCallback(response);
	    	});
	    },
	    getControl:function(id, successCallback, errorCallback) {
	    	$http.get('/control/edit/'+id).success(function(response) {
	    		successCallback(response);
	    	}).error(function(response) {
	    		errorCallback(response);
	    	});
	    },
	    createControl:function(control, successCallback, errorCallback) {
        	$http.post('/control/create', control).success(function(response) {
        		successCallback(response);
        	}).error(function(response) {
        		errorCallback(response);
        	});
        },
        updateControl:function(control, successCallback, errorCallback) {
	    	$http.post('/control/update', control).success(function(response) {
	    		successCallback(response);
	    	}).error(function(response) {
	    		errorCallback(response);
	    	});
	    }
    }	
}]);

