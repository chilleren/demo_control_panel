'use strict';

angular.module('controllers.products', [])

.controller('ProductsCtrl', ['$scope', '$http', function($scope, $http) {
  var productsMasterList;

  $scope.minPrice = "";
  $scope.maxPrice = "";
  
  $http.get('/products').success(function (products) {
    productsMasterList = products;
    $scope.products = products;
  });


  $scope.search = function () {
    $scope.products = productsMasterList.filter(function (product) {
      return containsSearchString(product, $scope.searchString) && inPriceRange(product, $scope.minPrice, $scope.maxPrice)
    });
  }

  function containsSearchString (product, searchString) {
    var searchString = searchString.toLowerCase();
    var nameFound = product.name.toLowerCase().indexOf(searchString) > -1;
    var descriptionFound = product.description.toLowerCase().indexOf(searchString) > -1;
    return  nameFound || descriptionFound;
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