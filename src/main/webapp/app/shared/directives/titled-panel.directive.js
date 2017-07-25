angular.module('app.shared-directives').directive("titledPanel", function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs, ctrl, $transclude) {
            scope.title = attrs.title;
            scope.panelstyle = attrs.panelstyle;
        },
        transclude: true,
        template:
            '				<div class="panel panel-primary section width-fill" style="{{panelstyle}}">' +
            '					<div class="panel-heading">' +
            '						{{title}}' +
            '					</div>' +
            '					<div class="panel-body" ng-transclude>' +
            '					</div>' +
            '				</div>' 
    }
})
