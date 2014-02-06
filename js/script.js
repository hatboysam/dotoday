var doTodayApp = angular.module('doTodayApp', ['ngRoute']);

/**
 * Routing
 */
doTodayApp.config(function($routeProvider) {
  // Route for the main page
  $routeProvider.when('/', {
      templateUrl: 'pages/todos.html',
      controller: 'TodoCtrl'
  });
});