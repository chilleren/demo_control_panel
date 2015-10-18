'use strict';

angular.module('controllers.customers', [])

.controller('CustomersCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/customers').success(function (customers) {

    $scope.customers = customers;
  });
}])

.controller('CustomerDetailsCtrl', ['$scope', '$http', '$routeParams', 'OrderService', 
    function($scope, $http, $routeParams, OrderService) {
    $http.get('/customers/' + $routeParams.customerId).success(function (customer) {
      $scope.customer = customer;
      $scope.customer._orders = $scope.customer._orders.map(OrderService.addComputedFields);
    }
  );
}]);