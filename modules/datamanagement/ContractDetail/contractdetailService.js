directPortalApp.factory('contractdetailService', function ($http, __env) {
    var contractdetailService = {};

    contractdetailService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    contractdetailService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetail/' + id).then(successCallback, errorCallback);
    };

    contractdetailService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetail/Relationships/' + id).then(successCallback, errorCallback);
    };

    contractdetailService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetail/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    contractdetailService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetail/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    contractdetailService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetail/Translations/' + id).then(successCallback, errorCallback);
    };

    contractdetailService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetail/Notes/' + id).then(successCallback, errorCallback);
    };

    contractdetailService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetail/ByName/' + id).then(successCallback, errorCallback);
    };

    contractdetailService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetail/Activate/' + id).then(successCallback, errorCallback);
    };

    contractdetailService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ContractDetail/Deactivate/' + id).then(successCallback, errorCallback);
    };

    contractdetailService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContractDetail/Active' + fields).then(successCallback, errorCallback);
    };

    contractdetailService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContractDetail/' + id + fields).then(successCallback, errorCallback);
    };

    contractdetailService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ContractDetail/' + fields).then(successCallback, errorCallback);
    };

    contractdetailService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/ContractDetail/', model).then(successCallback, errorCallback);

    };

    contractdetailService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ContractDetail', model).then(successCallback, errorCallback);
    };

    contractdetailService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ContractDetail/ByName', model).then(successCallback, errorCallback);
    };

    return contractdetailService;
});