angular.module('app.referrals', ['ngRoute', 'ngSanitize', 'ngResource']);

var referralsUrlPrefix = 'app/components/referrals/';

// Routes
angular.module('app.referrals').config(function($routeProvider) {
	$routeProvider.when('/referrals', {templateUrl: referralsUrlPrefix + 'referrals.html', controller: 'ReferralsController'});
});
