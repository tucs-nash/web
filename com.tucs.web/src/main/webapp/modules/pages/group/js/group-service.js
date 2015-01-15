TUCS.group.factory('GroupService', ['$http',function($http) {

    return {
    	getParticipantGroupLookup:function(control, successCallback, errorCallback) {
            $http.get('/group/participant/lookups/'+control).success(function(response) {
                successCallback(response);
            }).error(function(response) {
                errorCallback(response);
            });
        },
        getParticipant:function(participant, successCallback, errorCallback) {
	    	$http.get('/group/participant/'+participant).success(function(response) {
	    		successCallback(response);
	    	}).error(function(response) {
	    		errorCallback(response);
	    	});
	    },
	    createParticipant:function(participant, email, successCallback, errorCallback) {
        	$http.post('/group/participant/'+email+'/create', participant).success(function(response) {
        		successCallback(response);
        	}).error(function(response) {
        		errorCallback(response);
        	});
        },
        updateParticipant:function(participant, successCallback, errorCallback) {
	    	$http.post('/group/participant/update', participant).success(function(response) {
	    		successCallback(response);
	    	}).error(function(response) {
	    		errorCallback(response);
	    	});
	    },
	    addParticipant:function(participant, successCallback, errorCallback) {
	    	$http.post('/group/add-participant', participant).success(function(response) {
	    		successCallback(response);
	    	}).error(function(response) {
	    		errorCallback(response);
	    	});
	    },
	    createGroup:function(group, successCallback, errorCallback) {
        	$http.post('/group/create', group).success(function(response) {
        		successCallback(response);
        	}).error(function(response) {
        		errorCallback(response);
        	});
        },
        updateGroup:function(group, successCallback, errorCallback) {
	    	$http.post('/group/update', group).success(function(response) {
	    		successCallback(response);
	    	}).error(function(response) {
	    		errorCallback(response);
	    	});
	    }
    }	
}]);

