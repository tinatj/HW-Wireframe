// var keys = require('./keys.js');

// var Twitter = require('twitter');
// var spotify = require('spotify');
// var request = require('request');

// DEPENDENCIES
// =====================================
// Import the API keys
const keys = require('./keys');
// Read and set environment variables
require("dotenv").config();

// Import the Twitter NPM package.
const Twitter = require('twitter');

// Import the node-spotify-api NPM package.
const Spotify = require('node-spotify-api');

// // Import the API keys
// var keys = require('./keys.js');

// Import the request npm package.
const request = require('request');

// Import the FS package for read/write.
const fs = require('fs');

// Initialize the spotify API client using our client id and secret
const spotify = new Spotify(keys.spotify);
 
let command = String(process.argv[2]);
let input = String(process.argc.slice[3];

// functns
// would write to the log.txt fiel
var getArtistNames = function (artist) {
    return artist.name;
};

/// => for performing a Sportify srch
var getMeSpotify = function (songName) {
    if (songName = undefined) {
        songName = "frozen";
    }
    spotify.search({
        type: "track",
        query: songName
    }, function (err, data) {
        if (err) {
            console.log("error: " + err);
            return;
        }
        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++) {
            console.log("artist(s): " + songs[i].artists.map(getArtistNames));
            console.log("song name: " + songs[i].name);
            console.log("preview song: " + songs[i].preview_url);
            console.log("album: " + songs[i].album.name);
            console.log("-----------------------------------");
        }
    });
};
var getMyTweets = function () {
    var client = new Twitter(keys.twitterKeys);

    var params = {
        screen_name: 'bikerightback'
    };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            //  console.log(tweets);
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].created_at);
                console.log(" ");
                console.log(tweets[i].text);
            }
        }
    });
};
//=> for doing Movie srch
var getMeMovie = function (movieName) {
    if (movieName === undefined) {
        movieName = "Guardians of the Galaxy Vol. 2";
    }

    // http://www.omdbapi.com/?t=eight+below
    // http://www.omdbapi.com/?i=tt3896198&apikey=511830f0
    var urlHit = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=511830f0";
    // "&y=&plot=full&tomatoes=true&apikey=511830f0";
    
    request(urlHit, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var jsonData = JSON.parse(body);

            console.log("Title: " + jsonData.Title);
            console.log("Year: " + jsonData.Year);
            console.log("Rated: " + jsonData.Rated);
            console.log("IMDB Rating: " + jsonData.imdbRating);
            console.log("Country: " + jsonData.Country);
            console.log("Language: " + jsonData.Language);
            console.log("Plot: " + jsonData.Plot);
            console.log("Actors: " + jsonData.Actors);
            console.log("Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);
        }
    });
};

// Function for running a command based on text file
var doWhatItSays = function () {
    fs.readFile("random.txt", "utf8", function (err, data) {
        console.log(data);

        var dataArr = data.split(' , ');

        if (dataArr.length === 2) {
            pick(dataArr[0], dataArr[1]);
        } else if (dataArr.length === 1) {
            pick(dataArr[0]);
        }
    });
};

// Function for determining which command is executed
var pick = function (caseData, functionData) {
    switch (caseData) {
        case "my-tweets":
            getMyTweets();
            break;
        case "spotify-this-song":
            getMeSpotify(functionData);
            break;
        case "movie-this":
            getMeMovie(functionData);
            break;
        case "do-what-it-says":
            doWhatItSays();
            break;
        default:
            console.log("LIRIbor does not  know that");
    }
};

// Function which takes in command line arguments and executes correct function accordingly
var runThis = function (argOne, argTwo) {
    pick(argOne, argTwo);
};

// MAIN PROCESS
// =====================================
runThis(process.argv[2], process.argv[3]);