directPortalApp.factory('entitypropertyService', function ($http, __env) {
    var entitypropertyService = {};

    entitypropertyService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    entitypropertyService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityProperty/' + id).then(successCallback, errorCallback);
    };

    entitypropertyService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityProperty/Relationships/' + id).then(successCallback, errorCallback);
    };

    entitypropertyService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityProperty/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    entitypropertyService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityProperty/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    entitypropertyService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityProperty/Translations/' + id).then(successCallback, errorCallback);
    };

    entitypropertyService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityProperty/Notes/' + id).then(successCallback, errorCallback);
    };

    entitypropertyService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityProperty/ByName/' + id).then(successCallback, errorCallback);
    };

    entitypropertyService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityProperty/Activate/' + id).then(successCallback, errorCallback);
    };

    entitypropertyService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/EntityProperty/Deactivate/' + id).then(successCallback, errorCallback);
    };

    entitypropertyService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/EntityProperty/Active' + fields).then(successCallback, errorCallback);
    };

    entitypropertyService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/EntityProperty/' + id + fields).then(successCallback, errorCallback);
    };

    entitypropertyService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/EntityProperty/' + fields).then(successCallback, errorCallback);
    };

    entitypropertyService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/EntityProperty/', model).then(successCallback, errorCallback);

    };

    entitypropertyService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/EntityProperty', model).then(successCallback, errorCallback);
    };

    entitypropertyService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/EntityProperty/ByName', model).then(successCallback, errorCallback);
    };

    return entitypropertyService;
});