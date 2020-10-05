const express = require ('express');
const Twitter = require('twit');
const app = express();

app.listen(3000, () => console.log('Server running'))

const client = new Twitter({
    consumer_key: 'FRtLG6JqohPHqohARIiESAwyL',
    consumer_secret: 'PGZJOrAlkEkhNZLtpZnzbIvOrB7pSdTvhSGQASUozByMvHk5n1',
    access_token: '44606854-pfGfXk4URf1qalQ1OgyOV3w3b9sYNLkrFEMO2wB5b',
    access_token_secret: 'xH3xkEJszFPwJWMkhQIJXws0jO19G8laV490bmZqIxd0a'
    });

//Endpoint to retrieve the latest tweets on the timeline. The number of tweets that is retrieved is also mentioned
    app.get('/home_timeline',(req, res) => {

        const params = {tweet_mode: 'extended', count: 10};

        client
            .get(`statuses/home_timeline`, params)
            .then(timeline => {
                res.send(timeline);
                })
                .catch(error => {
                    res.send(error);
                 });
        });

//Endpoint for retrieving all the tweets where the authenticating user has been mentioned
    app.get('/mentions_timeline', (req, res) => {
        const params = {tweet_mode: 'extended', count: 10};

        client
            .get(`statuses/mentions_timeline`, params)
            .then(timeline => {
                res.send(timeline);
                })
                .catch(error => {
                    res.send(error);
                });
        });

//Endpoint for posting tweets
    app.post('/post_tweet', (req, res) => {
        tweet = req.body;

        client
            .post(`statuses/update`, tweet)
            .then(tweeting => {
            console.log(tweeting);
                res.send(tweeting);
                })
                .catch(error => {
                    res.send(error);
                });
        });