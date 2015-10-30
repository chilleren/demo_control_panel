'use strict';

var myServices = angular.module('myServices', ['ngResource']);

myServices.factory('Customer', ['$resource', function ($resource) {
  return $resource('/customers/:customerId', {}, {
    query: {method: 'GET', params: {}, isArray: true} 
  });
}]);

myServices.factory('Order', ['$resource', function ($resource) {
  return $resource('/orders/:orderId', {}, {
    query: {method: 'GET', params: {}, isArray: true} 
  });
}]);

myServices.factory('Product', ['$resource', function ($resource) {
  return $resource('/products/:productId', {}, {
    query: {method: 'GET', params: {}, isArray: true} 
  });
}]);

myServices.factory('SearchService', function () {
  var queryByDotNotation = function (obj, query) {
    var parts = query.split('.');
    var newObj = obj[parts[0]];
    if (parts[1]){
        parts.splice(0, 1);
        var newQuery = parts.join('.');
        return queryByDotNotation(newObj, newQuery);
    }
    return newObj;
  }

  return {
    //takes a list of objects, a search string, and an array of fields
    //returns a new list where the field values of the objects match the search string
    //@list: an array of objects
    //@searchString: a string to find
    //@fields: array of field names of objects in @list, can use dot notation to search nested fields
    search: function (list, searchString, fields) {
      return list.filter(function (item) {
        for (var i = 0; i < fields.length; i++) {
          var fieldValue = queryByDotNotation(item, fields[i]);
          if(fieldValue.toLowerCase().indexOf(searchString.toLowerCase()) > -1) {
            return true;
          }
        }
        return false;
      });
    }
  }
});

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