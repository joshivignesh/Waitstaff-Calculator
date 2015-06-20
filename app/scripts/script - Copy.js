// Code goes here
////angular.module('waitstaffExample', [])
//// .controller('ExampleController', ['$scope', function ($scope) { }]);

////$scope.customermessages = { subtotal: 10, tip: 0, total: 0 }
////$scope.earnings = { tipTotal: 0, mealCount: 0, avgTipPerMeal: 0 }
////$scope.submit = function (basemealprice, taxrate) {
////    //business logic
////    //update
////    alert('Form Submitted');
////    $scope.customermessages.subtotal = basemealprice + (taxrate * 100);


   
////}

// Code goes here
angular.module('wsEx', [])
  .controller('calCtrl', function ($scope) {
      ////$scope[customerCharges] = {
      ////    subTotal: 0,
      ////    tip: 0,
      ////    total: 0
      ////}
      // $scope.fish = [{ category: 'freshwater', id: '1', name: 'trout', more: 'false' }, { category: 'freshwater', id: '2', name: 'bass', more: 'false' }]

      $scope.mealdetails = { items: [{ Basemeal: 20, Tax: 0, Tip: 0 }] }

      $scope.customerCharges ={items: [{ subTotal: 20, tip: 0, total: 0 }] }
      
      $scope.earnings = {items: [{ tipTotal: 0, mealCount: 1 }] }

      //$scope.totalPrice = function () {
      //    var total = 0;
      //    for (count = 0; count < $scope.items.length; count++) {
      //        total += $scope.items[count].Price * $scope.items[count].Quantity;
      //    }
      //    return total;
      //}

      $scope.submit = function (basemeal, tax, tip) {
          //business logic
          //update
          // alert(basemeal);
          // alert($scope.fish[0].category);

          //$scope.mealdetails.items.push({ Basemeal: basemeal, Tax: tax, Tip: tip });

          $scope.customerCharges.items.subTotal  = (basemeal * (tax / 100));
          $scope.customerCharges.items.tip       = (basemeal * (tip / 100));
          $scope.customerCharges.items.total     = ($scope.customerCharges.items.subTotal + $scope.customerCharges.items.tip);
          
          //$scope.customerCharges.items.push({
          //    subTotal: (basemeal * (tax / 100)),
          //    tip: (basemeal * (tip / 100)),
          //    total: 1  });

          //alert(tip)
         
          //$scope.earnings.items.push({
              
          //    tipTotal: $scope.customerCharges.items.tip,
          //    mealcount: $scope.customerCharges.items.count
          //});
          alert($scope.mealdetails.items.Basemeal);

          //$scope.total = function() {
          //    var total = 0;
          //    angular.forEach($scope.invoice.items, function(item) {
          //        total += item.qty * item.cost;
          //    })

         
          //$scope.customerCharges.items.push({
          //    tipTotal: $scope.customerCharges[0].total,
          //    mealCount: $scope.items.count,
          //    avgTipPerMeal: $scope.customerCharges[0].total / $scope.items.count
          //});

          //alert($scope.items[0].mealCount);

      }

     
      $scope.total = function (tip) {
          var total;
          angular.forEach($scope.customerCharges.items, function (item) {
              total += tip;
          })
          return total;
      }


      ////$scope.customerCharges.items.push({
      ////    subTotal: (basemeal * (tax / 100)),
      ////    tip: (basemeal * (tip / 100)),
      ////    total: 1
      ////});

      ////$scope.addItem = function (basemeal, tax, tip) {
      ////    $scope.mealdetails.items.push({ Basemeal: basemeal, Tax: tax, Tip: tip });
      ////    $scope.customerCharges.items.push({  subTotal: (basemeal * (tax / 100)),  tip: (basemeal * (tip / 100)), total: 1 });
      ////}
     

  });



//.controller('MainCtrl', ['$scope',function($scope) {
  
//    $scope.custom = true;
//        $scope.toggleCustom = function() {
//            $scope.custom = $scope.custom === false ? true: false;
//        };

//        $scope.integerval = /^\d*$/;

//        $scope.example = { value: 12    };

//  $scope.messages = [
//    {malename: '',
//    dirtytask: 'Dirtytask',
//    obnoxiouscelebrity: 'Obnoxious',
//    jobtitle: 'Jobtitle',
//    celebrity : 'Celebrity',
//    hugenumber : 'Hugenumber',
//    tedioustask : 'Tedioustask',
//    uselessskill : 'Uselessskill', 
//    adjective : 'Adjective'

//  }
//  ];



//}]);

