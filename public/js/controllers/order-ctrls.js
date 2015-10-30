'use strict';

angular.module('controllers.orders', ['ui.bootstrap'])

.controller('OrdersCtrl', ['$scope', 'Order', 'OrderService', 'SearchService', 
  function($scope, Order, OrderService, SearchService) {
    var ordersMasterList;

    $scope.statusFilter = "All";
    $scope.searchString = "";
    $scope.sortField = "orderNumber";
    $scope.sortReverse = true;
    $scope.minTotal = "";
    $scope.maxTotal = "";
    
    Order.query({}, function (orders) {
      ordersMasterList = orders.map(OrderService.addComputedFields);
      $scope.orders = ordersMasterList;
    });

    $scope.search = function () {
      var searchFields = ['_product.name', '_customer.username', '_customer.email']
      var orders = SearchService.search(ordersMasterList, $scope.searchString, searchFields);
      $scope.orders = orders.filter(function (order) {
        return inPriceRange(order, $scope.minTotal, $scope.maxTotal) && 
          ($scope.statusFilter === "All" || order.status === $scope.statusFilter);
      });
    }

    function inPriceRange (order, mintotal, maxtotal) {
      mintotal = +(mintotal || 0);
      maxtotal = +(maxtotal || Infinity);
      return order.total > mintotal && order.total < maxtotal;
    }


  }
])

.controller('OrderDetailsCtrl', ['$scope', 'Order', '$routeParams', 'OrderService', 
  function($scope, Order, $routeParams, OrderService) {
    Order.get({orderId: $routeParams.orderId}, function (order) {
      $scope.order = OrderService.addComputedFields(order);
    });
  }
]);
