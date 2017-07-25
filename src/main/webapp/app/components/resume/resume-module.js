angular.module('app.resume', ['ngRoute', 'ngSanitize', 'ngResource']);

var resumeUrlPrefix = 'app/components/resume/';

// Routes
angular.module('app.resume').config(function($routeProvider) {
	$routeProvider.when('/resume', {templateUrl: resumeUrlPrefix + 'resume.html', controller: 'ResumeController'});
	$routeProvider.otherwise({redirectTo: '/resume'});
});
