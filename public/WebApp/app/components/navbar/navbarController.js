angular
	.module('myApp')
	.controller('NavbarController', NavbarController);

NavbarController.$inject = ['$scope'];
function NavbarController($scope) {
	$scope.navbarCollapsed = true;
}