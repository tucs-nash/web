TUCS.index = angular.module('tucs.index', [])
.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.
            when('/', {
            	redirectTo: '/index' 
            }).
            when('/index', {
            	templateUrl: '/modules/core/view/redirect-view.html',
            	controller: 'IndexController'
            }).
            when('/index/default', {
            	templateUrl: '/modules/pages/core/view/index.html',
            	controller: 'IndexController'
            });;
    }]);