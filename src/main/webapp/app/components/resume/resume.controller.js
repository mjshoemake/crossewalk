// Controller
angular.module('app.resume').controller('ResumeController', function ($scope, $rootScope) {
    $rootScope.headerDisplay = "display: block;";
    $rootScope.lastPage = '/resume';
    $scope.pageName = "Resume";
	$scope.pageDescription = "I am a leader and mentor who is skilled in building high performing software development teams. I cast a clear vision for the team, focusing on efficiency, teamwork, collaboration, and growing technical knowledge. I am also a developer who has built quality web applications for over 20 years.";
	$scope.skills = [['Java, Spring, Hibernate',
                      'Groovy, Grails',
                      'Dropwizard (microservices)',
                      'Maven, Ant, Jenkins, Git, Jira',
                      'Oracle, SQL Server, Postgres, MySql'],
                     ['AngularJS v1.4, Angular 2, Javascript, CSS3, HTML5',
                      'JUnit, Spock, Cucumber, Geb',
                      'JSON, XML, REST',
                      'Spring MVC, Struts, JSP, JSTL',
                      'Bootstrap']];
});
