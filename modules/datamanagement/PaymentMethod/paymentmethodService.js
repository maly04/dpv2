directPortalApp.factory('paymentmethodService', function ($http, __env) {
    var paymentmethodService = {};

    paymentmethodService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    paymentmethodService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentMethod/' + id).then(successCallback, errorCallback);
    };

    paymentmethodService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentMethod/Relationships/' + id).then(successCallback, errorCallback);
    };

    paymentmethodService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentMethod/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    paymentmethodService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentMethod/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    paymentmethodService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentMethod/Translations/' + id).then(successCallback, errorCallback);
    };

    paymentmethodService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentMethod/Notes/' + id).then(successCallback, errorCallback);
    };

    paymentmethodService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentMethod/ByName/' + id).then(successCallback, errorCallback);
    };

    paymentmethodService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentMethod/Activate/' + id).then(successCallback, errorCallback);
    };

    paymentmethodService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentMethod/Deactivate/' + id).then(successCallback, errorCallback);
    };

    paymentmethodService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PaymentMethod/Active' + fields).then(successCallback, errorCallback);
    };

    paymentmethodService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PaymentMethod/' + id + fields).then(successCallback, errorCallback);
    };

    paymentmethodService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PaymentMethod/' + fields).then(successCallback, errorCallback);
    };

    paymentmethodService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/PaymentMethod/', model).then(successCallback, errorCallback);

    };

    paymentmethodService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PaymentMethod', model).then(successCallback, errorCallback);
    };

    paymentmethodService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PaymentMethod/ByName', model).then(successCallback, errorCallback);
    };

    return paymentmethodService;
});