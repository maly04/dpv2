directPortalApp.factory('documenttypeService', function ($http, __env) {
    var documenttypeService = {};

    documenttypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    documenttypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/DocumentType/' + id).then(successCallback, errorCallback);
    };

    documenttypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/DocumentType/Relationships/' + id).then(successCallback, errorCallback);
    };

    documenttypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/DocumentType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    documenttypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/DocumentType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    documenttypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/DocumentType/Translations/' + id).then(successCallback, errorCallback);
    };

    documenttypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/DocumentType/Notes/' + id).then(successCallback, errorCallback);
    };

    documenttypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/DocumentType/ByName/' + id).then(successCallback, errorCallback);
    };

    documenttypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/DocumentType/Activate/' + id).then(successCallback, errorCallback);
    };

    documenttypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/DocumentType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    documenttypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/DocumentType/Active' + fields).then(successCallback, errorCallback);
    };

    documenttypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/DocumentType/' + id + fields).then(successCallback, errorCallback);
    };

    documenttypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/DocumentType/' + fields).then(successCallback, errorCallback);
    };

    documenttypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/DocumentType/', model).then(successCallback, errorCallback);

    };

    documenttypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/DocumentType', model).then(successCallback, errorCallback);
    };

    documenttypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/DocumentType/ByName', model).then(successCallback, errorCallback);
    };

    return documenttypeService;
});