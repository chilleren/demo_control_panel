'use strict';

angular.module('controllers.products', [])

.controller('ProductsCtrl', ['$scope', '$http', function($scope, $http) {
  var productsMasterList;
  
  $http.get('/products').success(function (products) {
    productsMasterList = products;
    $scope.products = products;
  });


  $scope.search = function () {
    $scope.products = productsMasterList.filter(function (product) {
      var searchString = $scope.searchString.toLowerCase();
      var nameFound = product.name.toLowerCase().indexOf($scope.searchString) > -1;
      var descriptionFound = product.description.toLowerCase().indexOf($scope.searchString) > -1;
      return  nameFound || descriptionFound;
    });
  }

}])

.controller('ProductDetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('/products/' + $routeParams.productId).success(function (product) {
    $scope.product = product;
  });
}]);