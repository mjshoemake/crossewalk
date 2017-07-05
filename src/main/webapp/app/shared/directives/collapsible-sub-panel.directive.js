angular.module('app.shared-directives').directive("collapsibleSubPanel", function() {
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
            '				<div class="panel panel-default subsection" style="{{panelstyle}}">' +
            '					<div class="panel-heading">' +
            '						<a data-toggle="collapse" target="_self" data-parent="#accordion" href="#collapse-{{id}}">' +
            '							{{title}}' +
            '						</a>' +
            '					</div>' +
            '					<div id="collapse-{{id}}" class="panel-collapse {{class}}">' +
            '						<div class="panel-body" ng-transclude>' +
            '						</div>' +
            '					</div>' +
            '				</div>' 
    }
})