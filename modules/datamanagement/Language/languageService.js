directPortalApp.factory('languageService', function ($http, __env) {
    var languageService = {};

    languageService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    languageService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Language/' + id).then(successCallback, errorCallback);
    };

    languageService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Language/Relationships/' + id).then(successCallback, errorCallback);
    };

    languageService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Language/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    languageService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Language/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    languageService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Language/Translations/' + id).then(successCallback, errorCallback);
    };

    languageService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Language/Notes/' + id).then(successCallback, errorCallback);
    };

    languageService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Language/ByName/' + id).then(successCallback, errorCallback);
    };

    languageService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Language/Activate/' + id).then(successCallback, errorCallback);
    };

    languageService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Language/Deactivate/' + id).then(successCallback, errorCallback);
    };

    languageService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Language/Active' + fields).then(successCallback, errorCallback);
    };

    languageService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Language/' + id + fields).then(successCallback, errorCallback);
    };

    languageService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Language/' + fields).then(successCallback, errorCallback);
    };

    languageService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Language/', model).then(successCallback, errorCallback);

    };

    languageService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Language', model).then(successCallback, errorCallback);
    };

    languageService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Language/ByName', model).then(successCallback, errorCallback);
    };

    return languageService;
});