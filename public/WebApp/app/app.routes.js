// configure our routes
angular
	.module('myApp')
	.config(config);

config.$inject = ['$routeProvider', 'myAppPaths'];
function config($routeProvider, myAppPaths) {
	$routeProvider
	  .when(myAppPaths.login, {
	    templateUrl : 'app/components/login/loginView.html',
	    controller  : 'LoginController',
	    controllerAs: 'login'
	  })
	  .otherwise({
            redirectTo: myAppPaths.login
      })
	  ;
}