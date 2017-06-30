directPortalApp.factory('marketingmaterialtypeService', function ($http, __env) {
    var marketingmaterialtypeService = {};

    marketingmaterialtypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    marketingmaterialtypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterialType/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialtypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterialType/Relationships/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialtypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterialType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialtypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterialType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialtypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterialType/Translations/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialtypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterialType/Notes/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialtypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterialType/ByName/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialtypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterialType/Activate/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialtypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/MarketingMaterialType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    marketingmaterialtypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/MarketingMaterialType/Active' + fields).then(successCallback, errorCallback);
    };

    marketingmaterialtypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/MarketingMaterialType/' + id + fields).then(successCallback, errorCallback);
    };

    marketingmaterialtypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/MarketingMaterialType/' + fields).then(successCallback, errorCallback);
    };

    marketingmaterialtypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/MarketingMaterialType/', model).then(successCallback, errorCallback);

    };

    marketingmaterialtypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/MarketingMaterialType', model).then(successCallback, errorCallback);
    };

    marketingmaterialtypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/MarketingMaterialType/ByName', model).then(successCallback, errorCallback);
    };

    return marketingmaterialtypeService;
});