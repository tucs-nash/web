TUCS.user.factory('UserService', ['$http',function($http) {

    return {
    	
    	getUserLookups:function(successCallback, errorCallback) {
            $http.get('/user/lookups').success(function(response) {
                successCallback(response);
            }).error(function(response) {
                errorCallback(response);
            });
        },
    	getUserDetails:function(successCallback, errorCallback) {
            $http.get('/user/user-details').success(function(response) {
            	response.phone = parseInt(response.phone);
                successCallback(response);
            }).error(function(response) {
                errorCallback(response);
            });
        },
        updateUserDetails:function(user, successCallback, errorCallback) {
            $http.post('/user/update', user).success(function(response) {
                successCallback(response);
            }).error(function(response) {
                errorCallback(response);
            });        	
        }
    }	
}]);

