TUCS.user = angular.module('tucs.user', [])
.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.
            when('/user', {
                templateUrl: '/modules/pages/user/view/user.html',
                controller: 'UserController'
            });
    }]);