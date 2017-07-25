// Controller
angular.module('app.downloads').controller('DownloadsController', function ($scope, $rootScope, downloadsService) {
    $rootScope.headerDisplay = "display: block;";
    $rootScope.lastPage = '/downloads';
    $scope.pageName = "Downloads";
	$scope.pageDescription = "Latest resumes and other documents in MS Word format.";
	$scope.downloadsList = downloadsService.getAll();
});
