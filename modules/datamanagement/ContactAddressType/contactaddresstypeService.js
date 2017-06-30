directPortalApp.factory('contactaddresstypeService', function ($http, __env) {
    var contactaddresstypeService = {};

    contactaddresstypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    contactaddresstypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddressType/' + id).then(successCallback, errorCallback);
    };

    contactaddresstypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddressType/Relationships/' + id).then(successCallback, errorCallback);
    };

    contactaddresstypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddressType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    contactaddresstypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddressType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    contactaddresstypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddressType/Translations/' + id).then(successCallback, errorCallback);
    };

    contactaddresstypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddressType/Notes/' + id).then(successCallback, errorCallback);
    };

    contactaddresstypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddressType/ByName/' + id).then(successCallback, errorCallback);
    };

    contactaddresstypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddressType/Activate/' + id).then(successCallback, errorCallback);
    };

    contactaddresstypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddressType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    contactaddresstypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContactAddressType/Active' + fields).then(successCallback, errorCallback);
    };

    contactaddresstypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContactAddressType/' + id + fields).then(successCallback, errorCallback);
    };

    contactaddresstypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContactAddressType/' + fields).then(successCallback, errorCallback);
    };

    contactaddresstypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/ContactAddressType/', model).then(successCallback, errorCallback);

    };

    contactaddresstypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ContactAddressType', model).then(successCallback, errorCallback);
    };

    contactaddresstypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ContactAddressType/ByName', model).then(successCallback, errorCallback);
    };

    return contactaddresstypeService;
});