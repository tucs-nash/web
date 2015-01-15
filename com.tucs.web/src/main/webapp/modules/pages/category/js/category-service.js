TUCS.category.factory('CategoryService', ['$http',function($http) {

    return {
	    getCategoryLookup:function(controlId, categoryId, successCallback, errorCallback) {
	    	$http.get('/category/lookup/'+controlId+'/'+categoryId).success(function(response) {
	    		successCallback(response);
	    	}).error(function(response) {
	    		errorCallback(response);
	    	});
	    },
	    getCategory:function(id, successCallback, errorCallback) {
	    	$http.get('/category/'+id).success(function(response) {
	    		successCallback(response);
	    	}).error(function(response) {
	    		errorCallback(response);
	    	});
	    },
	    createCategory:function(control, successCallback, errorCallback) {
        	$http.post('/category/create', control).success(function(response) {
        		successCallback(response);
        	}).error(function(response) {
        		errorCallback(response);
        	});
        },
        updateCategory:function(control, successCallback, errorCallback) {
	    	$http.post('/category/update', control).success(function(response) {
	    		successCallback(response);
	    	}).error(function(response) {
	    		errorCallback(response);
	    	});
	    }
    }	
}]);

