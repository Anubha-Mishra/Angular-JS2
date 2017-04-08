(function (){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.name = "";
    $scope.message = "";
    $scope.class = "";
    $scope.messageOutput = function() {
      if($scope.name != "") {
        var names = ($scope.name).split(',');
        var count = 0;
        for(var name in names) {
          if((names[name] != " ") && (names[name].length != 0)) {
            count++;
          }
        }
        if(count <= 3) {
          $scope.message = "Enjoy!";
          $scope.class = "green";
        }
        else {
          $scope.message = "Too much!";
          $scope.class = "green";
        }
      }
      else {
        $scope.message = "Please enter data first";
        $scope.class = "red";
      }
    };
  }

})();
