TUCS.user = angular.module('tucs.index', [])
.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.
            when('/user', {
                templateUrl: '/modules/pages/user/view/user.html',
                controller: 'UserController'
            });
    }]);