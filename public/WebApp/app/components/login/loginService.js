angular
    .module('myApp')
    .factory('loginFactory', loginFactory);

loginFactory.$inject = ['$http','$q', 'myAppServer', 'myAppRestSevices', 'myAppMessages'];
function loginFactory($http, $q, myAppServer, myAppRestSevices, myAppMessages) { 

	/* private functions */
	var getUrl = getUrl;

	var service = {
		callLogin: callLogin
	};

	return service;

    function callLogin(userObj) {

    	$('#mainLoader').show();
    	$.blockUI({ message: '' });

    	var deferred = $q.defer();
	    
	    var res = $http.post(getUrl(userObj));

	    res.success(function (data, status, headers, config) {
	    	deferred.resolve(data);
	    	$('#mainLoader').hide();
	    	$.unblockUI();
	   	});

	    res.error(function (data, status, headers, config) {
	    	if(data != null)
	    		deferred.reject(data.error);
	    	else
	    		deferred.reject(myAppMessages.serviceError);

	    	$('#mainLoader').hide();
	    	$.unblockUI();
	    });

	    return deferred.promise;
    };

    function getUrl(userObj) {
    	var url = myAppServer + myAppRestSevices.session + myAppRestSevices.jsonExt + "?user[email]=" + userObj.email + "&user[password]=" + userObj.password;
    	return url;
    };
}