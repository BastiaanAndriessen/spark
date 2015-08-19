(function(){
  var utils = angular.module('spark.utils', []);

  utils.factory('utils', ['$log', 'APP_DATA', function($log, APP_DATA){
    var stage = APP_DATA.STAGE;
    utils.log = function(message){
      if(stage == 'development'){
        $log.log(message);
      }
    }
    return utils;
  }]);

  Object.size = function(obj) {
      var size = 0, key;
      for (key in obj) {
          if (obj.hasOwnProperty(key)) size++;
      }
      return size;
  };
})();
