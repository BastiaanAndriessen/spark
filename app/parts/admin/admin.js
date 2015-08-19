'use strict';

var admin = angular.module('spark.admin',['ngRoute', 'spark.utils']);

admin.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/admin', {
    templateUrl: 'parts/admin/admin.html',
    controller: 'AdminCtrl'
  });
}])

admin.controller('AdminCtrl', ['$rootScope', '$scope', '$window', '$log', '$timeout', '$interval', '$location', 'PATHS', 'API_DATA', 'utils',
function($rootScope, $scope, $window, $log, $timeout, $interval, $location, PATHS, API_DATA, utils) {
  //SET DEFAULT VARIABLES
  var adminScope = $scope;
  $scope.title = 'admin';
  this.imgUrl = PATHS.IMG_URL;
  this.logoUrl = PATHS.LOGO_URL;
  this.baseUrl = PATHS.BASE_URL;

  utils.log('[admin.js] INITIALIZE ADMIN CONTROLLER');

  //ADD EVENT LISTENERS

  //WATCH VARIABLES
}]);

//UTIL HELPER FUNCTIONS
