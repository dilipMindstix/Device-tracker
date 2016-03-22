var app = angular.module('MainApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
            templateUrl: 'views/sign-in.html',
            controller: 'signInController'
    }).

    otherwise({ redirectTo: '/' });
}]);
