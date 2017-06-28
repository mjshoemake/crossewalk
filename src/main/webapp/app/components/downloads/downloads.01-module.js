angular.module('app.downloads', ['ngRoute', 'ngSanitize', 'ngResource']);

var urlPrefix = '';

// Routes
angular.module('app.downloads').config(function($routeProvider) {
	$routeProvider.when('/downloads', {templateUrl: urlPrefix + 'downloads.html', controller: 'DownloadsController'});
	$routeProvider.otherwise({redirectTo: '/downloads'});
});
