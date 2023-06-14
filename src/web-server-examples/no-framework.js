import http from 'http';

//go to localhost:3000 to see it in action :)
//request and response arguments
const server = http.createServer((req, res) => {
    const { url } = req;
    if (url === '/'){
        res.writeHead(200, { 'Content-Type': 'text/html'});//only written if everything goes well
        res.write('<h1>Home Page</h1>');//html script displayed in web browser
    } else if (url === '/about'){
        res.writeHead(200, { 'Content-Type': 'text/html'});//only written if everything goes well
        res.write('<h1>About</h1>')
    } else if (url === '/users'){
        res.writeHead(200, { 'Content-Type': 'text/html'});//only written if everything goes well
        res.write('<h1>Users</h1>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>not found</h1>');
    }
    res.end();
});

server.listen(3000, () => {
    console.log("server is listening at port 3000");
});

