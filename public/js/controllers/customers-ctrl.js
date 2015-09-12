'use strict';

angular.module('controllers.customers', [])

.controller('CustomersCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/customers').success(function (customers) {

    $scope.customers = customers;
  });
}]);