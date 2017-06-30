directPortalApp.factory('reservationstatusService', function ($http, __env) {
    var reservationstatusService = {};

    reservationstatusService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?
    }

    reservationstatusService.get = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationStatus/' + id).then(successCallback, errorCallback);
    };

    reservationstatusService.getRelationships = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationStatus/Relationships/' + id).then(successCallback, errorCallback);
    };

    reservationstatusService.getContactDetails = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationStatus/ContactDetails/' + id).then(successCallback, errorCallback);
    };

    reservationstatusService.getContactAddresses = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationStatus/ContactAddresses/' + id).then(successCallback, errorCallback);
    };

    reservationstatusService.getTranslations = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationStatus/Translations/' + id).then(successCallback, errorCallback);
    };

    reservationstatusService.getNotes = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationStatus/Notes/' + id).then(successCallback, errorCallback);
    };

    reservationstatusService.getByName = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationStatus/ByName/' + id).then(successCallback, errorCallback);
    };

    reservationstatusService.activate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationStatus/Activate/' + id).then(successCallback, errorCallback);
    };

    reservationstatusService.deactivate = function (id, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/ReservationStatus/Deactivate/' + id).then(successCallback, errorCallback);
    };

    reservationstatusService.getActive = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ReservationStatus/Active' + fields).then(successCallback, errorCallback);
    };

    reservationstatusService.get = function (id, fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ReservationStatus/' + id + fields).then(successCallback, errorCallback);
    };

    reservationstatusService.getAll = function (fields, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        fields = (fields.length > 0 ? '?fields=' + fields : "")
        $http.get(__env.apiUrl + 'api/ReservationStatus/' + fields).then(successCallback, errorCallback);
    };

    reservationstatusService.edit = function (model, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.put(__env.apiUrl + 'api/ReservationStatus/', model).then(successCallback, errorCallback);

    };

    reservationstatusService.create = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ReservationStatus', model).then(successCallback, errorCallback);
    };

    reservationstatusService.getOrCreateByName = function (model, successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;
        $http.post(__env.apiUrl + 'api/ReservationStatus/ByName', model).then(successCallback, errorCallback);
    };

    return reservationstatusService;
});