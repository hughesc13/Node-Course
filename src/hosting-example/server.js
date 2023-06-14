import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('hello from heroku!');
});

const PORT = process.env.PORT || 8000; //environment var!

app.listen(PORT, () => {
    console.log('app is listening on port ' + PORT);
});