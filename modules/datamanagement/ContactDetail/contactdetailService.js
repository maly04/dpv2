directPortalApp.factory('contactdetailService', function ($http, __env) {
    var contactdetailService = {};

    contactdetailService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    contactdetailService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetail/' + id).then(successCallback, errorCallback);
    };

    contactdetailService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetail/Relationships/' + id).then(successCallback, errorCallback);
    };

    contactdetailService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetail/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    contactdetailService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetail/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    contactdetailService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetail/Translations/' + id).then(successCallback, errorCallback);
    };

    contactdetailService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetail/Notes/' + id).then(successCallback, errorCallback);
    };

    contactdetailService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetail/ByName/' + id).then(successCallback, errorCallback);
    };

    contactdetailService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetail/Activate/' + id).then(successCallback, errorCallback);
    };

    contactdetailService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetail/Deactivate/' + id).then(successCallback, errorCallback);
    };

    contactdetailService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContactDetail/Active' + fields).then(successCallback, errorCallback);
    };

    contactdetailService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContactDetail/' + id + fields).then(successCallback, errorCallback);
    };

    contactdetailService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContactDetail/' + fields).then(successCallback, errorCallback);
    };

    contactdetailService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/ContactDetail/', model).then(successCallback, errorCallback);

    };

    contactdetailService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ContactDetail', model).then(successCallback, errorCallback);
    };

    contactdetailService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ContactDetail/ByName', model).then(successCallback, errorCallback);
    };

    return contactdetailService;
});