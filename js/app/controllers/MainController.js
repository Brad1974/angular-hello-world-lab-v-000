function MainController($scope) {
  $scope.name = "Brutus"
  $scope.address = "his dog house"
  $scope.city = "Portland"
}

angular
  .module('app')
  .controller('MainController', MainController);
