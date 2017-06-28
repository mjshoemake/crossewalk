angular.module('app.referrals', ['ngRoute', 'ngSanitize', 'ngResource']);

var urlPrefix = '';

// Routes
angular.module('app.referrals').config(function($routeProvider) {
	$routeProvider.when('/referrals', {templateUrl: urlPrefix + 'references.html', controller: 'ReferralsController'});
});
