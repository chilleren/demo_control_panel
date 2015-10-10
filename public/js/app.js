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
      templateUrl: 'js/partials/dashboard.html',
      controller: 'DashboardCtrl'
    })
    .when('/products', {
      templateUrl: 'js/partials/products.html',
      controller: 'ProductsCtrl'
    })
    .when('/orders', {
      templateUrl: 'js/partials/orders.html',
      controller: 'OrdersCtrl'
    })
    .when('/customers', {
      templateUrl: 'js/partials/customers.html',
      controller: 'CustomersCtrl'
    })
    .when('/customers/:customerId', {
      templateUrl: 'js/partials/customer-details.html',
      controller: 'CustomerDetailsCtrl'
    })
    .when('/orders/:orderId', {
      templateUrl: 'js/partials/order-details.html',
      controller: 'OrderDetailsCtrl'
    })
    .when('/products/:productId', {
      templateUrl: 'js/partials/product-details.html',
      controller: 'ProductDetailsCtrl'
    })
}]);