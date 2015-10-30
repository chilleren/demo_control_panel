'use strict';

angular.module('controllers.products', [])

.controller('ProductsCtrl', ['$scope', 'Product', 'SearchService', function($scope, Product, SearchService) {
  var productsMasterList;

  $scope.minPrice = "";
  $scope.maxPrice = "";
  $scope.searchString = "";
  
  Product.query({}, function (products) {
    productsMasterList = products.map(addFullName);
    $scope.products = productsMasterList;
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

.controller('ProductDetailsCtrl', ['$scope', 'Product', '$routeParams', function($scope, Product, $routeParams) {
  Product.get({productId: $routeParams.productId}, function (product) {
    $scope.product = product;
  });
}]);