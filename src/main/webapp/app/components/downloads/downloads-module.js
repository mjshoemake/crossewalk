angular.module('app.downloads', ['ngRoute', 'ngSanitize', 'ngResource']);

var downloadsUrlPrefix = 'app/components/downloads/';

// Routes
angular.module('app.downloads').config(function($routeProvider) {
	$routeProvider.when('/downloads', {templateUrl: downloadsUrlPrefix + 'downloads.html', controller: 'DownloadsController'});
	$routeProvider.otherwise({redirectTo: '/downloads'});
});
