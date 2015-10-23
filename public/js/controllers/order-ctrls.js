'use strict';

angular.module('controllers.orders', ['ui.bootstrap'])

.controller('OrdersCtrl', ['$scope', '$http', 'OrderService', function($scope, $http, OrderService) {
  var ordersMasterList;
  
  $http.get('/orders').success(function (orders) {
    ordersMasterList = orders.map(OrderService.addComputedFields);
    $scope.orders = ordersMasterList
  });

  $scope.search = function () {
    $scope.orders = ordersMasterList.filter(function (order) {
      var searchString = $scope.searchString.toLowerCase();
      var productNameFound = order._product.name.toLowerCase().indexOf($scope.searchString) > -1;
      var customerUsernameFound = order._customer.username.toLowerCase().indexOf($scope.searchString) > -1;
      var customerEmailFound = order._customer.email.toLowerCase().indexOf($scope.searchString) > -1;
      return  productNameFound || customerUsernameFound || customerEmailFound;
    });
  }

  $scope.filterByStatus = function () {
    $scope.orders = ordersMasterList.filter(function (order) {
      if ($scope.statusFilter === "All") {
        return true;
      }
      return  order.status === $scope.statusFilter;
    });
  }

}])

.controller('OrderDetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('/orders/' + $routeParams.orderId).success(function (order) {
    $scope.order = OrderService.addComputedFields(order);
  });
}]);
