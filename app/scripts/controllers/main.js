'use strict';

angular.module('movieGameApp')
  .controller('movieController', function ($scope, $http) {

      $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies/770672122.json', {
          params: {
              apikey: 'xvbv8w8sfb2wnp3um5erf6sw',
              callback: 'JSON_CALLBACK'
          }
      })
      .success(function (data) {
          $scope.toy_story_3 = data;
      });

      $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies/13602.json', {
          params: {
              apikey: 'xvbv8w8sfb2wnp3um5erf6sw',
              callback: 'JSON_CALLBACK'
          }
      })
      .success(function (data) {
          $scope.judge_dredd = data;
      })

      $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies/12161.json', {
          params: {
              apikey: 'xvbv8w8sfb2wnp3um5erf6sw',
              callback: 'JSON_CALLBACK'
          }
      })
      .success(function (data) {
          $scope.the_abyss = data;
      });

      $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies/10223.json', {
          params: {
              apikey: 'xvbv8w8sfb2wnp3um5erf6sw',
              callback: 'JSON_CALLBACK'
          }
      })
      .success(function (data) {
          $scope.spaceballs = data;
      });

      $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies/12911.json', {
          params: {
              apikey: 'xvbv8w8sfb2wnp3um5erf6sw',
              callback: 'JSON_CALLBACK'
          }
      })
      .success(function (data) {
          $scope.godfather = data;
      });

      // var toy_story_3_score = toy_story_3.ratings.critics_score;
      // var judge_dredd_score = judge_dredd.ratings.critics_score;
      // var the_abyss_score = the_abyss.ratings.critics_score;
      // var spaceballs_score = spaceballs.ratings.critics_score;
      // var godfather_score = godfather.ratings.critics_score;
  });
