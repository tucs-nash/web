TUCS.user.factory('UserService', ['$http',function($http) {

    return {
    	getUserDetails:function(successCallback, errorCallback) {
            $http.get('/user').success(function(response) {
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

