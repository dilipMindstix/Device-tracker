/*******************************************************************************
 * Copyright (c) 2016 Device Tracker, Inc. All rights reserved.
 ******************************************************************************/

var HttpCommunicationUtil = function($http, $rootScope) {
	var factory = {};
	var baseUrl = context + "api/1.0/";
	factory.doPost = function(url, data, successCallbackFunction, errorCallbackFunction) {
		$http.post(baseUrl + url, data)
		.success( function(data, status, headers, config) {

		})

		.error(function(data, status, headers, config) {

		});
	}
}