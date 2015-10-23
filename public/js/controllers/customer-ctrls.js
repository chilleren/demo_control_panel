'use strict';

angular.module('controllers.customers', [])

.controller('CustomersCtrl', ['$scope', '$http', function($scope, $http) {
  var customerMasterList;

  $http.get('/customers').success(function (customers) {
    customerMasterList = customers;
    $scope.customers = customerMasterList.map(addFullName);
  });

  $scope.search = function () {
    $scope.customers = customerMasterList.filter(function (customer) {
      var searchString = $scope.searchString.toLowerCase();
      var usernameFound = customer.username.toLowerCase().indexOf($scope.searchString) > -1;
      var emailFound = customer.email.toLowerCase().indexOf($scope.searchString) > -1;
      var fullNameFound = customer.fullName.toLowerCase().indexOf($scope.searchString) > -1;
      return  usernameFound || emailFound || fullNameFound;
    });
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