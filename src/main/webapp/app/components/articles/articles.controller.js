// Controller
angular.module('app.articles').controller('ArticlesController', function ($scope, $rootScope) {
    $rootScope.headerDisplay = "display: block;";
    $rootScope.lastPage = '/articles';
    $scope.pageName = "Articles";
	$scope.pageDescription = "Articles written by Mike Shoemake";
});
