TUCS.group = angular.module('tucs.group', [])
.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.
            when('/participant/add/:controlId', {
            	templateUrl: '/modules/pages/group/view/group-add-update.html',
            	controller: 'GroupController'
            }).
            when('/group/add/:controlId', {
            	templateUrl: '/modules/pages/group/view/group-add-update.html',
            	controller: 'GroupController'
            }).
	        when('/group/:groupId', {
	        	templateUrl: '/modules/pages/group/view/group-add-update.html',
	        	controller: 'GroupController'
        });
    }]);