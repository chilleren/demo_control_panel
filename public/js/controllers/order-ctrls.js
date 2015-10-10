'use strict';

angular.module('controllers.orders', [])

.controller('OrdersCtrl', ['$scope', '$http', function($scope, $http) {
  
  $http.get('/orders').success(function (orders) {
    
    var ordersMasterList = orders.map(addOrderLabel);

    $scope.orders = ordersMasterList

  });

}])

.controller('OrderDetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('/orders/' + $routeParams.orderId).success(function (order) {
    $scope.order = addOrderLabel(order);
  });
}]);


function addOrderLabel (order) {
  switch (order.status) {
    case "Complete":
      order.statusLabel = "success";
      break;
    case "In Progress":
      order.statusLabel = "warning";
      break;
    case "Canceled":
      order.statusLabel = "danger";
      break;
  }
  return order;
}