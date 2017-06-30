directPortalApp.controller('uploadevidenceController', function ($scope) {

    $scope.previewUrl = "https://placeholdit.imgix.net/~text?txtsize=61&txt=650%C3%97350&w=650&h=350";

    angular.element(document.getElementById('input-upload')).bind('change', function (evt) {
        $scope.previewEvidence(evt);
    });

    $scope.previewEvidence = function (evt) {
        var files = evt.target.files; // FileList object
        // Loop through the FileList and render image files as thumbnails.
        for (var i = 0, f; f = files[i]; i++) {
            if (f.type.match('image.*')) {
                var reader = new FileReader();
                // Closure to capture the file information.
                reader.onload = (function (theFile) {
                    return function (e) {
                        // Render thumbnail.
                        $scope.previewUrl =  e.target.result;
                        $scope.$apply();
                    };
                })(f);
                // Read in the image file as a data URL.
                reader.readAsDataURL(f);
            }
        }
        evt.target.value = ''; 
    }

});