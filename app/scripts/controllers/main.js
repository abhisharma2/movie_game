angular.module('movieGameApp')
  .controller('movieController', function ($scope) {
    this.movies = data;
    this.current_movie = 1;
    $scope.Math = window.Math;
    this.show_score = 0;
  });

angular.module('movieGameApp')
  .controller('gameController', function () {

    this.addScore = function(movie){
      movie.ratings.push(this.player_score);
      this.player_score = 0;
    };
  });

angular.module('movieGameApp')
  .controller('submitController', function () {

    this.calcScore = function(movie){
      this.actual_score =  Math.abs(movie.ratings.critics_score - movie.ratings.player_score);
      movie.ratings.push(this.actual_score);
      movie.ratings.actual_score = 0;
    };
  });

  var data = [
              {
                id: 1,
                title: "Charlie and the Chocolate Factory",
                year: 2005,
                ratings: {
                  critics_score: 82,
                  player_score: 0
                }
              },
              {
                id: 2,
                title: "The Ring",
                year: 2002,
                ratings: {
                  critics_score: 72,
                  player_score: 0
                }
              },
              {
                id: 3,
                title: "The Incredibles",
                year: 2004,
                ratings: {
                  critics_score: 97,
                  player_score: 0
                  }
                },
              {
                id: 4,
                title: "The Godfather",
                year: 1972,
                ratings: {
                  critics_score: 100,
                  player_score: 0
                }
              },
              {
                id: 5,
                title: "Spaceballs",
                year: 1987,
                ratings: {
                  critics_score: 50,
                  player_score: 0
                }
              },
              {
                id: 6,
                title: "Star Wars: Episode III - Revenge of the Sith 3D",
                year: 2005,
                ratings: {
                  critics_score: 80,
                  player_score: 0
                }
              },
              {
                id: 7,
                title: "The Lord of the Rings: The Return of the King",
                year: 2003,
                ratings: {
                  critics_score: 94,
                  player_score: 0
                }
              },
              {
                id: 8,
                title: "The Matrix",
                year: 1999,
                ratings: {
                  critics_score: 87,
                  player_score: 0
                }
              },
              {
                id: 9,
                title: "Transformers: Revenge of the Fallen",
                year: 2009,
                ratings: {
                  critics_score: 19,
                  player_score: 0
                }
              },
              {
                id: 10,
                title: "The Bourne Ultimatum",
                year: 2007,
                ratings: {
                  critics_score: 94,
                  player_score: 0
                }
              },
              {
                id: 11,
                title: "Harry Potter and the Order of the Phoenix",
                year: 2007,
                ratings: {
                  critics_score: 79,
                  player_score: 0
                }
              },
              {
                id: 12,
                title: "Shrek the Third",
                year: 2007,
                ratings: {
                  critics_score: 40,
                  player_score: 0
                }
              },
              {
                id: 13,
                title: "Sweeney Todd: The Demon Barber of Fleet Street",
                year: 2007,
                ratings: {
                  critics_score: 86,
                  player_score: 0
                }
              },
              {
                id: 14,
                title: "Pirates of the Caribbean: At Worlds End",
                year: 2007,
                ratings: {
                  critics_score: 45,
                  player_score: 0
                }
              },
              {
                id: 15,
                title: "Indiana Jones and the Kingdom of the Crystal Skull",
                year: 2008,
                ratings: {
                  critics_score: 78,
                  player_score: 0
                }
              },
              {
                id: 16,
                title: "The Dark Knight Rises",
                year: 2012,
                ratings: {
                  critics_score: 88,
                  player_score: 0
                }
              },
              {
                id: 17,
                title: "The Amazing Spider-Man",
                year: 2012,
                ratings: {
                  critics_score: 73,
                  player_score: 0
                }
              },
              {
                id: 18,
                year: 2009,
                title: "The Ugly Truth",
                ratings: {
                  critics_score: 13,
                  player_score: 0
                }
              },
              {
                id: 19,
                title: "The Hunger Games",
                year: 2012,
                ratings: {
                  critics_score: 84,
                  player_score: 0
                }
              }
            ]
