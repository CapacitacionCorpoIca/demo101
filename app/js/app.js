(function() {
  "use strict";
  var app = angular.module("HelloWorldApp", []);

  app.controller("HelloWorldController",
    [
      '$scope',
      function($scope){
        $scope.numberA = 0;
        $scope.numberB = 0;
        $scope.total = 0;

        $scope.calc = function(){
          $scope.total = ($scope.numberA + $scope.numberB) * 2;
        }
      } 
    ]
  );
 }());