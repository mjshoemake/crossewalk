var scripts = document.getElementsByTagName("script")
var currentScriptPath = scripts[scripts.length-1].src;

angular.module('app.resume').directive("technicalSkills", function() {
    return {
        restrict: 'E',
        link: function(scope, element, attrs, ctrl, $transclude) {
            scope.title = attrs.title;
            scope.id = attrs.id;
            scope.collapseclass = attrs.collapseclass;
        },
		scope: {skills: '='},
        templateUrl: currentScriptPath.substring(0, currentScriptPath.lastIndexOf('/') + 1)
                             + 'technical-skills.directive.html'
    }
})
