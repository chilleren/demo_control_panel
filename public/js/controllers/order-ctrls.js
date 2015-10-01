'use strict';

angular.module('controllers.orders', [])

.controller('OrdersCtrl', ['$scope', '$http', function($scope, $http) {
  
  $http.get('/orders').success(function (orders) {
    $scope.orders = orders;
  });

}])

.controller('OrderDetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('/orders/' + $routeParams.orderId).success(function (order) {
    $scope.order = order;
  });
}]);