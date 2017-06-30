directPortalApp.controller('headerController', function ($scope, $rootScope, $state, $translate, languageService) {

    $scope.username = $rootScope.username;
    $scope.translationKeys = $translate.getAvailableLanguageKeys();
    $scope.definedLanguage = $translate.use();
    $scope.changeLang = function (key) {
        var langCode = key.Code.split("-")[1].toLowerCase();
        if (langCode == "gb") {
            langCode = "en";
        }
        $translate.use(langCode);
        $scope.definedLanguage = $translate.use();
    }

    languageService.getAll('', function (response) {

        $scope.languages = response.data;
    }, function (error) { });

    $scope.logout = function () {

        $state.go('account.login');
        authenticationService.logout();
    }

    $scope.togglesidebar = function () {
        $('.widget').toggleClass('widget-full');
    };

});