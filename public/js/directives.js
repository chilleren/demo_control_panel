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
.directive('recentSignups', function() {
  return {
    templateUrl: "js/partials/dashboard/recent-signups.html"
  }
})
.directive('outstandingOrders', function() {
  return {
    templateUrl: "js/partials/dashboard/outstanding-orders.html"
  }
})
.directive('vizualization', function() {
  return {
    templateUrl: "js/partials/dashboard/vizualization.html"
  }
})
.directive('sortLink', function() {
  return {
    templateUrl: "js/partials/shared/sort-link.html",
    scope: true,
    replace: true,
    link: function (scope, elem, attrs) {
      scope.label = attrs.label;
      var sortField = attrs.field;
      scope.sortReverse = false;

      scope.toggleSort = function () {
        scope.$parent.sortField = sortField;
        scope.$parent.sortReverse = !scope.$parent.sortReverse;
      }

      scope.showUpCaret = function () {
        return scope.$parent.sortField == sortField && !scope.$parent.sortReverse;
      }

      scope.showDownCaret = function () {
        return scope.$parent.sortField == sortField && scope.$parent.sortReverse;
      }
    }
  }
})
;