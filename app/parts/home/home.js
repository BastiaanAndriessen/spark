(function(){
  'use strict';

  var home = angular.module('spark.home',['ngRoute', 'spark.utils']);

  home.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'parts/home/home.html',
      controller: 'HomeCtrl'
    }).otherwise({ redirectTo: '/' });
  }])

  home.controller('HomeCtrl', ['$rootScope', '$scope', '$log', '$timeout', '$interval', '$location', 'APP_DATA', 'PATHS', 'utils',
  function($rootScope, $scope, $log, $timeout, $interval, $location, APP_DATA, PATHS, utils) {
    //SET DEFAULT VARIABLES
    var homeView = this;
    $scope.title = "HOME - "+APP_DATA.APP_DESCRIPTION;
    this.imgUrl = PATHS.IMG_URL;
    this.logoUrl = PATHS.LOGO_URL;
    this.baseUrl = PATHS.BASE_URL;

    utils.log('[home.js] INITIALIZE HOME CONTROLLER');

    //ADD EVENT LISTENERS

    //WATCH VARIABLES

    //INITIALIZE
    this.init = function(){
      utils.log('[home.js] INIT()');
    };

    $scope.startSession = function($event){
      $event.preventDefault();
      utils.log('[home.js] startSession');
    };

    this.init();
  }]);

  //UTIL HELPER FUNCTIONS

})();
