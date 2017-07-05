angular.module('app.shared-directives').directive("collapsibleSubPanel", function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs, ctrl, $transclude) {
            scope.pretitle = attrs.pretitle;
            scope.boldtitle = attrs.boldtitle;
            scope.posttitle = attrs.posttitle;
            scope.id = attrs.id;
            scope.collapseclass = attrs.collapseclass;
//            scope.panelstyle = attrs.panelstyle;
        },
		scope: {},
        transclude: true,
        template:
//            '				<div class="panel panel-default subsection" style="{{panelstyle}}">' +
            '					<div class="panel-heading">' +
            '						<a data-toggle="collapse" target="_self" data-parent="#accordion" href="#collapse-{{id}}">' +
            '							{{pretitle}}<b>{{boldtitle}}</b>{{posttitle}}' +
            '						</a>' +
            '					</div>' +
            '					<div id="collapse-{{id}}" class="panel-collapse {{collapseclass}}">' +
            '						<div class="panel-body" ng-transclude>' +
            '						</div>' +
            '					</div>' 
//            '				</div>' 
    }
})