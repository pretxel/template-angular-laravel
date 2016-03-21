angular
    .module('myApp')
    .factory('userFactory', userFactory);

userFactory.$inject = [];
function userFactory() { 

	var user = { 
		firstName : "Erick",
		lastName : "Flores Nava"	
	};

	var service = {
		getUser: getUser,
		getFirstName: getFirstName,
		setFirstName: setFirstName,
		getLastName: getLastName,
		setLastName: setLastName
	};

	return service;

	function getUser() {
		return user;
	}

    function getFirstName() {
    	return user.firstName;
    };

    function setFirstName(firstName) {
    	user.firstName = firstName;
    };

    function getLastName() {
    	return user.firstName;
    };

    function setLastName(lastName) {
    	user.lastName = lastName;
    };
}