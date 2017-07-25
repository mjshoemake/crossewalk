// Controller
angular.module('app.referrals').controller('ReferralsController', function ($scope, $rootScope) {
    $rootScope.headerDisplay = "display: block;";
    $rootScope.lastPage = '/downloads';
    $scope.pageName = "Referrals";
	$scope.pageDescription = "Referrals for Mike Shoemake written by former colleagues.";
});
