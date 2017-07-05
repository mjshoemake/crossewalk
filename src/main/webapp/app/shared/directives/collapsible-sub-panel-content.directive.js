angular.module('app.shared-directives').directive("collapsibleSubPanelContent", function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs, ctrl, $transclude) {
            scope.title = attrs.title;
            scope.id = attrs.id;
            scope.class = attrs.class;
            scope.panelstyle = attrs.panelstyle;
        },
		scope: {},
        transclude: true,
        template:
            '						</a>' +
            '					</div>' +
            '					<div id="collapse-{{id}}" class="panel-collapse {{class}}">' +
            '						<div class="panel-body" ng-transclude>' +
            '						</div>' +
            '					</div>' +
            '				</div>' 
    }
})