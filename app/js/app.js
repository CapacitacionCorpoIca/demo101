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
      controller: 'AboutController'
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
  //Controller
  app.controller("AboutController",
    [
      '$scope',
      'serviceWorker',
      function($scope, serviceWorker){

      	serviceWorker.getAll()
      	.then( complete );

      	function complete( data ){
      		console.log( data );
      		$scope.team = data;
      	}
        
      } 
    ]
  );
  //Directive
  app.directive('myWorker', function() {
    return {
      scope:{
        worker: '=model'
      },
      templateUrl: 'templates/my-worker.html'
    };
  });
  //Service
	app.factory('serviceWorker', function($http, $q) {
	  return {
	  	getAll: function(){
	  		return $http.get('http://api.randomuser.me/?results=20')
	  			.then( complete )
	  			.catch( falied );

	  			function complete( response ){
	  				return $q.when( response.data.results );
	  			}

	  			function falied( response ){
	  				return $q.reject( response );
	  			}
	  	}
	  }
	});
 }());