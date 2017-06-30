directPortalApp.factory('buildingstatusService', function ($http, __env) {
    var buildingstatusService = {};

    buildingstatusService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    buildingstatusService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatus/' + id).then(successCallback, errorCallback);
    };

    buildingstatusService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatus/Relationships/' + id).then(successCallback, errorCallback);
    };

    buildingstatusService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatus/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    buildingstatusService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatus/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    buildingstatusService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatus/Translations/' + id).then(successCallback, errorCallback);
    };

    buildingstatusService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatus/Notes/' + id).then(successCallback, errorCallback);
    };

    buildingstatusService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatus/ByName/' + id).then(successCallback, errorCallback);
    };

    buildingstatusService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatus/Activate/' + id).then(successCallback, errorCallback);
    };

    buildingstatusService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingStatus/Deactivate/' + id).then(successCallback, errorCallback);
    };

    buildingstatusService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/BuildingStatus/Active' + fields).then(successCallback, errorCallback);
    };

    buildingstatusService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/BuildingStatus/' + id + fields).then(successCallback, errorCallback);
    };

    buildingstatusService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/BuildingStatus/' + fields).then(successCallback, errorCallback);
    };

    buildingstatusService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/BuildingStatus/', model).then(successCallback, errorCallback);

    };

    buildingstatusService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/BuildingStatus', model).then(successCallback, errorCallback);
    };

    buildingstatusService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/BuildingStatus/ByName', model).then(successCallback, errorCallback);
    };

    return buildingstatusService;
});