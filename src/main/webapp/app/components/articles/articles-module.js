angular.module('app.articles', ['ngRoute', 'ngSanitize', 'ngResource']);

var articlesUrlPrefix = 'app/components/articles/';

// Routes
angular.module('app.articles').config(function($routeProvider) {
	$routeProvider.when('/articles', {templateUrl: articlesUrlPrefix + 'articles.html', controller: 'ArticlesController'});
});
