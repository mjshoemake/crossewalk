angular.module('app.shared-directives', ['ngSanitize', 'ngResource']);

angular.module('app.shared-directives').config(function($logProvider){
  $logProvider.debugEnabled(true);
});

