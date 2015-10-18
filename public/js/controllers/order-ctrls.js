'use strict';

angular.module('controllers.orders', ['ui.bootstrap'])

.controller('OrdersCtrl', ['$scope', '$http', 'OrderService', function($scope, $http, OrderService) {
  var ordersMasterList;
  
  $http.get('/orders').success(function (orders) {
    ordersMasterList = orders.map(OrderService.addComputedFields);
    $scope.orders = ordersMasterList
  });

  $scope.status = {
    opened: false
  };

  $scope.dt = new Date();

  $scope.open = function($event) {
    console.log('trying to open')
    $scope.status.opened = true;
  };

  $scope.search = function () {
    $scope.orders = ordersMasterList.filter(function (order) {
      var searchString = $scope.searchString.toLowerCase();
      var productNameFound = order._product.name.toLowerCase().indexOf($scope.searchString) > -1;
      var customerUsernameFound = order._customer.username.toLowerCase().indexOf($scope.searchString) > -1;
      var customerEmailFound = order._customer.email.toLowerCase().indexOf($scope.searchString) > -1;
      return  productNameFound || customerUsernameFound || customerEmailFound;
    });
  }

}])

.filter('highlight', function ($sce) {
  return function(text, phrase) {
    if (phrase) {
      text = text.replace(new RegExp('(' + phrase + ')', 'gi'), '<span class="highlighted">$1</span>');
    }

    return $sce.trustAsHtml(text)
  }
})

.controller('OrderDetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('/orders/' + $routeParams.orderId).success(function (order) {
    $scope.order = OrderService.addComputedFields(order);
  });
}]);
