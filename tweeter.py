import os
import sys
import tweepy

CONSUMER_KEY = os.environ['TWITTER_CONSUMER_KEY']
CONSUMER_SECRET =  os.environ['TWITTER_CONSUMER_SECRET']
ACCESS_KEY =  os.environ['TWITTER_ACCESS_TOKEN_KEY']
ACCESS_SECRET = os.environ['TWITTER_ACCESS_TOKEN_SECRET']

auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_KEY, ACCESS_SECRET)

api = tweepy.API(auth)
filename = sys.argv[1]
f = open(filename,'r')

data = f.read()
short_string = ""
TWEET_LEN = 140

num_tweets = int(len(data)/TWEET_LEN)


# print(data)

# print(os.environ['TWITTER_CONSUMER_SECRET'])

for i in range(num_tweets+1):
    short_string = data[i*TWEET_LEN:(i+1)*TWEET_LEN]
    # print(i)
    # print(short_string)
    api.update_status(short_string)

