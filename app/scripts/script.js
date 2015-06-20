// Code goes here
angular.module('wsEx', [])
  .controller('calCtrl', function ($scope) {

      //details for the meal
      $scope.mealdetails = [];

      //charges for a specific meal
      $scope.customerCharges = {
          subTotal: 0,
          tip: 0,
          total: 0
      }

      //total earnings
      $scope.earnings = {
          avgTipPerMeal: 0,
          tipTotal: 0,
          mealCount: 0
      };
      //$scope.earnings.tipTotal;
      //submit meal receive
      //calculations functions call
      $scope.submit = function (basemeal, tax, tip) {
          var meal = {
              basemeal: basemeal,
              tax: tax,
              tip: tip
          };
          $scope.mealdetails.push(meal);
          calCusCharges(meal);
          //alert($scope.customerCharges.subTotal);
          calMyEarnings($scope.mealdetails);
      }
      //calculate customer charges
      function calCusCharges(meal) {
          $scope.customerCharges.subTotal = (meal.basemeal * (meal.tax / 100));
          $scope.customerCharges.tip = (meal.basemeal * (meal.tip / 100));
          $scope.customerCharges.total = ($scope.customerCharges.subTotal + $scope.customerCharges.tip);
      }
      //calculate earnings
      function calMyEarnings(meals) {
          angular.forEach(meals, function (meal) {
              $scope.earnings.tipTotal += parseInt(meal.tip); //percentage calculation
          });
          $scope.earnings.mealCount = meals.length + 1;
          $scope.earnings.avgTipPerMeal = $scope.earnings.tipTotal / $scope.earnings.mealCount;
      }

      $scope.total = function (tip) {
          var total;
          angular.forEach($scope.customerCharges.items, function (item) {
              total += tip;
          })
          return total;
      }

  });
