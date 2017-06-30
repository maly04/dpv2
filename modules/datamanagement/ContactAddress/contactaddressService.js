directPortalApp.factory('contactaddressService', function ($http, __env) {
    var contactaddressService = {};

    contactaddressService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    contactaddressService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddress/' + id).then(successCallback, errorCallback);
    };

    contactaddressService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddress/Relationships/' + id).then(successCallback, errorCallback);
    };

    contactaddressService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddress/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    contactaddressService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddress/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    contactaddressService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddress/Translations/' + id).then(successCallback, errorCallback);
    };

    contactaddressService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddress/Notes/' + id).then(successCallback, errorCallback);
    };

    contactaddressService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddress/ByName/' + id).then(successCallback, errorCallback);
    };

    contactaddressService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddress/Activate/' + id).then(successCallback, errorCallback);
    };

    contactaddressService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactAddress/Deactivate/' + id).then(successCallback, errorCallback);
    };

    contactaddressService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContactAddress/Active' + fields).then(successCallback, errorCallback);
    };

    contactaddressService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContactAddress/' + id + fields).then(successCallback, errorCallback);
    };

    contactaddressService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContactAddress/' + fields).then(successCallback, errorCallback);
    };

    contactaddressService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/ContactAddress/', model).then(successCallback, errorCallback);

    };

    contactaddressService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ContactAddress', model).then(successCallback, errorCallback);
    };

    contactaddressService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ContactAddress/ByName', model).then(successCallback, errorCallback);
    };

    return contactaddressService;
});