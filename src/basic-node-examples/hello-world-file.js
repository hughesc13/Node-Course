const fs = require('fs');
fs.writeFile('hello.txt', 'hello world', (err) => {
    console.log('done!');
})