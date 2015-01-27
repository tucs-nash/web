TUCS.monthly.factory('ControlMonthlyService', ['$http',function($http) {

    return {
    	getMonthlyCurrent:function(controlId, successCallback, errorCallback) {
            $http.get('/monthly/initial/'+controlId).success(function(response) {
                successCallback(response);
            }).error(function(response) {
                errorCallback(response);
            });
        }
    }	
}]);

