'use strict';

var directives = angular.module('directives', []);

directives.directive('ordersFilter', function() {
  return {
    templateUrl: "js/partials/orders/orders-filter.html"
  }
});