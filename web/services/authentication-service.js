app.service( "authService", function(requestUtil) {
	this.login = function(loginData, callback) {
		HttpCommunicationUtil.doPost('/user/login', requestUtil.data, function(data, status) {

		},
		function() {

		});
	}
});