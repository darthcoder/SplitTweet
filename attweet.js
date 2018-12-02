var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const fs = require('fs');

var long_string = fs.readFileSync(__dirname + "/tweetfromhere.txt").toString();

//var stat = {status: stringy};
// {status: 'I like pizza'}
// client.post('statuses/update', stat,  function(error, tweet, response) {
//   if(error) 
//   {
//       console.log(error);
//   }
//   //console.log(tweet);  // Tweet body. 
//   //console.log(response);  // Raw response object. 
// });

var short_string = new String("");

const tweet_length = 140;

if (long_string.length%tweet_length === 0)
{
    var num_tweets = long_string.length/tweet_length;
}
else
{
    var num_tweets = Math.floor(long_string.length/tweet_length);
    console.log(num_tweets)
}

var stats = [];
for (i = 0; i <= num_tweets; i++)
{
   short_string = long_string.substr(i*tweet_length, tweet_length);
   stats.push({status: short_string});
}
stats.forEach(function(element, index, array){
   (function(e){ //Closure function
      setTimeout(function(){
        client.post('statuses/update', e,  function(error, tweet,response) {
               if(error) 
              {
                console.log(error);
               }
                //console.log(tweet);  // Tweet body. 
               console.log(response);  // Raw response object. 
          });

        }, 3000);
      })(element);
});