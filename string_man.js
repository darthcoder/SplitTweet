var long_string = "this is a string that i will try to break into a multitude of tiny pieces";
//var txt = long_string.split("");
var short_string = new String("");


const tweet_length = 10;

if (long_string.length%tweet_length === 0)
{
    var num_tweets = long_string.length/tweet_length;
}
else
{
    var num_tweets = Math.floor(long_string.length/tweet_length);
    console.log(num_tweets)
}

for (i = 0; i <= num_tweets; i++)
{
    short_string = long_string.substr(i*tweet_length, tweet_length);
    // console.log(i*tweet_length);
    // console.log((i+1)*tweet_length);

    setTimeout(function(){
        console.log(short_string)
    },2000);
    // console.log(short_string);
}

// console.log(long_string.substr(num_tweets*tweet_length));
 
// short_string = long_string.substr(tweet_length,2*tweet_length)
// console.log(short_string)

// console.log(__dirname);
// const fs = require('fs');
// var stringy = fs.readFileSync( __dirname + "/tweetfromhere.txt").toString();

// console.log(stringy)