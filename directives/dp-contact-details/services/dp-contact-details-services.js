directPortalApp.factory('contactDetailsTypeServices', function ($http, __env) {
    var contactDetailsTypeServices = {};
    contactDetailsTypeServices.get = function (successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.get(__env.apiUrl + 'api/ContactDetailType').then(successCallback, errorCallback);
    };
    contactDetailsTypeServices.create = function (id, entity, model,successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/' + entity+'/contactdetails/' + id, model).then(successCallback, errorCallback);
        //$http.get(__env.apiUrl + 'api/ContactDetailType').then(successCallback, errorCallback);
    };

    return contactDetailsTypeServices;
});