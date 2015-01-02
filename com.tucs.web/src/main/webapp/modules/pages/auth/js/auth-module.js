TUCS.auth = angular.module('tucs.auth', [])
.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.
            when('/login', {
                templateUrl: '/modules/pages/auth/view/login.html',
                controller: 'RegisterController',
                resolve: {
                    page: function () {
                        return "login";
                    }
                }
            }).
            when('/register', {
                templateUrl: '/modules/pages/auth/view/register.html',
                controller: 'RegisterController',
                resolve: {
                    page: function () {
                        return "register";
                    }
                }
            });
    }]);