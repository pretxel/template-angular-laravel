angular
	.module('myApp')
	.controller('LoginController', LoginController); 

LoginController.$inject = ['$http','loginFactory', '$scope'];
function LoginController($http, loginFactory, $scope) {
	var login = this;

	login.userName = ''; 
	login.userPassword = '';
  login.callLogin = callLogin;

	function callLogin() {

    $scope.$broadcast('show-errors-check-validity');
    
    if ($scope.loginForm.$valid) {
      var userObj = {
        email: login.userName,
        password: login.userPassword
      };

      loginFactory.callLogin(userObj)
      .then(function(data){
        if(debugMode) console.log(data);
        $('.login_txtError').text('');
        $('.login_errorField').hide();

      }, function(errorMessage) {
        if(debugMode) console.error("failure message: " + errorMessage);
        $('.login_txtError').text(errorMessage);
        $('.login_errorField').show();

      });
    }

	}
}