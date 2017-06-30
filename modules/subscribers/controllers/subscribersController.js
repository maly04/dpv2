directPortalApp.controller("subscribersController", function ($scope, $http, serviceWrapper, phonebookModuleService) {

    $scope.subcribers = [
        {
            "FIELD1": "a",
            "city": "Pattaya",
            "mapURL": "https://maps.googleapis.com/maps/api/staticmap?center=pattaya&zoom=13&size=200x128&maptype=roadmap&markers=color:blue|label:S|12.9266907,100.880966",
            "developers": 45,
            "agencies": 643,
            "buildings": 571,
            "units": 103922,
            "jan": 64,
            "feb": 65,
            "march": 80,
            "april": 43,
            "may": 54,
            "june": 67,
            "july": 62
        },
        {
            "FIELD1": "b",
            "city": "Bangkok",
            "mapURL": "https://maps.googleapis.com/maps/api/staticmap?center=bangkok&zoom=13&size=200x128&maptype=roadmap&markers=color:blue|label:S|13.7429033,100.5770649",
            "developers": 76,
            "agencies": 450,
            "buildings": 1231,
            "units": 224042,
            "jan": 64,
            "feb": 65,
            "march": 65,
            "april": 43,
            "may": 54,
            "june": 67,
            "july": 62
        },
        {
            "FIELD1": "c",
            "city": "Chiang Mai",
            "mapURL": "https://maps.googleapis.com/maps/api/staticmap?center=chiang+mai&zoom=13&size=200x128&maptype=roadmap&markers=color:blue|label:S|18.7903236,98.9864948",
            "developers": 43,
            "agencies": 43,
            "buildings": 324,
            "units": 58968,
            "jan": 30,
            "feb": 23,
            "march": 76,
            "april": 66,
            "may": 78,
            "june": 55,
            "july": 45
        },
        {
            "FIELD1": "d",
            "city": "Phnom Penh",
            "mapURL": "https://maps.googleapis.com/maps/api/staticmap?center=phnom+penh&zoom=13&size=200x128&maptype=roadmap&markers=color:blue|label:S|11.5888335,104.9219085",
            "developers": 75,
            "agencies": 56,
            "buildings": 312,
            "units": 56784,
            "jan": 40,
            "feb": 45,
            "march": 48,
            "april": 44,
            "may": 43,
            "june": 44,
            "july": 33
        },
        {
            "FIELD1": "e",
            "city": "Kuala Lumpur",
            "mapURL": "https://maps.googleapis.com/maps/api/staticmap?center=kuala+lumpur&zoom=13&size=200x128&maptype=roadmap&markers=color:blue|label:S|3.1387512,101.6912204",
            "developers": 64,
            "agencies": 236,
            "buildings": 475,
            "units": 86450,
            "jan": 67,
            "feb": 66,
            "march": 57,
            "april": 76,
            "may": 56,
            "june": 76,
            "july": 72
        },
        {
            "FIELD1": "f",
            "city": "Singapore",
            "mapURL": "https://maps.googleapis.com/maps/api/staticmap?center=jakarta&zoom=11&size=200x128&maptype=roadmap&markers=color:blue|label:S|1.3457455,103.8910578",
            "developers": 53,
            "agencies": 345,
            "buildings": 231,
            "units": 42042,
            "jan": 88,
            "feb": 23,
            "march": 75,
            "april": 66,
            "may": 55,
            "june": 54,
            "july": 43
        }
    ];

});

