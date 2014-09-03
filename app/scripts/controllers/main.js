'use strict';

angular.module('movieGameApp')
  .controller('movieController', function () {
    this.movies = data;
  });

angular.module('movieGameApp')
  .controller('gameController', function () {
    this.player_score = 0;

    this.addScore = function(movie){
      movie.ratings.push(this.player_score);
      this.review = 0;
    };
  });

  var data = [
              {
                id: "1",
                title: "Charlie and the Chocolate Factory",
                year: 2005,
                ratings: {
                  critics_score: 82,
                  player_score: 0
                }
              },
              {
                id: "2",
                title: "The Ring",
                year: 2002,
                ratings: {
                  critics_score: 72,
                  player_score: 0
                  }
                },
              {
                id: "3",
                title: "The Incredibles",
                year: 2004,
                ratings: {
                  critics_score: 97,
                  player_score: 0
                  }
                },
              {
                id: "4",
                title: "The Godfather",
                ratings: {
                  critics_score: 100,
                  player_score: 0
                }
              },
              {
                id: "5",
                title: "Spaceballs",
                ratings: {
                  critics_score: 100,
                  player_score: 0
                }
              },
              {
                id: "6",
                title: "Star Wars: Episode III - Revenge of the Sith 3D",
                ratings: {
                  critics_score: 80,
                  player_score: 0
                }
              },
              {
                id: "7",
                title: "The Lord of the Rings: The Return of the King",
                ratings: {
                  critics_score: 94,
                  player_score: 0
                }
              },
              {
                id: "8",
                title: "The Matrix",
                ratings: {
                  critics_score: 87,
                  player_score: 0
                }
              },
              {
                id: "9",
                title: "Transformers: Revenge of the Fallen",
                ratings: {
                  critics_score: 19,
                  player_score: 0
                }
              },
              {
                id: "10",
                title: "The Bourne Ultimatum",
                ratings: {
                  critics_score: 94,
                  player_score: 0
                }
              },
              {
                id: "11",
                title: "Harry Potter and the Order of the Phoenix",
                ratings: {
                  critics_score: 79,
                  player_score: 0
                }
              },
              {
                id: "12",
                title: "Shrek the Third",
                ratings: {
                  critics_score: 40,
                  player_score: 0
                }
              },
              {
                id: "13",
                title: "Sweeney Todd: The Demon Barber of Fleet Street",
                ratings: {
                  critics_score: 86,
                  player_score: 0
                }
              },
              {
                id: "14",
                title: "Pirates of the Caribbean: At Worlds End",
                ratings: {
                  critics_score: 45,
                  player_score: 0
                }
              },
              {
                id: "15",
                title: "Indiana Jones and the Kingdom of the Crystal Skull",
                ratings: {
                  critics_score: 78,
                  player_score: 0
                }
              },
              {
                id: "16",
                title: "The Dark Knight Rises",
                ratings: {
                  critics_score: 88,
                  player_score: 0
                }
              },
              {
                id: "17",
                title: "The Amazing Spider-Man",
                ratings: {
                  critics_score: 73,
                  player_score: 0
                }
              },
              {
                id: "18",
                title: "The Ugly Truth",
                ratings: {
                  critics_score: 13,
                  player_score: 0
                }
              },
              {
                id: "19",
                title: "The Hunger Games",
                ratings: {
                  critics_score: 84,
                  player_score: 0
                }
              }
            ]
