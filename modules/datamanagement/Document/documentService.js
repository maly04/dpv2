directPortalApp.factory('documentService', function ($http, __env) {
    var documentService = {};

    documentService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    documentService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Document/' + id).then(successCallback, errorCallback);
    };

    documentService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Document/Relationships/' + id).then(successCallback, errorCallback);
    };

    documentService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Document/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    documentService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Document/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    documentService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Document/Translations/' + id).then(successCallback, errorCallback);
    };

    documentService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Document/Notes/' + id).then(successCallback, errorCallback);
    };

    documentService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Document/ByName/' + id).then(successCallback, errorCallback);
    };

    documentService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Document/Activate/' + id).then(successCallback, errorCallback);
    };

    documentService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Document/Deactivate/' + id).then(successCallback, errorCallback);
    };

    documentService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Document/Active' + fields).then(successCallback, errorCallback);
    };

    documentService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Document/' + id + fields).then(successCallback, errorCallback);
    };

    documentService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Document/' + fields).then(successCallback, errorCallback);
    };

    documentService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Document/', model).then(successCallback, errorCallback);

    };

    documentService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Document', model).then(successCallback, errorCallback);
    };

    documentService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Document/ByName', model).then(successCallback, errorCallback);
    };

    return documentService;
});