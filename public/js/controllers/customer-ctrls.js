'use strict';

angular.module('controllers.customers', [])

.controller('CustomersCtrl', ['$scope', 'Customer', 'SearchService', function($scope, Customer, SearchService) {
  $scope.searchString = "";
  $scope.sortField = "username";
  $scope.sortReverse = false;

  var customerMasterList;

  Customer.query({}, function (customers) {
    customerMasterList = customers.map(addFullName);
    $scope.customers = customerMasterList;
  });

  $scope.search = function () {
    $scope.customers = SearchService.search(customerMasterList, $scope.searchString, ['username', 'email', 'fullName']);
  }

}])

.controller('CustomerDetailsCtrl', ['$scope', '$routeParams', 'OrderService', 'Customer',
  function($scope, $routeParams, OrderService, Customer) {

    Customer.get({customerId: $routeParams.customerId}, function (customer) {
      $scope.customer = addFullName(customer);
      $scope.customer._orders = $scope.customer._orders.map(OrderService.addComputedFields);
    });
  }
]);


function addFullName (customer) {
  customer.fullName = customer.firstname + ' ' + customer.lastname;
  return customer;
}