TUCS.group = angular.module('tucs.group', [])
.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.
            when('/group/:controlId/add', {
            	templateUrl: '/modules/pages/group/view/group-add-update.html',
            	controller: 'GroupController'
            }).
	        when('/group/:groupId/update', {
	        	templateUrl: '/modules/pages/group/view/group-add-update.html',
	        	controller: 'GroupController'
        });
    }]);