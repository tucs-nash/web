TUCS.index = angular.module('tucs.index', [])
.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.
            when('/', {
            	redirectTo: '/index' 
            }).
            when('/index', {
            	templateUrl: '/modules/pages/index/view/index.html',
            	controller: 'IndexController'
        });
    }]);