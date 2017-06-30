directPortalApp.factory('contactAddressesServices', function ($http, __env) {
    var contactAddressesServices = {};
    contactAddressesServices.get = function (successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.get(__env.apiUrl + 'api/ContactAddressType').then(successCallback, errorCallback);
    };
    
    contactAddressesServices.create = function (id, entity, model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/' + entity + '/ContactAddresses/' + id, model).then(successCallback, errorCallback);
        //$http.get(__env.apiUrl + 'api/ContactDetailType').then(successCallback, errorCallback);
    };

    return contactAddressesServices;
});