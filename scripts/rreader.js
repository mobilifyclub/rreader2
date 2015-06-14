'use strict'
var rreaderApp = angular.module('rreaderApp', ['ngRoute'])
  .controller('MainController', function($scope, $route, $routeParams, $location){
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
  })
  .controller('BookController', function($scope, $routeParams){
    $scope.name = "BookController";
    $scope.params = $routeParams;
  })
  
  .config(function($routeProvider, $locationProvider){
    $routeProvider
    .when('/books:bookId', {
      templateUrl: 'book.html',
      controller: 'BookController',
    });

  $locationProvider.html5Mode(true);
});

angular.module('app', ['ngRoute']);
