directPortalApp.factory('reservationtypeService', function ($http, __env) {
    var reservationtypeService = {};

    reservationtypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    reservationtypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationType/' + id).then(successCallback, errorCallback);
    };

    reservationtypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationType/Relationships/' + id).then(successCallback, errorCallback);
    };

    reservationtypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    reservationtypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    reservationtypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationType/Translations/' + id).then(successCallback, errorCallback);
    };

    reservationtypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationType/Notes/' + id).then(successCallback, errorCallback);
    };

    reservationtypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationType/ByName/' + id).then(successCallback, errorCallback);
    };

    reservationtypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationType/Activate/' + id).then(successCallback, errorCallback);
    };

    reservationtypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    reservationtypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ReservationType/Active' + fields).then(successCallback, errorCallback);
    };

    reservationtypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ReservationType/' + id + fields).then(successCallback, errorCallback);
    };

    reservationtypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ReservationType/' + fields).then(successCallback, errorCallback);
    };

    reservationtypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/ReservationType/', model).then(successCallback, errorCallback);

    };

    reservationtypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ReservationType', model).then(successCallback, errorCallback);
    };

    reservationtypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ReservationType/ByName', model).then(successCallback, errorCallback);
    };

    return reservationtypeService;
});