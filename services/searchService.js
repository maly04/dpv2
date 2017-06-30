directPortalApp.factory('searchService', function ($http, __env) {
    var searchService = {};

    searchService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?

    }
    searchService.search = function (searchTerm, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/modules/search/Search?id=' + searchTerm).then(successCallback, errorCallback);
    };

    


    return searchService;
});