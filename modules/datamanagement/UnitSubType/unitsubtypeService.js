directPortalApp.factory('unitsubtypeService', function ($http, __env) {
    var unitsubtypeService = {};

    unitsubtypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    unitsubtypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitSubType/' + id).then(successCallback, errorCallback);
    };

    unitsubtypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitSubType/Relationships/' + id).then(successCallback, errorCallback);
    };

    unitsubtypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitSubType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    unitsubtypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitSubType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    unitsubtypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitSubType/Translations/' + id).then(successCallback, errorCallback);
    };

    unitsubtypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitSubType/Notes/' + id).then(successCallback, errorCallback);
    };

    unitsubtypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitSubType/ByName/' + id).then(successCallback, errorCallback);
    };

    unitsubtypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitSubType/Activate/' + id).then(successCallback, errorCallback);
    };

    unitsubtypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitSubType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    unitsubtypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/UnitSubType/Active' + fields).then(successCallback, errorCallback);
    };

    unitsubtypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/UnitSubType/' + id + fields).then(successCallback, errorCallback);
    };

    unitsubtypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/UnitSubType/' + fields).then(successCallback, errorCallback);
    };

    unitsubtypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/UnitSubType/', model).then(successCallback, errorCallback);

    };

    unitsubtypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/UnitSubType', model).then(successCallback, errorCallback);
    };

    unitsubtypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/UnitSubType/ByName', model).then(successCallback, errorCallback);
    };

    return unitsubtypeService;
});