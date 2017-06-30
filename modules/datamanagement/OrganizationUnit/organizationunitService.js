directPortalApp.factory('organizationunitService', function ($http, __env) {
    var organizationunitService = {};

    organizationunitService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    organizationunitService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnit/' + id).then(successCallback, errorCallback);
    };

    organizationunitService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnit/Relationships/' + id).then(successCallback, errorCallback);
    };

    organizationunitService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnit/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    organizationunitService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnit/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    organizationunitService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnit/Translations/' + id).then(successCallback, errorCallback);
    };

    organizationunitService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnit/Notes/' + id).then(successCallback, errorCallback);
    };

    organizationunitService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnit/ByName/' + id).then(successCallback, errorCallback);
    };

    organizationunitService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnit/Activate/' + id).then(successCallback, errorCallback);
    };

    organizationunitService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnit/Deactivate/' + id).then(successCallback, errorCallback);
    };

    organizationunitService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/OrganizationUnit/Active' + fields).then(successCallback, errorCallback);
    };

    organizationunitService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/OrganizationUnit/' + id + fields).then(successCallback, errorCallback);
    };

    organizationunitService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/OrganizationUnit/' + fields).then(successCallback, errorCallback);
    };

    organizationunitService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/OrganizationUnit/', model).then(successCallback, errorCallback);

    };

    organizationunitService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/OrganizationUnit', model).then(successCallback, errorCallback);
    };

    organizationunitService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/OrganizationUnit/ByName', model).then(successCallback, errorCallback);
    };

    return organizationunitService;
});