directPortalApp.factory('presentationstageService', function ($http, __env) {
    var presentationstageService = {};

    presentationstageService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    presentationstageService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PresentationStage/' + id).then(successCallback, errorCallback);
    };

    presentationstageService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PresentationStage/Relationships/' + id).then(successCallback, errorCallback);
    };

    presentationstageService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PresentationStage/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    presentationstageService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PresentationStage/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    presentationstageService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PresentationStage/Translations/' + id).then(successCallback, errorCallback);
    };

    presentationstageService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PresentationStage/Notes/' + id).then(successCallback, errorCallback);
    };

    presentationstageService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PresentationStage/ByName/' + id).then(successCallback, errorCallback);
    };

    presentationstageService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PresentationStage/Activate/' + id).then(successCallback, errorCallback);
    };

    presentationstageService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PresentationStage/Deactivate/' + id).then(successCallback, errorCallback);
    };

    presentationstageService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PresentationStage/Active' + fields).then(successCallback, errorCallback);
    };

    presentationstageService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PresentationStage/' + id + fields).then(successCallback, errorCallback);
    };

    presentationstageService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PresentationStage/' + fields).then(successCallback, errorCallback);
    };

    presentationstageService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/PresentationStage/', model).then(successCallback, errorCallback);

    };

    presentationstageService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PresentationStage', model).then(successCallback, errorCallback);
    };

    presentationstageService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PresentationStage/ByName', model).then(successCallback, errorCallback);
    };

    return presentationstageService;
});