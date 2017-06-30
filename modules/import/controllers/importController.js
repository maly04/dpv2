directPortalApp.controller("importController", function ($scope, $http) {
    $scope.uploadFiles = function () {
        var fileUpload = $("#files").get(0);
        var files = fileUpload.files;
        var data = new FormData();
        for (var i = 0; i < files.length; i++) {
            data.append(files[i].name, files[i]);
        }
        $.ajax({
            type: "POST",
            url: __env.apiUrl + "api/modules/import/ImportUnits",
            contentType: false,
            processData: false,
            data: data,
            success: function (message) {
                alert(message);
            },
            error: function () {
                alert("There was error uploading files!");
            }
        });
    }

    $scope.downloadSampleFile = __env.apiUrl + "api/modules/import/GetSampleUnitsImportFile";

});