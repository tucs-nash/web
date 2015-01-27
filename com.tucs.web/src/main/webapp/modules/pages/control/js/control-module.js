TUCS.control = angular.module('tucs.control', [])
.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.
            when('/control', {
            	templateUrl: '/modules/pages/control/view/control-add-update.html',
            	controller: 'ControlController' 
            }).
            when('/control/edit', {
            	templateUrl: '/modules/pages/control/view/control-add-update.html',
            	controller: 'ControlController'
            }).
            when('/control/details', {
            	templateUrl: '/modules/pages/control/view/control-details.html',
            	controller: 'ControlDetailsController'
        	});
    }]);