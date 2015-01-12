TUCS.partic = angular.module('tucs.partic', [])
.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.
            when('/participant/:controlId/add', {
                templateUrl: '/modules/pages/X/view/X.html',
                controller: 'XController'
            }).
            when('/participant/:participantId/update', {
	        	templateUrl: '/modules/pages/category/view/category-add-update.html',
	        	controller: 'CategoryController'
            });
    }]);