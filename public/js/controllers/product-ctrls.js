'use strict';

angular.module('controllers.products', [])

.controller('ProductsCtrl', ['$scope', '$http', 'SearchService', function($scope, $http, SearchService) {
  var productsMasterList;

  $scope.minPrice = "";
  $scope.maxPrice = "";
  $scope.searchString = "";
  
  $http.get('/products').success(function (products) {
    productsMasterList = products;
    $scope.products = products;
  });


  $scope.search = function () {
    var products = SearchService.search(productsMasterList, $scope.searchString, ['name', 'description']);
    $scope.products = products.filter(function (product) {
      return inPriceRange(product, $scope.minPrice, $scope.maxPrice)
    });
  }

  function inPriceRange (product, minPrice, maxPrice) {
    minPrice = +(minPrice || 0);
    maxPrice = +(maxPrice || Infinity);
    return product.price > minPrice && product.price < maxPrice;
  }

}])

.controller('ProductDetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('/products/' + $routeParams.productId).success(function (product) {
    $scope.product = product;
  });
}]);