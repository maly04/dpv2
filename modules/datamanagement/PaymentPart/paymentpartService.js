directPortalApp.factory('paymentpartService', function ($http, __env) {
    var paymentpartService = {};

    paymentpartService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    paymentpartService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentPart/' + id).then(successCallback, errorCallback);
    };

    paymentpartService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentPart/Relationships/' + id).then(successCallback, errorCallback);
    };

    paymentpartService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentPart/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    paymentpartService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentPart/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    paymentpartService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentPart/Translations/' + id).then(successCallback, errorCallback);
    };

    paymentpartService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentPart/Notes/' + id).then(successCallback, errorCallback);
    };

    paymentpartService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentPart/ByName/' + id).then(successCallback, errorCallback);
    };

    paymentpartService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentPart/Activate/' + id).then(successCallback, errorCallback);
    };

    paymentpartService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/PaymentPart/Deactivate/' + id).then(successCallback, errorCallback);
    };

    paymentpartService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PaymentPart/Active' + fields).then(successCallback, errorCallback);
    };

    paymentpartService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PaymentPart/' + id + fields).then(successCallback, errorCallback);
    };

    paymentpartService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/PaymentPart/' + fields).then(successCallback, errorCallback);
    };

    paymentpartService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/PaymentPart/', model).then(successCallback, errorCallback);

    };

    paymentpartService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PaymentPart', model).then(successCallback, errorCallback);
    };

    paymentpartService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/PaymentPart/ByName', model).then(successCallback, errorCallback);
    };

    return paymentpartService;
});