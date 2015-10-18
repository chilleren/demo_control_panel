'use strict';

var myServices = angular.module('myServices', []);

myServices.factory('OrderService', function() {
  return {

    addComputedFields: function (order) {   
      switch (order.status) {
        case "Complete":
          order.statusLabel = "success";
          break;
        case "In Progress":
          order.statusLabel = "warning";
          break;
        case "Canceled":
          order.statusLabel = "danger";
          break;
      }

      order.total = order.quantity * order._product.price;
      order.customerDisplay = order._customer.username + ' (' + order._customer.email + ')';
      return order;
    }

  }
});