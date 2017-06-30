directPortalApp.factory('calendareventService', function ($http, __env) {
    var calendareventService = {};

    calendareventService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    calendareventService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/CalendarEvent/' + id).then(successCallback, errorCallback);
    };

    calendareventService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/CalendarEvent/Relationships/' + id).then(successCallback, errorCallback);
    };

    calendareventService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/CalendarEvent/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    calendareventService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/CalendarEvent/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    calendareventService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/CalendarEvent/Translations/' + id).then(successCallback, errorCallback);
    };

    calendareventService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/CalendarEvent/Notes/' + id).then(successCallback, errorCallback);
    };

    calendareventService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/CalendarEvent/ByName/' + id).then(successCallback, errorCallback);
    };

    calendareventService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/CalendarEvent/Activate/' + id).then(successCallback, errorCallback);
    };

    calendareventService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/CalendarEvent/Deactivate/' + id).then(successCallback, errorCallback);
    };

    calendareventService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/CalendarEvent/Active' + fields).then(successCallback, errorCallback);
    };

    calendareventService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/CalendarEvent/' + id + fields).then(successCallback, errorCallback);
    };

    calendareventService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/CalendarEvent/' + fields).then(successCallback, errorCallback);
    };

    calendareventService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/CalendarEvent/', model).then(successCallback, errorCallback);

    };

    calendareventService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/CalendarEvent', model).then(successCallback, errorCallback);
    };

    calendareventService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/CalendarEvent/ByName', model).then(successCallback, errorCallback);
    };

    return calendareventService;
});