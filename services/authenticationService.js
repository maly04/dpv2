directPortalApp.factory('authenticationService', function ($http, $state, __env) {

    var authenticationService = {};

    authenticationService.login = function (credentials, callBack) {

        $http({
            method: 'POST',
            url: __env.apiUrl + 'token',
            data: "username=" + credentials.username + "&password=" + credentials.password,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }

        }).then(function (response) {

            if (response.data.access_token) {
                $http.defaults.headers.common.Authorization = 'Bearer ' + response.data.access_token;
                localStorage.currentUser = { username: credentials.username, token: response.data.token };
                callBack(true);
            } else {
                callBack(false);
            }

        }, function (error) {
            callBack(false);
        });
    }

    authenticationService.logout = function () {
        delete localStorage.currentUser;
        $http.defaults.headers.common.Authorization = '';
        $state.reload();
    }

    return authenticationService;
});