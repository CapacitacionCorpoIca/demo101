(function() {
  "use strict";
  //App
  var app = angular.module("HelloWorldApp", [
  	'ngRoute',
  	'ngMessages'
  ]);
  //Routes
  app.config(function($routeProvider) {

    $routeProvider.when("/home", {
      templateUrl: 'templates/home.html'
    });

    $routeProvider.when("/about", {
      templateUrl: 'templates/about.html',
    });

    $routeProvider.when("/contact", {
      templateUrl: 'templates/contact.html',
      controller: 'ContactController'
    });

  });

  //Controller
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
  //Controller
  app.controller("ContactController",
    [
      '$scope',
      function($scope){

        $scope.contact = {};
        $scope.sendMail = sendMail;

        function sendMail(){
          console.log($scope.contact);
        }
      } 
    ]
  );
 }());