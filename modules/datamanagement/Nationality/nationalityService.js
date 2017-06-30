directPortalApp.factory('nationalityService', function ($http, __env) {
    var nationalityService = {};

    nationalityService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    nationalityService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Nationality/' + id).then(successCallback, errorCallback);
    };

    nationalityService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Nationality/Relationships/' + id).then(successCallback, errorCallback);
    };

    nationalityService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Nationality/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    nationalityService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Nationality/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    nationalityService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Nationality/Translations/' + id).then(successCallback, errorCallback);
    };

    nationalityService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Nationality/Notes/' + id).then(successCallback, errorCallback);
    };

    nationalityService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Nationality/ByName/' + id).then(successCallback, errorCallback);
    };

    nationalityService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Nationality/Activate/' + id).then(successCallback, errorCallback);
    };

    nationalityService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Nationality/Deactivate/' + id).then(successCallback, errorCallback);
    };

    nationalityService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Nationality/Active' + fields).then(successCallback, errorCallback);
    };

    nationalityService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Nationality/' + id + fields).then(successCallback, errorCallback);
    };

    nationalityService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Nationality/' + fields).then(successCallback, errorCallback);
    };

    nationalityService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Nationality/', model).then(successCallback, errorCallback);

    };

    nationalityService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Nationality', model).then(successCallback, errorCallback);
    };

    nationalityService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Nationality/ByName', model).then(successCallback, errorCallback);
    };

    return nationalityService;
});