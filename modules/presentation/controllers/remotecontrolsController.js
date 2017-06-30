angular.module('directPortalApp.presentation').controller('remotecontrolsController', function ($scope, $state, $stateParams, socket) {

    $scope.deviceId = $stateParams.deviceId;

    $scope.showPresentation = false;
    $scope.autoPlay = false;
    $scope.autoplayDelay = 3;
    $scope.transitionType = 'blind';
    $scope.activeMedia = {};

    $scope.preview = {};
    // experiment
    //screen.orientation.lock('landscape');
    $scope.medias = [{
            id: 0,
            type: 'image',
            category: 'a',
            name: 'pataya night life',
            url: 'http://static.asiawebdirect.com/m/bangkok/portals/pattaya-bangkok-com/homepage/nightlife/pagePropertiesImage/pattaya-nightlife.jpg',
            active: true
        }, {
            id: 1,
            type: 'image',
            category: 'b',
            name: 'pataya day life',
            url: 'http://static.asiawebdirect.com/m/bangkok/portals/pattaya-bangkok-com/homepage/pattaya-beach/pagePropertiesImage/pattaya_beach_cover.jpg',
            active: false
        }, {
            id: 2,
            type: 'image',
            category: 'b',
            name: 'pataya buildings',
            url: 'http://pattayacondosandvillas.com/wp-content/uploads/2015/08/building16.jpg',
            active: false
        }, {
            id: 3,
            type: 'video',
            category: 'v',
            name: 'carpe diem',
            url: 'https://mdbootstrap.com/images/video/Strum-Away.mp4',
            active: false
        }
    ];
    $scope.activeMediaCategory = 'all';

    $scope.mediaCategories = $scope.medias.map(function (media) {
        return media.category;
    });
    $scope.mediaCategories.push('all');

    $scope.prevMedia = function () { }
    $scope.nextMedia = function () {
        
        for (i in $scope.medias) {
            if ($scope.medias[i].id == $scope.activeMedia.id) {
                if ((parseInt(i) + 1) == $scope.medias.length) {
                    $scope.activeMedia = $scope.medias[0];
                } else {
                    $scope.activeMedia = $scope.medias[i + 1];
                }
            }
        }
    }

    $scope.toggleTransitionType = function () {
        socket.emit('remote:toggle_transition_type', { deviceId: $scope.deviceId, transitionType: $scope.transitionType });
    }
    $scope.changeActiveMedia = function (media) {
        for (i in $scope.medias) {
            if ($scope.medias[i].id == media.id) {
                $scope.activeMedia = media;
                socket.emit('remote:change_active_media', { deviceId: $scope.deviceId, mediaId: media.id });
                console.log('sending change active media to server');
                return;
            }
            else
                $scope.medias[i].active = false;
        }
    }
    $scope.toggleShowPresentation = function () {

        if ($scope.showPresentation) {
            console.log('send show presentation event from remote client to server');
            socket.emit('remote:show_presentation', { deviceId: $scope.deviceId, medias: $scope.medias});
        } else {
            console.log('send hide presentation event from remote client to server for device ' + $scope.deviceId);
            socket.emit('remote:hide_presentation', { deviceId: $scope.deviceId});
        }
    }
    $scope.changeMediaCategory = function (category) {
        $scope.activeMediaCategory = category;
        for (i in $scope.medias) {
            if ($scope.medias[i].category == category){
                $scope.changeActiveMedia($scope.medias[i]);
                return;
            }
        }

    }
    $scope.toggleAutoPlay = function () {
        if (!$scope.showPresentation)
            return;
        socket.emit('remote:toggle_autoplay', { deviceId: $scope.deviceId, autoplay: $scope.autoPlay, autoplay_delay:$scope.autoplayDelay});
    }

    socket.on('remote:device_disconnect', function (devices) {
        var found = false;
        for (i in devices) {
            if (devices[i].id === $scope.deviceId) {
                return;
            }
        }
        $state.go('app.presentation.devices', {}, {reload:true});
    });

});