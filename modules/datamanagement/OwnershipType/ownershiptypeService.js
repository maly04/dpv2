directPortalApp.factory('ownershiptypeService', function ($http, __env) {
    var ownershiptypeService = {};

    ownershiptypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    ownershiptypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OwnershipType/' + id).then(successCallback, errorCallback);
    };

    ownershiptypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OwnershipType/Relationships/' + id).then(successCallback, errorCallback);
    };

    ownershiptypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OwnershipType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    ownershiptypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OwnershipType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    ownershiptypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OwnershipType/Translations/' + id).then(successCallback, errorCallback);
    };

    ownershiptypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OwnershipType/Notes/' + id).then(successCallback, errorCallback);
    };

    ownershiptypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OwnershipType/ByName/' + id).then(successCallback, errorCallback);
    };

    ownershiptypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OwnershipType/Activate/' + id).then(successCallback, errorCallback);
    };

    ownershiptypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OwnershipType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    ownershiptypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/OwnershipType/Active' + fields).then(successCallback, errorCallback);
    };

    ownershiptypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/OwnershipType/' + id + fields).then(successCallback, errorCallback);
    };

    ownershiptypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/OwnershipType/' + fields).then(successCallback, errorCallback);
    };

    ownershiptypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/OwnershipType/', model).then(successCallback, errorCallback);

    };

    ownershiptypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/OwnershipType', model).then(successCallback, errorCallback);
    };

    ownershiptypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/OwnershipType/ByName', model).then(successCallback, errorCallback);
    };

    return ownershiptypeService;
});