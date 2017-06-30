directPortalApp.factory('organizationunitstatusService', function ($http, __env) {
    var organizationunitstatusService = {};

    organizationunitstatusService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    organizationunitstatusService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitStatus/' + id).then(successCallback, errorCallback);
    };

    organizationunitstatusService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitStatus/Relationships/' + id).then(successCallback, errorCallback);
    };

    organizationunitstatusService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitStatus/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    organizationunitstatusService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitStatus/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    organizationunitstatusService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitStatus/Translations/' + id).then(successCallback, errorCallback);
    };

    organizationunitstatusService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitStatus/Notes/' + id).then(successCallback, errorCallback);
    };

    organizationunitstatusService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitStatus/ByName/' + id).then(successCallback, errorCallback);
    };

    organizationunitstatusService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitStatus/Activate/' + id).then(successCallback, errorCallback);
    };

    organizationunitstatusService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitStatus/Deactivate/' + id).then(successCallback, errorCallback);
    };

    organizationunitstatusService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/OrganizationUnitStatus/Active' + fields).then(successCallback, errorCallback);
    };

    organizationunitstatusService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/OrganizationUnitStatus/' + id + fields).then(successCallback, errorCallback);
    };

    organizationunitstatusService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/OrganizationUnitStatus/' + fields).then(successCallback, errorCallback);
    };

    organizationunitstatusService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/OrganizationUnitStatus/', model).then(successCallback, errorCallback);

    };

    organizationunitstatusService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/OrganizationUnitStatus', model).then(successCallback, errorCallback);
    };

    organizationunitstatusService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/OrganizationUnitStatus/ByName', model).then(successCallback, errorCallback);
    };

    return organizationunitstatusService;
});