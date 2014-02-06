/**
 * Todos Controller
 */
doTodayApp.controller('TodoCtrl', function($scope) {
  // Array of Todo objects
  $scope.todos = [];

  // Working todo object
  $scope.workingTodo = '';

  /**
   * Add a new todo from the form
   */
  $scope.newTodo = function() {
    $scope.todos.push(createTodo($scope.workingTodo));
    $scope.workingTodo = '';
  };

  /**
   * Mark a todo as completed
   */
  $scope.completeTodo = function(todo) {
    todo.completed = true;
  };

});

/**
 * Todo constructor
 */
function createTodo(name) {
  return {
    name: name,
    completed: false
  };
}