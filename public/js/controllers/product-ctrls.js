'use strict';

angular.module('controllers.products', [])

.controller('ProductsCtrl', ['$scope', '$http', function($scope, $http) {
  
  $http.get('/products').success(function (products) {
    $scope.products = products;
  });

}])

.controller('ProductDetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('/products/' + $routeParams.productId).success(function (product) {
    $scope.product = product;
  });
}]);