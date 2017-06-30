directPortalApp.factory('relationshiptypeService', function ($http, __env) {
    var relationshiptypeService = {};

    relationshiptypeService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    relationshiptypeService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/RelationshipType/' + id).then(successCallback, errorCallback);
    };

    relationshiptypeService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/RelationshipType/Relationships/' + id).then(successCallback, errorCallback);
    };

    relationshiptypeService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/RelationshipType/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    relationshiptypeService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/RelationshipType/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    relationshiptypeService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/RelationshipType/Translations/' + id).then(successCallback, errorCallback);
    };

    relationshiptypeService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/RelationshipType/Notes/' + id).then(successCallback, errorCallback);
    };

    relationshiptypeService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/RelationshipType/ByName/' + id).then(successCallback, errorCallback);
    };

    relationshiptypeService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/RelationshipType/Activate/' + id).then(successCallback, errorCallback);
    };

    relationshiptypeService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/RelationshipType/Deactivate/' + id).then(successCallback, errorCallback);
    };

    relationshiptypeService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/RelationshipType/Active' + fields).then(successCallback, errorCallback);
    };

    relationshiptypeService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/RelationshipType/' + id + fields).then(successCallback, errorCallback);
    };

    relationshiptypeService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/RelationshipType/' + fields).then(successCallback, errorCallback);
    };

    relationshiptypeService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/RelationshipType/', model).then(successCallback, errorCallback);

    };

    relationshiptypeService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/RelationshipType', model).then(successCallback, errorCallback);
    };

    relationshiptypeService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/RelationshipType/ByName', model).then(successCallback, errorCallback);
    };

    return relationshiptypeService;
});