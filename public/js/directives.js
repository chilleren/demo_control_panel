'use strict';

var directives = angular.module('directives', []);

directives.directive('ordersFilter', function() {
  return {
    templateUrl: "js/partials/orders/orders-filter.html"
  }
})
.directive('productsFilter', function() {
  return {
    templateUrl: "js/partials/products/products-filter.html"
  }
})
.directive('customersFilter', function() {
  return {
    templateUrl: "js/partials/customers/customers-filter.html"
  }
})
;