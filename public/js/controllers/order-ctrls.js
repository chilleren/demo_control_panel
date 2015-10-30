'use strict';

angular.module('controllers.orders', ['ui.bootstrap'])

.controller('OrdersCtrl', ['$scope', '$http', 'OrderService', 'SearchService', 
  function($scope, $http, OrderService, SearchService) {
    var ordersMasterList;

    $scope.statusFilter = "All";
    $scope.searchString = "";
    
    $http.get('/orders').success(function (orders) {
      ordersMasterList = orders.map(OrderService.addComputedFields);
      $scope.orders = ordersMasterList
    });


    $scope.search = function () {
      var searchFields = ['_product.name', '_customer.username', '_customer.email']
      var orders = SearchService.search(ordersMasterList, $scope.searchString, searchFields);
      $scope.orders = orders.filter(function (order) {
        return $scope.statusFilter === "All" || order.status === $scope.statusFilter;
      });
    }

  }
])

.controller('OrderDetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('/orders/' + $routeParams.orderId).success(function (order) {
    $scope.order = OrderService.addComputedFields(order);
  });
}]);
