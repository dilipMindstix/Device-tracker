app.controller("signInController", function ($scope, authService) {
	
	$scope.isUserExist = undefined;
	$scope.validateUserCredentials = function () {
		authService.login($scope.user, function(err, data) {
			
		});
	};
});