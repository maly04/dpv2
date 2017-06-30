directPortalApp.factory('unitstatusService', function ($http, __env) {
    var unitstatusService = {};

    unitstatusService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    unitstatusService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitStatus/' + id).then(successCallback, errorCallback);
    };

    unitstatusService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitStatus/Relationships/' + id).then(successCallback, errorCallback);
    };

    unitstatusService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitStatus/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    unitstatusService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitStatus/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    unitstatusService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitStatus/Translations/' + id).then(successCallback, errorCallback);
    };

    unitstatusService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitStatus/Notes/' + id).then(successCallback, errorCallback);
    };

    unitstatusService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitStatus/ByName/' + id).then(successCallback, errorCallback);
    };

    unitstatusService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitStatus/Activate/' + id).then(successCallback, errorCallback);
    };

    unitstatusService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitStatus/Deactivate/' + id).then(successCallback, errorCallback);
    };

    unitstatusService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/UnitStatus/Active' + fields).then(successCallback, errorCallback);
    };

    unitstatusService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/UnitStatus/' + id + fields).then(successCallback, errorCallback);
    };

    unitstatusService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/UnitStatus/' + fields).then(successCallback, errorCallback);
    };

    unitstatusService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/UnitStatus/', model).then(successCallback, errorCallback);

    };

    unitstatusService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/UnitStatus', model).then(successCallback, errorCallback);
    };

    unitstatusService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/UnitStatus/ByName', model).then(successCallback, errorCallback);
    };

    return unitstatusService;
});