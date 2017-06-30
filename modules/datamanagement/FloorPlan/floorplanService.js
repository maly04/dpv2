directPortalApp.factory('floorplanService', function ($http, __env) {
    var floorplanService = {};

    floorplanService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    floorplanService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FloorPlan/' + id).then(successCallback, errorCallback);
    };

    floorplanService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FloorPlan/Relationships/' + id).then(successCallback, errorCallback);
    };

    floorplanService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FloorPlan/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    floorplanService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FloorPlan/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    floorplanService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FloorPlan/Translations/' + id).then(successCallback, errorCallback);
    };

    floorplanService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FloorPlan/Notes/' + id).then(successCallback, errorCallback);
    };

    floorplanService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FloorPlan/ByName/' + id).then(successCallback, errorCallback);
    };

    floorplanService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FloorPlan/Activate/' + id).then(successCallback, errorCallback);
    };

    floorplanService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/FloorPlan/Deactivate/' + id).then(successCallback, errorCallback);
    };

    floorplanService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/FloorPlan/Active' + fields).then(successCallback, errorCallback);
    };

    floorplanService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/FloorPlan/' + id + fields).then(successCallback, errorCallback);
    };

    floorplanService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/FloorPlan/' + fields).then(successCallback, errorCallback);
    };

    floorplanService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/FloorPlan/', model).then(successCallback, errorCallback);

    };

    floorplanService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/FloorPlan', model).then(successCallback, errorCallback);
    };

    floorplanService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/FloorPlan/ByName', model).then(successCallback, errorCallback);
    };

    return floorplanService;
});