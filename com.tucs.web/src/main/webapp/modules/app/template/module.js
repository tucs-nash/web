TUCS.X = angular.module('tucs.X', [])
.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.
            when('/X', {
                templateUrl: '/modules/pages/X/view/X.html',
                controller: 'XController'
            });
    }]);