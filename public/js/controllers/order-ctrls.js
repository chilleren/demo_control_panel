'use strict';

angular.module('controllers.orders', ['ui.bootstrap'])

.controller('OrdersCtrl', ['$scope', '$http', 'OrderService', function($scope, $http, OrderService) {
  var ordersMasterList;

  $scope.statusFilter = "All";
  
  $http.get('/orders').success(function (orders) {
    ordersMasterList = orders.map(OrderService.addComputedFields);
    $scope.orders = ordersMasterList
  });

  $scope.search = function () {
    $scope.orders = ordersMasterList.filter(function (order) {
      return containsSearchString(order, $scope.searchString) && filterByStatus(order, $scope.statusFilter);
    });
  }

  function containsSearchString (order, searchString) {
    var searchString = searchString.toLowerCase();
    var productNameFound = order._product.name.toLowerCase().indexOf(searchString) > -1;
    var customerUsernameFound = order._customer.username.toLowerCase().indexOf(searchString) > -1;
    var customerEmailFound = order._customer.email.toLowerCase().indexOf(searchString) > -1;
    return  productNameFound || customerUsernameFound || customerEmailFound;
  }

  function filterByStatus (order, statusFilter) {
    return statusFilter === "All" || order.status === statusFilter;
  }

}])

.controller('OrderDetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('/orders/' + $routeParams.orderId).success(function (order) {
    $scope.order = OrderService.addComputedFields(order);
  });
}]);
