'use strict'

var TUCS = TUCS || {Global:{}};


TUCS.App = angular.module('tucs.app', [
    'ngRoute',
    'ui.grid',
    'ui.bootstrap',
    'ui.date',
    'tucs.localisation',
    'tucs.ui',
    'tucs.auth',
    'tucs.index',
    'tucs.user',
    'tucs.control',
    'tucs.monthly',
    'tucs.group'
]);

TUCS.App.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
    }]);