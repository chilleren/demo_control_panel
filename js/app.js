'use strict';

var controlPanelApp = angular.module('controlPanelApp', [
  'ngRoute',
  'controllers.main',
  'controllers.dashboard',
  'controllers.products',
  'controllers.orders',
  'controllers.customers'
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
}]);