directPortalApp.factory('buildingphaseService', function ($http, __env) {
    var buildingphaseService = {};

    buildingphaseService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    buildingphaseService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingPhase/' + id).then(successCallback, errorCallback);
    };

    buildingphaseService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingPhase/Relationships/' + id).then(successCallback, errorCallback);
    };

    buildingphaseService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingPhase/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    buildingphaseService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingPhase/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    buildingphaseService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingPhase/Translations/' + id).then(successCallback, errorCallback);
    };

    buildingphaseService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingPhase/Notes/' + id).then(successCallback, errorCallback);
    };

    buildingphaseService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingPhase/ByName/' + id).then(successCallback, errorCallback);
    };

    buildingphaseService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingPhase/Activate/' + id).then(successCallback, errorCallback);
    };

    buildingphaseService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/BuildingPhase/Deactivate/' + id).then(successCallback, errorCallback);
    };

    buildingphaseService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/BuildingPhase/Active' + fields).then(successCallback, errorCallback);
    };

    buildingphaseService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/BuildingPhase/' + id + fields).then(successCallback, errorCallback);
    };

    buildingphaseService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/BuildingPhase/' + fields).then(successCallback, errorCallback);
    };

    buildingphaseService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/BuildingPhase/', model).then(successCallback, errorCallback);

    };

    buildingphaseService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/BuildingPhase', model).then(successCallback, errorCallback);
    };

    buildingphaseService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/BuildingPhase/ByName', model).then(successCallback, errorCallback);
    };

    return buildingphaseService;
});