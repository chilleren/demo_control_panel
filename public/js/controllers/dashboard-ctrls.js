'use strict';

angular.module('controllers.dashboard', [])

.controller('DashboardCtrl', ['$scope', 'highchartsNG', function($scope, highchartsNG) {

  highchartsNG.ready(function () {

    $scope.chartConfig = {
        options: {
            chart: {
                type: 'line'
            }
        },
        series: [{
            data: [10, 15, 12, 8, 7]
        }],
        title: {
            text: 'Hello'
        },

        loading: false
    }

  }, this)
}]);