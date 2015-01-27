TUCS.monthly = angular.module('tucs.monthly', [])
.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.
            when('/monthly', {
                templateUrl: '/modules/pages/control-monthly/view/monthly.html',
                controller: 'ControlMonthlyController'
            });
    }]);