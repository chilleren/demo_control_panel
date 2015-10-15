'use strict';

var controlPanelApp = angular.module('controlPanelApp', [
  'ngRoute',
  'controllers.dashboard',
  'controllers.products',
  'controllers.orders',
  'controllers.customers',
  'directives'
]);

controlPanelApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'js/partials/dashboard/dashboard.html',
      controller: 'DashboardCtrl'
    })
    .when('/products', {
      templateUrl: 'js/partials/products/products.html',
      controller: 'ProductsCtrl'
    })
    .when('/orders', {
      templateUrl: 'js/partials/orders/orders.html',
      controller: 'OrdersCtrl'
    })
    .when('/customers', {
      templateUrl: 'js/partials/customers/customers.html',
      controller: 'CustomersCtrl'
    })
    .when('/customers/:customerId', {
      templateUrl: 'js/partials/customers/customer-details.html',
      controller: 'CustomerDetailsCtrl'
    })
    .when('/orders/:orderId', {
      templateUrl: 'js/partials/orders/order-details.html',
      controller: 'OrderDetailsCtrl'
    })
    .when('/products/:productId', {
      templateUrl: 'js/partials/products/product-details.html',
      controller: 'ProductDetailsCtrl'
    })
}]);