directPortalApp.factory('entityService', function ($http, __env) {
    var entityService = {};

    entityService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    entityService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Entity/' + id).then(successCallback, errorCallback);
    };

    entityService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Entity/Relationships/' + id).then(successCallback, errorCallback);
    };

    entityService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Entity/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    entityService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Entity/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    entityService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Entity/Translations/' + id).then(successCallback, errorCallback);
    };

    entityService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Entity/Notes/' + id).then(successCallback, errorCallback);
    };

    entityService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Entity/ByName/' + id).then(successCallback, errorCallback);
    };

    entityService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Entity/Activate/' + id).then(successCallback, errorCallback);
    };

    entityService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Entity/Deactivate/' + id).then(successCallback, errorCallback);
    };

    entityService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Entity/Active' + fields).then(successCallback, errorCallback);
    };

    entityService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Entity/' + id + fields).then(successCallback, errorCallback);
    };

    entityService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Entity/' + fields).then(successCallback, errorCallback);
    };

    entityService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Entity/', model).then(successCallback, errorCallback);

    };

    entityService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Entity', model).then(successCallback, errorCallback);
    };

    entityService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Entity/ByName', model).then(successCallback, errorCallback);
    };

    return entityService;
});