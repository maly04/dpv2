angular.module('directPortalApp.presentation').controller('createpresentationController', function ($scope) {


    $scope.allMediasItems = [
        {
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
            thumbnail_url: 'theme/img/placeholder-video.png',
            active: false
        }
    ];
    $scope.presentation = {

        name: '',
        medias: []

    };

    $scope.savePresentation = function () {}
    $scope.addMediaToPresentation = function (media) {
        for (i in $scope.allMediasItems) {
            if (media.id == $scope.allMediasItems[i].id) {
                $scope.presentation.medias.push(media);
                $scope.allMediasItems.splice(i, 1);
            }
        }
    }
    $scope.removeMediaFromPresentation = function (media) {

        for (i in $scope.presentation.medias) {
            if (media.id == $scope.presentation.medias[i].id) {
                $scope.allMediasItems.push(media);
                $scope.presentation.medias.splice(i, 1);
            }
        }
    }

    function dropToPresentationRecipe($item, $recipe) {

        $item.fadeOut().appendTo($recipe).fadeIn();
        $item.draggable('disable');
    }
    function dropToGallery($item, $gallery) {
        $item.draggable('enable');
        $item.fadeOut(function () {
            $item
                .appendTo($gallery)
                .fadeIn();
        });
    }

    angular.element(document).ready(function () {

        $gallery = $('#gallery');
        $recipe = $('#presentationRecipe');
        $gallery.disableSelection();
        $recipe.sortable();

        $("li", $gallery).draggable({
            //cancel: "a.ui-icon", // clicking an icon won't initiate dragging
            //revert: "invalid", // when not dropped, the item will revert back to its initial position
            containment: "#content",
            helper: "clone",
            cursor: "move"
        });
        $recipe.droppable({
            accept: "#gallery li",
            drop: function (event, ui) {
                var media_id = ui.draggable.data('media');
                for (i in $scope.allMediasItems) {
                    if ($scope.allMediasItems[i].id == media_id) {
                        dropToPresentationRecipe(ui.draggable, $recipe);
                    }
                }
            }
        });
        $gallery.droppable({
            accept: "#presentationRecipe li",
            drop: function (event, ui) {

                var media_id = ui.draggable.data('media');
                for (i in $scope.allMediasItems) {
                    if ($scope.allMediasItems[i].id == media_id) {
                        dropToGallery(ui.draggable, $gallery);
                    }
                }
            }
        });
    })
    
});