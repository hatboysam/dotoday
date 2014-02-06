/**
 * Todos Controller
 */
doTodayApp.controller('TodoCtrl', function($scope) {
  // Array of Todo objects
  $scope.todos = [];

  // Working todo object
  $scope.workingTodo = '';

  /**
   * Add a new todo
   */
  $scope.newTodo = function() {
    $scope.todos.push({ name: $scope.workingTodo });
    $scope.workingTodo = '';
  };
});