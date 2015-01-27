TUCS.transac = angular.module('tucs.transac', [])
.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.
            when('/transaction', {
                templateUrl: '/modules/pages/transaction/view/transaction-search.html',
                controller: 'TransacController'
            });
    }]);