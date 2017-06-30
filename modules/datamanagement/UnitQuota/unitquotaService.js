directPortalApp.factory('unitquotaService', function ($http, __env) {
    var unitquotaService = {};

    unitquotaService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    unitquotaService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitQuota/' + id).then(successCallback, errorCallback);
    };

    unitquotaService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitQuota/Relationships/' + id).then(successCallback, errorCallback);
    };

    unitquotaService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitQuota/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    unitquotaService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitQuota/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    unitquotaService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitQuota/Translations/' + id).then(successCallback, errorCallback);
    };

    unitquotaService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitQuota/Notes/' + id).then(successCallback, errorCallback);
    };

    unitquotaService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitQuota/ByName/' + id).then(successCallback, errorCallback);
    };

    unitquotaService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitQuota/Activate/' + id).then(successCallback, errorCallback);
    };

    unitquotaService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/UnitQuota/Deactivate/' + id).then(successCallback, errorCallback);
    };

    unitquotaService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/UnitQuota/Active' + fields).then(successCallback, errorCallback);
    };

    unitquotaService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/UnitQuota/' + id + fields).then(successCallback, errorCallback);
    };

    unitquotaService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/UnitQuota/' + fields).then(successCallback, errorCallback);
    };

    unitquotaService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/UnitQuota/', model).then(successCallback, errorCallback);

    };

    unitquotaService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/UnitQuota', model).then(successCallback, errorCallback);
    };

    unitquotaService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/UnitQuota/ByName', model).then(successCallback, errorCallback);
    };

    return unitquotaService;
});