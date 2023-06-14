import fs from 'fs';
import path from 'path';


 

fs.writeFile(path.join(__dirname, 'example.txt'), 'hello callbacks!', (err) => {
    fs.readFile(path.join(__dirname, 'example.txt'), 'utf8', (err, data) => {
        if (err) console.log(err);
        console.log(data);

        fs.unlink(path.join(__dirname, 'example.txt'), (err, data) => {
            if (err) console.log(err);
            console.log("successfully deleted example.txt.");
        });
    });
});

//(err, data) => is the callback function! error first then data
