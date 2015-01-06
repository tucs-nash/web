TUCS.monthly = angular.module('tucs.monthly', [])
.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.
            when('/monthly/:id', {
                templateUrl: '/modules/pages/control-monthly/view/control-monthly.html',
                controller: 'ControlMonthlyController'
            });
    }]);