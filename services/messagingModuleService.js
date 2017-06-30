directPortalApp.factory('messagingModuleService', function ($http, __env) {
    var messagingModuleService = {};

    messagingModuleService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?

    }

    messagingModuleService.sendEmail = function (searchTerm, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/modules/messaging/SendEmail', searchTerm).then(successCallback, errorCallback);
    };

    messagingModuleService.sendSms = function (from, to, body, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/modules/messaging/SendSms').then(successCallback, errorCallback);
    };


    

    return searchService;
});