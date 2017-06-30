directPortalApp.factory('entitytypeService', function ($http, __env) {
    var entitytypeService = {};

    entitytypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    entitytypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityType/' + id).then(successCallback, errorCallback);
    };

    entitytypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityType/Relationships/' + id).then(successCallback, errorCallback);
    };

    entitytypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    entitytypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    entitytypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityType/Translations/' + id).then(successCallback, errorCallback);
    };

    entitytypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityType/Notes/' + id).then(successCallback, errorCallback);
    };

    entitytypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityType/ByName/' + id).then(successCallback, errorCallback);
    };

    entitytypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityType/Activate/' + id).then(successCallback, errorCallback);
    };

    entitytypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    entitytypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/EntityType/Active' + fields).then(successCallback, errorCallback);
    };

    entitytypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/EntityType/' + id + fields).then(successCallback, errorCallback);
    };

    entitytypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/EntityType/' + fields).then(successCallback, errorCallback);
    };

    entitytypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/EntityType/', model).then(successCallback, errorCallback);

    };

    entitytypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/EntityType', model).then(successCallback, errorCallback);
    };

    entitytypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/EntityType/ByName', model).then(successCallback, errorCallback);
    };

    return entitytypeService;
});