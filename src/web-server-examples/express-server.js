import express from 'express';

//express wants us to divide up our logic based on different routes!

//convention when using express is to name the server app. we do that below here
const app = express();

//get is an http request method
app.get('/hello', (req, res) => {
    console.log('received a get request on path /hello');
    res.send('hello from express!');
});

//user data
const users = [{
    id: '123',
    name: 'Claire Hughes'
}, {
    id:'124',
    name: 'Alex Magic'
}];

app.get('/', (req, res) => {
    res.send('This is the home route.');
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;//params references url parameters, ie. :id
    const user = users.find(u => u.id === userId);
    res.send(user);
})
app.listen(3000, () => {
    console.log('express server is listing on port 3000');
});