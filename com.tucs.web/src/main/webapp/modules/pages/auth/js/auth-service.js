TUCS.auth.factory('AuthService', ['$http',function($http) {

    return {
    	createRegister:function(user, successCallback, errorCallback) {
            $http.post('/register', user).success(function(response) {
                successCallback(response);
            }).error(function(response) {
                errorCallback(response);
            });
        },
	    verifyEmail:function(email, successCallback, errorCallback) {
	    	$http.get('/register/'+ email + '/check-email').success(function(response) {
	    		successCallback(response);
	    	}).error(function(response) {
	    		errorCallback(response);
	    	});
	    },
	    forgotPassword:function(email, successCallback, errorCallback) {
	    	$http.get('/register/'+ email + '/forgot-password').success(function(response) {
	    		successCallback(response);
	    	}).error(function(response) {
	    		errorCallback(response);
	    	});
	    }
    }	
}]);

