TUCS.category = angular.module('tucs.category', [])
.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider.
            when('/category/:controlId/add', {
                templateUrl: '/modules/pages/category/view/category-add-update.html',
                controller: 'CategoryController'
            }).
            when('/category/:categoryId/update', {
	        	templateUrl: '/modules/pages/category/view/category-add-update.html',
	        	controller: 'CategoryController'
        });
    }]);