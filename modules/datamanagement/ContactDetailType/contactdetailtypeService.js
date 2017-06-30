directPortalApp.factory('contactdetailtypeService', function ($http, __env) {
    var contactdetailtypeService = {};

    contactdetailtypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    contactdetailtypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetailType/' + id).then(successCallback, errorCallback);
    };

    contactdetailtypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetailType/Relationships/' + id).then(successCallback, errorCallback);
    };

    contactdetailtypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetailType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    contactdetailtypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetailType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    contactdetailtypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetailType/Translations/' + id).then(successCallback, errorCallback);
    };

    contactdetailtypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetailType/Notes/' + id).then(successCallback, errorCallback);
    };

    contactdetailtypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetailType/ByName/' + id).then(successCallback, errorCallback);
    };

    contactdetailtypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetailType/Activate/' + id).then(successCallback, errorCallback);
    };

    contactdetailtypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContactDetailType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    contactdetailtypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContactDetailType/Active' + fields).then(successCallback, errorCallback);
    };

    contactdetailtypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContactDetailType/' + id + fields).then(successCallback, errorCallback);
    };

    contactdetailtypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContactDetailType/' + fields).then(successCallback, errorCallback);
    };

    contactdetailtypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/ContactDetailType/', model).then(successCallback, errorCallback);

    };

    contactdetailtypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ContactDetailType', model).then(successCallback, errorCallback);
    };

    contactdetailtypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ContactDetailType/ByName', model).then(successCallback, errorCallback);
    };

    return contactdetailtypeService;
});