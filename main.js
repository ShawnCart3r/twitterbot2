const Twit = require('twit')

const T = new Twit({
    consumer_key:         'uNlLnv7o2SssQNpTQmm1v6TTu',
  consumer_secret:      'Rzjo5ZEDlv33WHz3aHe35iDmqyw5Tp02hHraDbFeB1tpgo086o',
  access_token:         '80438435-nndJ7Vezgcy7X7S3mojFJTsUYeKpfPItJ3Mtl7LmY',
  access_token_secret:  'jBBKa0YEIZq7F1l1t33GiG2jIDnvqsVYVVga5q5K8f7dZ',
  timeout_ms:           60 * 1000,
});

T.post("statuses/retweet/:id", { id:697162548957700096})

const stream = T.stream('statuses/filter', {track: ['@AliteralGengar'] });
stream.on('tweet',
tweet => {
    console.log('tweet recieved!', tweet)
    T.post(
        'statuses/retweet/:id',
        {id: tweet.id },
        (err, data, response) => {
            console.log(err,data, response);
        }
    )
}
);
