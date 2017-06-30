directPortalApp.factory('organizationunittypeService', function ($http, __env) {
    var organizationunittypeService = {};

    organizationunittypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    organizationunittypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitType/' + id).then(successCallback, errorCallback);
    };

    organizationunittypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitType/Relationships/' + id).then(successCallback, errorCallback);
    };

    organizationunittypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    organizationunittypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    organizationunittypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitType/Translations/' + id).then(successCallback, errorCallback);
    };

    organizationunittypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitType/Notes/' + id).then(successCallback, errorCallback);
    };

    organizationunittypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitType/ByName/' + id).then(successCallback, errorCallback);
    };

    organizationunittypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitType/Activate/' + id).then(successCallback, errorCallback);
    };

    organizationunittypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/OrganizationUnitType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    organizationunittypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/OrganizationUnitType/Active' + fields).then(successCallback, errorCallback);
    };

    organizationunittypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/OrganizationUnitType/' + id + fields).then(successCallback, errorCallback);
    };

    organizationunittypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/OrganizationUnitType/' + fields).then(successCallback, errorCallback);
    };

    organizationunittypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/OrganizationUnitType/', model).then(successCallback, errorCallback);

    };

    organizationunittypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/OrganizationUnitType', model).then(successCallback, errorCallback);
    };

    organizationunittypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/OrganizationUnitType/ByName', model).then(successCallback, errorCallback);
    };

    return organizationunittypeService;
});