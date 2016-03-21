var myApp = angular
				.module('myApp', [
					'ui.bootstrap', 
					'ngAnimate', 
					'ngRoute'
				]);

var debugMode = true;

if(debugMode)
	myApp.constant('myAppServer', 'http://localhost:3000');
else
	myApp.constant('myAppServer', 'http://52.8.127.24');

/* Services */
myApp.constant('myAppRestSevices', {
	'session': '/users/login',
	'jsonExt': '.json'
});
/* Paths */
myApp.constant('myAppPaths', {
	'login': '/',
	'home': '/home'
});
/* Messages */
myApp.constant('myAppMessages', {
	'serviceError': 'Service error! Try later.',
	'dataError': 'Data error! Try later.',
	'noData': 'No information by the moment.',
	'tokenError': 'Invalid token.'
});
/* Constants */
myApp.constant('myAppConstants', {
	'CONSTANT1': 'constantTest',
	'CONSTANT2': 0
});

myApp.config(['$httpProvider', function($httpProvider) {
		$httpProvider.defaults.headers.common["Accept"] = "application/json";
		$httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    }
]);