directPortalApp.factory('personprefixService', function ($http, __env) {
    var personprefixService = {};

    personprefixService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    personprefixService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonPrefix/' + id).then(successCallback, errorCallback);
    };

    personprefixService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonPrefix/Relationships/' + id).then(successCallback, errorCallback);
    };

    personprefixService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonPrefix/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    personprefixService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonPrefix/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    personprefixService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonPrefix/Translations/' + id).then(successCallback, errorCallback);
    };

    personprefixService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonPrefix/Notes/' + id).then(successCallback, errorCallback);
    };

    personprefixService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonPrefix/ByName/' + id).then(successCallback, errorCallback);
    };

    personprefixService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonPrefix/Activate/' + id).then(successCallback, errorCallback);
    };

    personprefixService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PersonPrefix/Deactivate/' + id).then(successCallback, errorCallback);
    };

    personprefixService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PersonPrefix/Active' + fields).then(successCallback, errorCallback);
    };

    personprefixService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PersonPrefix/' + id + fields).then(successCallback, errorCallback);
    };

    personprefixService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PersonPrefix/' + fields).then(successCallback, errorCallback);
    };

    personprefixService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/PersonPrefix/', model).then(successCallback, errorCallback);

    };

    personprefixService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PersonPrefix', model).then(successCallback, errorCallback);
    };

    personprefixService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PersonPrefix/ByName', model).then(successCallback, errorCallback);
    };

    return personprefixService;
});