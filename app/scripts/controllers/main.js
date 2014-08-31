'use strict';

angular.module('movieGameApp')
  .controller('movieController', function ($scope, $http) {

      $timeout(function() {
        $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json?page_limit=16&page=1&country=us', {
            params: {
                apikey: 'xvbv8w8sfb2wnp3um5erf6sw',
                callback: 'JSON_CALLBACK'
            }
        })
        .success(function (data) {
            $scope.movies = data;
        });
      },0);


  });
