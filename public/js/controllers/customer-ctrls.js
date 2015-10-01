'use strict';

angular.module('controllers.customers', [])

.controller('CustomersCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/customers').success(function (customers) {

    $scope.customers = customers;
  });
}])

.controller('CustomerDetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('/customers/' + $routeParams.customerId).success(function (customer) {
    $scope.customer = customer;
  });
}]);