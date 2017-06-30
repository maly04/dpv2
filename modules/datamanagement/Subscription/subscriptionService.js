directPortalApp.factory('subscriptionService', function ($http, __env) {
    var subscriptionService = {};

    subscriptionService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    subscriptionService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Subscription/' + id).then(successCallback, errorCallback);
    };

    subscriptionService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Subscription/Relationships/' + id).then(successCallback, errorCallback);
    };

    subscriptionService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Subscription/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    subscriptionService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Subscription/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    subscriptionService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Subscription/Translations/' + id).then(successCallback, errorCallback);
    };

    subscriptionService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Subscription/Notes/' + id).then(successCallback, errorCallback);
    };

    subscriptionService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Subscription/ByName/' + id).then(successCallback, errorCallback);
    };

    subscriptionService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Subscription/Activate/' + id).then(successCallback, errorCallback);
    };

    subscriptionService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/Subscription/Deactivate/' + id).then(successCallback, errorCallback);
    };

    subscriptionService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Subscription/Active' + fields).then(successCallback, errorCallback);
    };

    subscriptionService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Subscription/' + id + fields).then(successCallback, errorCallback);
    };

    subscriptionService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/Subscription/' + fields).then(successCallback, errorCallback);
    };

    subscriptionService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/Subscription/', model).then(successCallback, errorCallback);

    };

    subscriptionService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Subscription', model).then(successCallback, errorCallback);
    };

    subscriptionService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/Subscription/ByName', model).then(successCallback, errorCallback);
    };

    return subscriptionService;
});