angular.module('directPortalApp.presentation').factory('getComplexData', function ($http, __env) {
    var getComplexData = {};
    var complexData = [];
    getComplexData.getData = function () {
        var arr_coor = [];
        $http.get(__env.apiUrl + 'api/Complex/')
            .then(function (response) {  
                angular.forEach(response.data, function (value, key) {
                    //var coor = JSON.stringify(value.Coordinates).replace(/\(/g, "{").replace(/\)/g, "}").replace(/\;/g, ",");
                    var coor = JSON.stringify(value.Coordinates).split(';');
                    var arr_coor = [];
                    for (var i = 0; i < coor.length; i++) {
                        var getStr = coor[i].split(',')
                        if (getStr.length > 0) {
                            if (typeof getStr[0] !== 'undefined' && getStr[1] !== 'undefined') {
                                var lat = String(getStr[0]).replace(/\(/g, "").replace(/\)/g, "").replace(/\"/g, "").replace(/\\/g, "");
                                var lng = String(getStr[1]).replace(/\(/g, "").replace(/\)/g, "").replace(/\"/g, "").replace(/\\/g, "");
                                var getData =
                                    {
                                        "lat": lat,
                                        "lng": lng
                                    }
                                arr_coor.push(getData);
                            }

                        }
                    }//End for 
                    //console.log(JSON.stringify(arr_coor));

                    complexData.push(
                        {
                            "Name": value.Name,
                            "ID": value.ID,
                            "Buildings": [
                                {
                                    "name": value.Buildings,
                                    "id": 1,
                                    "coordinates": JSON.stringify(arr_coor)
                                }
                            ]//end building
                        }
                    );
                });//end foreach
            });
       
    }
    return getComplexData;
    
});