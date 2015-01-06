TUCS.index.factory('IndexService', ['$http',function($http) {

    return {
    	verifyInitialControlMonthly:function(successCallback, errorCallback) {
            $http.get('/index/verify').success(function(response) {
                successCallback(response);
            }).error(function(response) {
                errorCallback(response);
            });
        }
    }	
}]);

