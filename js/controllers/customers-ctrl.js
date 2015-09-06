'use strict';

angular.module('controllers.customers', [])

.controller('CustomersCtrl', ['$scope', function($scope) {
  $scope.customers = [{name: "bob"}, {name: "alice"}]
}]);