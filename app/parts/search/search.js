'use strict';

var search = angular.module('spark.search',['ngRoute', 'spark.utils']);

search.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'parts/search/search.html',
    controller: 'SearchCtrl'
  });
}])

search.controller('SearchCtrl', ['$rootScope', '$scope', '$window', '$log', '$timeout', '$interval', '$location', 'PATHS', 'API_DATA', 'utils',
function($rootScope, $scope, $window, $log, $timeout, $interval, $location, PATHS, API_DATA, utils) {
  //SET DEFAULT VARIABLES
  var searchScope = $scope;
  $scope.arrAPIsToLoad = ['GAPI'];
  $scope.title = 'search';
  this.imgUrl = PATHS.IMG_URL;
  this.logoUrl = PATHS.LOGO_URL;
  this.baseUrl = PATHS.BASE_URL;
  $scope.searchValue = "";
  $scope.results = [];
  utils.log(searchScope.results);

  utils.log('[search.js] INITIALIZE SEARCH CONTROLLER');

  //ADD EVENT LISTENERS

  //WATCH VARIABLES

  //API LOADED HANDLER
  $window.handleAPILoaded = function(loadedAPI) {
    utils.log('handleAPILoaded');

    var index = $scope.arrAPIsToLoad.indexOf(loadedAPI);
    if(index > -1){
      $scope.arrAPIsToLoad.splice(index, 1);
      if($scope.arrAPIsToLoad.length == 0){
        $('#server_provider_name').prop('disabled', false).focus();
        $('#server_provider_name').attr('placeholder', 'search for videos');
      }
    }
  }

  //SEARCH
  $scope.searchKeyup = function(e){
    utils.log('[search.js] searchKeyup');
    var newSearchValue = $(e.currentTarget).val();
    if(newSearchValue != $scope.searchValue && newSearchValue.length > 0){
      utils.log('[search.js] start query');
      $scope.searchValue = newSearchValue;
      utils.log($scope.searchValue);
      var q = encodeURIComponent($scope.searchValue);

      var request = gapi.client.youtube.search.list({
        q: q,
        part: 'snippet',
        maxResults: '15'
      });

      request.execute(function(response){
        $scope.results = response.result;
        if(!$scope.$$phase){$scope.$apply()};
        /*$timeout(function(){
          $('.media_search_result').each(function(i){
            var overlay = $(this).find('#add_video_overlay');
            overlay.height(overlay.parent().parent().height()).width(overlay.parent().parent().width()).css('margin-top', (-overlay.parent().parent().height())+'px');
          });
        }, 100);*/
        utils.log(searchScope.results);
      });
    }
  };
}]);

//UTIL HELPER FUNCTIONS

function handleGAPILoaded(){
  gapi.client.setApiKey('AIzaSyCGZuUjvmATqyOVoxCaJOljn2VIcbxVkWo');
  gapi.client.load('youtube', 'v3');
  window.handleAPILoaded('GAPI');
}
