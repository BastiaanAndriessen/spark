(function(){
  'use strict';
  var result = angular.module('spark.result',['spark.utils']);

  result.directive("result", [function(){
    return {
      restrict: "A",
      scope:{
        resultData: '='
      },
      templateUrl: "parts/result/result.html",
      controller: 'resultCtrl',
      controllerAs: 'result'
    };
  }]);

  result.controller('resultCtrl', ['$rootScope', '$scope', '$log', '$element', '$timeout', 'PATHS', 'utils',
  function($rootScope, $scope, $log, $element, $timeout, PATHS, utils){
    var result = this;
    $scope.resultData = $scope.resultData.snippet;
  }]);

  //REPLACING IMG WITH SVG FOR COLOR OVERLAYS (SVG FILL)
  result.directive('imageonload', function($rootScope, $log) {
      return {
          restrict: 'A',
          link: function(scope, element, attrs) {
            element.bind('load', function(){
              $log.log('testing kaka');
              var overlay = $(element).parent().parent().find('#add_video_overlay');
              overlay.height(overlay.parent().parent().height()).width(overlay.parent().parent().width()).css('margin-top', (-overlay.parent().parent().height())+'px');
            });
          }
      };
  });
})();
