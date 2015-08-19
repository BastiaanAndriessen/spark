(function(){
  'use strict';

  // Declare app level module which depends on views, and components
  var app = angular.module('spark', [
    'ngRoute',
    'spark.config',
    'spark.utils',
    'spark.result',
    'spark.home',
    'spark.admin',
    'spark.search'
  ]);

  app.controller('AppCtrl', ['$rootScope', '$scope', '$log', '$q', '$timeout', 'APP_DATA', 'utils', function($rootScope, $scope, $log, $q, $timeout, APP_DATA, utils){
    var application = this;
    this.appData = APP_DATA;
    utils.log('[app.js] INITIALIZE APPLICATION STORMFORS STATS: V'+APP_DATA.APP_VERSION);
  }]);
})();
