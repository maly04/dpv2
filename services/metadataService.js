directPortalApp.factory('metadataService', function ($http, __env) {

    var metadataService = {};

    metadataService.get = function (entity, fields, successCallback, errorCallback) {

        var url = __env.apiUrl + 'api/metadata/' + entity;
        url += (fields !== undefined ? '?fields=' + fields : '');
        $http.get(url).then(successCallback, errorCallback);
    }

    return metadataService;
});