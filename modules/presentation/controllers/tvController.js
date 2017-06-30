angular.module('directPortalApp.presentation').controller('tvController', function ($scope, socket) {


    $scope.defaultMedia = {
        url: 'https://placeholdit.imgix.net/~text?txtsize=107&txt=directPortal%20Presentation%20Screen&w=1280&h=700',
        type: 'image',
        name: 'directPortal%20Presentation%20Screen'
    }; 
    $scope.activeMedia = $scope.defaultMedia;

    $scope.medias = [
        $scope.defaultMedia
    ];
    var autoplay_timeoutID = 0;
    var autoplay_currMediaId = 0;

    socket.on('connect', function () {

        socket.emit('tv:connect', socket.socket.id);
    });

    socket.on('tv:show', function (medias) {
        $scope.medias = (medias);
        for (i in medias) {
            if (medias[i].active == true) {
                $scope.activeMedia = medias[i];
            }
        }
    });

    socket.on('tv:hide', function () {
        $scope.medias = [$scope.defaultMedia];
        $scope.activeMedia = $scope.defaultMedia;
    });

    socket.on('tv:change_active_media', function (medaId) {
        for (i in $scope.medias) {
            if ($scope.medias[i].id == medaId) {
                $scope.medias[i].active = true;
                $scope.activeMedia = $scope.medias[i];
            } else
                $scope.medias[i].active = false;
        }
    });

    socket.on('tv:toggle_autoplay', function (res) {

        if (res.autoplay) {
            console.log('running autoplay');
            autoplay_timeoutID = window.setInterval(function () {
                if ($scope.medias[++autoplay_currMediaId] === undefined)
                    autoplay_currMediaId = 0;
                $scope.activeMedia = $scope.medias[autoplay_currMediaId];res
                $scope.$apply();

            }, res.autoplay_delay * 1000);
        } else {
            console.log('disable autoplay');
            window.clearInterval(autoplay_timeoutID);
        }

    });

});