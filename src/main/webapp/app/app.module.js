angular.module('app', ['ngRoute','ngResource','app.downloads','app.referrals','app.articles','app.resume','app.shared-directives']);

angular.module('app').config(function($logProvider){
  $logProvider.debugEnabled(true);
});

