directPortalApp.factory('marketingmaterialService', function ($http, __env) {
    var marketingmaterialService = {};

    marketingmaterialService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    marketingmaterialService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterial/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterial/Relationships/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterial/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterial/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterial/Translations/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterial/Notes/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterial/ByName/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterial/Activate/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterial/Deactivate/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/MarketingMaterial/Active' + fields).then(successCallback, errorCallback);
    };

    marketingmaterialService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/MarketingMaterial/' + id + fields).then(successCallback, errorCallback);
    };

    marketingmaterialService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/MarketingMaterial/' + fields).then(successCallback, errorCallback);
    };

    marketingmaterialService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/MarketingMaterial/', model).then(successCallback, errorCallback);

    };

    marketingmaterialService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/MarketingMaterial', model).then(successCallback, errorCallback);
    };

    marketingmaterialService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/MarketingMaterial/ByName', model).then(successCallback, errorCallback);
    };

    return marketingmaterialService;
});