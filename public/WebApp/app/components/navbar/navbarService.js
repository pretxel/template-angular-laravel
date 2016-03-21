angular
    .module('myApp')
    .factory('navbarFactory', navbarFactory);

navbarFactory.$inject = [];
function navbarFactory() { 

	/* private functions */
	var testPrivateMethod = testPrivateMethod;

	/* public functions */
	var service = {
		testPublicMethod: testPublicMethod,
        testPublicMethod2: testPublicMethod2
	};

	return service;

    function testPublicMethod(params) {
        return null;
    };

    function testPublicMethod2(params) {
        return null;
    };

    function testPrivateMethod(params) {
    	return null;
    };
}