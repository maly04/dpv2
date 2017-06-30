directPortalApp.factory('contractdetailtypeService', function ($http, __env) {
    var contractdetailtypeService = {};

    contractdetailtypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    contractdetailtypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetailType/' + id).then(successCallback, errorCallback);
    };

    contractdetailtypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetailType/Relationships/' + id).then(successCallback, errorCallback);
    };

    contractdetailtypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetailType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    contractdetailtypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetailType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    contractdetailtypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetailType/Translations/' + id).then(successCallback, errorCallback);
    };

    contractdetailtypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetailType/Notes/' + id).then(successCallback, errorCallback);
    };

    contractdetailtypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetailType/ByName/' + id).then(successCallback, errorCallback);
    };

    contractdetailtypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetailType/Activate/' + id).then(successCallback, errorCallback);
    };

    contractdetailtypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetailType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    contractdetailtypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContractDetailType/Active' + fields).then(successCallback, errorCallback);
    };

    contractdetailtypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContractDetailType/' + id + fields).then(successCallback, errorCallback);
    };

    contractdetailtypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContractDetailType/' + fields).then(successCallback, errorCallback);
    };

    contractdetailtypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/ContractDetailType/', model).then(successCallback, errorCallback);

    };

    contractdetailtypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ContractDetailType', model).then(successCallback, errorCallback);
    };

    contractdetailtypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ContractDetailType/ByName', model).then(successCallback, errorCallback);
    };

    return contractdetailtypeService;
});