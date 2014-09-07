'use strict';

angular.module('movieGameApp')
  .controller('movieController', function () {
    this.movies = data;
    this.current_movie = 1;
  });

angular.module('movieGameApp')
  .controller('gameController', function () {
    // Grab random movie

    this.addScore = function(movie){
      movie.ratings.push(this.player_score);
      this.player_score = 0;
    };

    this.calculateActualScore = function(movie) {
      this.actual_score = Math.abs(this.critics_score - this.player_score);
      movie.ratings.push(this.actual_score);
    };

    this.overallGameScore = function(movies) {
      var arry = []; //set movie array limit to 5?
      var total = 0;
      for (i=0;i<movies.length;i++) {
        total += movies[i].ratings.actual_score;
      }
    };

    this.gameScoreScale = function() {
    };

  });

  var data = [
              {
                id: 1,
                title: "Charlie and the Chocolate Factory",
                year: 2005,
                ratings: {
                  critics_score: 82,
                  player_score: 0,
                  actual_score: 82
                }
              },
              {
                id: 2,
                title: "The Ring",
                year: 2002,
                ratings: {
                  critics_score: 72,
                  player_score: 0,
                  actual_score: 72
                }
              },
              {
                id: 3,
                title: "The Incredibles",
                year: 2004,
                ratings: {
                  critics_score: 97,
                  player_score: 0,
                  actual_score: 97
                  }
                },
              {
                id: 4,
                title: "The Godfather",
                ratings: {
                  critics_score: 100,
                  player_score: 0,
                  actual_score: 100
                }
              },
              {
                id: 5,
                title: "Spaceballs",
                ratings: {
                  critics_score: 50,
                  player_score: 0,
                  actual_score: 50
                }
              },
              {
                id: 6,
                title: "Star Wars: Episode III - Revenge of the Sith 3D",
                ratings: {
                  critics_score: 80,
                  player_score: 0,
                  actual_score: 80
                }
              },
              {
                id: 7,
                title: "The Lord of the Rings: The Return of the King",
                ratings: {
                  critics_score: 94,
                  player_score: 0,
                  actual_score: 94
                }
              },
              {
                id: 8,
                title: "The Matrix",
                ratings: {
                  critics_score: 87,
                  player_score: 0,
                  actual_score: 87
                }
              },
              {
                id: 9,
                title: "Transformers: Revenge of the Fallen",
                ratings: {
                  critics_score: 19,
                  player_score: 0,
                  actual_score: 19
                }
              },
              {
                id: 10,
                title: "The Bourne Ultimatum",
                ratings: {
                  critics_score: 94,
                  player_score: 0,
                  actual_score: 94
                }
              },
              {
                id: 11,
                title: "Harry Potter and the Order of the Phoenix",
                ratings: {
                  critics_score: 79,
                  player_score: 0,
                  actual_score: 79
                }
              },
              {
                id: 12,
                title: "Shrek the Third",
                ratings: {
                  critics_score: 40,
                  player_score: 0,
                  actual_score: 40
                }
              },
              {
                id: 13,
                title: "Sweeney Todd: The Demon Barber of Fleet Street",
                ratings: {
                  critics_score: 86,
                  player_score: 0,
                  actual_score: 86
                }
              },
              {
                id: 14,
                title: "Pirates of the Caribbean: At Worlds End",
                ratings: {
                  critics_score: 45,
                  player_score: 0,
                  actual_score: 45
                }
              },
              {
                id: 15,
                title: "Indiana Jones and the Kingdom of the Crystal Skull",
                ratings: {
                  critics_score: 78,
                  player_score: 0,
                  actual_score: 78
                }
              },
              {
                id: 16,
                title: "The Dark Knight Rises",
                ratings: {
                  critics_score: 88,
                  player_score: 0,
                  actual_score: 88
                }
              },
              {
                id: 17,
                title: "The Amazing Spider-Man",
                ratings: {
                  critics_score: 73,
                  player_score: 0,
                  actual_score: 73
                }
              },
              {
                id: 18,
                title: "The Ugly Truth",
                ratings: {
                  critics_score: 13,
                  player_score: 0,
                  actual_score: 13
                }
              },
              {
                id: 19,
                title: "The Hunger Games",
                ratings: {
                  critics_score: 84,
                  player_score: 0,
                  actual_score: 84
                }
              }
            ]
