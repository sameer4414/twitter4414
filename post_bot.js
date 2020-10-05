const express = require ('express');
const Twitter = require('twit');

const app = express();

const client = new Twitter({
    consumer_key: 'BIyL2EsSemPj8mRaqpAsGTuFK',
    consumer_secret: 'mR0Zes9i2bJL3xFaOIqeckHZsxc1l3XQTRljMo9DF4g8lzIGAZ',
    access_token: '44606854-1RLgpNndecg1rlyRzw8TRkMgPytxr2yi8fZ6Bv4Gj',
    access_token_secret: 'UajqdFj1goFauFJVXDotHiJwEZUdDjwAzZ2hxvNz6pDDw'
    });

app.use(require('cors')());
app.use(require('body-parser').json());

//Endpoint for basic Twitter bot that updates a user's status
    app.post('/post_tweet', (req, res) => {
        tweet = {status: "Test tweet from api"};

        client
            .post(`statuses/update`, tweet)
            .then(timeline => {
                console.log(timeline);

                res.send(tweeting);
                })
                .catch(error => {
                    res.send(error);
                });
        });

app.listen(3000, () => console.log('Server running'))