directPortalApp.directive("dpEntityPropertyTextbox", function ($http, serviceWrapper) {
    return {
        restrict: 'E',
        templateUrl: 'directPortal/directives/dp-entity-property-textbox/dp-entity-property-textbox.html',
        scope: { dpEntityId: "@", dpEntity: "@", dpEntityProperty: "@", dpAction: "@" },
        link: function (scope, elem, attr) {
            console.log(attr);
            serviceWrapper.get(attr.dpEntity).get(scope.dpEntityId, scope.dpEntityProperty, function (response) {
                scope.value = response.data[0][scope.dpEntityProperty];
            }, function (error) { console.log(error); });


        }

    };
});