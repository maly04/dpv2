directPortalApp.factory('buildingstatustypeService', function ($http, __env) {
    var buildingstatustypeService = {};

    buildingstatustypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    buildingstatustypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatusType/' + id).then(successCallback, errorCallback);
    };

    buildingstatustypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatusType/Relationships/' + id).then(successCallback, errorCallback);
    };

    buildingstatustypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatusType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    buildingstatustypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatusType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    buildingstatustypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatusType/Translations/' + id).then(successCallback, errorCallback);
    };

    buildingstatustypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatusType/Notes/' + id).then(successCallback, errorCallback);
    };

    buildingstatustypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatusType/ByName/' + id).then(successCallback, errorCallback);
    };

    buildingstatustypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatusType/Activate/' + id).then(successCallback, errorCallback);
    };

    buildingstatustypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatusType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    buildingstatustypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/BuildingStatusType/Active' + fields).then(successCallback, errorCallback);
    };

    buildingstatustypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/BuildingStatusType/' + id + fields).then(successCallback, errorCallback);
    };

    buildingstatustypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/BuildingStatusType/' + fields).then(successCallback, errorCallback);
    };

    buildingstatustypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/BuildingStatusType/', model).then(successCallback, errorCallback);

    };

    buildingstatustypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/BuildingStatusType', model).then(successCallback, errorCallback);
    };

    buildingstatustypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/BuildingStatusType/ByName', model).then(successCallback, errorCallback);
    };

    return buildingstatustypeService;
});