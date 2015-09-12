'use strict';

angular.module('controllers.orders', [])

.controller('OrdersCtrl', ['$scope', '$http', function($scope, $http) {
  
  $http.get('/orders').success(function (orders) {
    $scope.orders = orders;
  });

}]);