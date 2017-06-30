directPortalApp.factory('phonebookModuleService', function ($http, __env) {
    var phonebookModuleService = {};
    phonebookModuleService.get = function (successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.get(__env.apiUrl + 'api/modules/phonebook/Contacts').then(successCallback, errorCallback);
    };
    return phonebookModuleService;
});