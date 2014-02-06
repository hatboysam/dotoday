var doTodayApp = angular.module('doTodayApp', ['ngRoute']);

doTodayApp.controller('MainCtrl', function($scope) {
  $scope.message = "Hello, DoToday";
});