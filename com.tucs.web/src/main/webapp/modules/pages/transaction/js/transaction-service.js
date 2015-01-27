TUCS.transac.factory('TransacService', ['$http',function($http) {

    return {
    	getTransactionsMonthly:function(controlId, filter, successCallback, errorCallback) {
            $http.get('/transaction/'+controlId+'/search', filter).success(function(response) {
                successCallback(response);
            }).error(function(response) {
                errorCallback(response);
            });
        }
    }	
}]);

