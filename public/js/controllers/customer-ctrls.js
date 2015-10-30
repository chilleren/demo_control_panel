'use strict';

angular.module('controllers.customers', [])

.controller('CustomersCtrl', ['$scope', 'Customers', 'SearchService', function($scope, Customers, SearchService) {
  $scope.searchString = "";

  var customerMasterList;

  Customers.query({}, function (customers) {
    customerMasterList = customers.map(addFullName);
    $scope.customers = customerMasterList;
  });

  $scope.search = function () {
    $scope.customers = SearchService.search(customerMasterList, $scope.searchString, ['username', 'email', 'fullName']);
  }

}])

.controller('CustomerDetailsCtrl', ['$scope', '$http', '$routeParams', 'OrderService', 
    function($scope, $http, $routeParams, OrderService) {
    $http.get('/customers/' + $routeParams.customerId).success(function (customer) {
      $scope.customer = customer;
      $scope.customer._orders = $scope.customer._orders.map(OrderService.addComputedFields);
    }
  );
}]);


function addFullName (customer) {
  customer.fullName = customer.firstname + ' ' + customer.lastname;
  return customer;
}