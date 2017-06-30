directPortalApp.factory('reservationModuleService', function ($http, __env) {
    var reservationModuleService = {};

    reservationModuleService.defaultErrorHandler = function (response) {
        // if 401, redirect to login
        // if 400, might be validation error, what should i do ?

    }

    reservationModuleService.getAllReservations = function (successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/modules/reservation/GetAllReservations').then(successCallback, errorCallback);
    };

    reservationModuleService.getNewReservation = function (successCallback, errorCallback) {

        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/modules/reservation/GetNewReservation').then(successCallback, errorCallback);
    };


    reservationModuleService.createNewReservation = function (reservation, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.post(__env.apiUrl + 'api/modules/reservation/CreateNewReservation', reservation).then(successCallback, errorCallback);
    };

    reservationModuleService.getReservation = function (id, successCallback, errorCallback) {
        if (undefined == errorCallback)
            errorCallback = this.defaultErrorHandler;

        $http.get(__env.apiUrl + 'api/modules/reservation/GetReservation/' + id).then(successCallback, errorCallback);
    };

    return reservationModuleService;
});