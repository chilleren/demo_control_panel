'use strict';

angular.module('controllers.dashboard', [])

.controller('DashboardCtrl', ['$scope', 'highchartsNG', 'Order', 'OrderService',
  function($scope, highchartsNG, Order, OrderService) {  
    
    Order.query({}, function (orders) {
      $scope.orders = orders.map(OrderService.addComputedFields);
      $scope.orderTotalSeries = [];
      $scope.orderCountSeries = [];

      var orderDateMap = {}
      var orderCountMap = {}

      orders.forEach(function (order) {
        var today = new Date();
        var dateObj = new Date(order.createdAt);
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        var d2 = Date.UTC(year, month, day);
        var d3 = new Date(year, month, day);
        //var utc = d2.getUTCDate();
        var d4= d3.toString();

        var utcString = "Date.UTC(" + year + "," + month + "," + day + ")"


        if (orderDateMap[d2]) {
          orderDateMap[d2] += order.total;
        } else {
          orderDateMap[d2] = order.total;
        }

        if (orderCountMap[d2]) {
          orderCountMap[d2] += 1;
        } else {
          orderCountMap[d2] = 1;
        }
      })

      var dates = Object.keys(orderDateMap);
      for (var i = dates.length - 30; i < dates.length; i++) {
        $scope.orderTotalSeries.push([dates[i], orderDateMap[dates[i]]]);
        $scope.orderCountSeries.push([dates[i], orderCountMap[dates[i]]]);
      }


      highchartsNG.ready(function () {

        $scope.chartConfig = {
          options: {
              chart: {
                //zoomType: 'x'
                  //type: 'line'
              }
          },
          series: [{
            data: $scope.orderTotalSeries
          }, {
            data: $scope.orderCountSeries
          }],
          title: {
              text: 'Recent Orders'
          },
          xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                month: '%e %b. %Y',
                year: '%e %b. %Y'
            }
          },
          yAxis: {
            title: {
              text: 'Order Amount ($)'
            }
          },

          loading: false
        }

      }, this);
    });


  }
]);