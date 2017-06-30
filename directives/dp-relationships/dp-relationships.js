directPortalApp.directive('dpRelationships', function ($http, serviceWrapper) {
    function link(scope, element, attrs) {
        var entity = attrs.dpEntity;
        var entityId = attrs.dpEntityId;
        var action = attrs.dpAction;
        scope.action = action;

        serviceWrapper.get(entity).getRelationships(entityId, function (response) {
            scope.relationships = response.data;
        });
    }
    return {
        link: link,
        templateUrl: 'directPortal/directives/dp-relationships/dp-relationships.html',
        scope: {
            action: '@dpAction',
            entity: '@dpEntity',
            entityId: '@dpEntityId'

        },
        controller: function ($scope, $state, serviceWrapper) {

        }
    };
});