(function(){
  'use strict';
   var conf = angular.module('spark.config', ['ngRoute']);

   //SET GENERAL VARIABLES
   conf.value('PATHS', {
     'BASE_URL': '/',
     'IMG_URL': 'assets/src',
     'LOGO_URL': 'src',
     'API_URL': '../api/'
   });
   conf.value('APP_DATA', {
     'APP_NAME': 'Spark',
     'APP_DESCRIPTION': "everyone's favorite clips on one big screen",
     'APP_VERSION': '0.1.0',
     'STAGE': 'development' //Set this constant to 'development' to turn on logging, set to anything else (p.e. 'production') to disable logging
   });
   conf.value('API_DATA', {
     'GAPI': {
       'API_KEY': 'AIzaSyCGZuUjvmATqyOVoxCaJOljn2VIcbxVkWo'
     }
   });

   conf.config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/', {
          templateUrl: 'index.html',
          controller: 'ConfCtrl'
      }).otherwise({
          redirectTo: '/'
      });
   }]);

   conf.controller('ConfCtrl', ['$log', '$location', 'PATHS', function ConfCtrl($log, $location, PATHS) {
        PATHS.BASE_URL = $location.absUrl().substring(0, $location.absUrl().length - $location.url().length).replace("#","");
        PATHS.IMG_URL = PATHS.BASE_URL + PATHS.IMG_URL;
   }]);
})();
