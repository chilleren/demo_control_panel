'use strict';

angular.module('controllers.products', [])

.controller('ProductsCtrl', ['$scope', '$http', function($scope, $http) {
  
  $http.get('/products').success(function (products) {

    $scope.products = products;
  });
}]);