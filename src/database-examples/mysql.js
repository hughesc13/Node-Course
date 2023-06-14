import mysql from 'mysql';//is a node package which allows u to interface w database mysql
import fs from 'fs';
import path from 'path'; 

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'node_course_schema',
    user: 'node-course-user',
    password: 'maisa!234',//password
});

connection.connect();//this will connect to our database

fs.readFile(path.join(__dirname, 'new-products.txt'), 'utf8', (err, contents) => {
    if (err) return console.log(err);
    const productStrings = contents.split('\n');//splitting each product by newline char
    const products = productStrings.map((productString,i) => ({    //create objects to contain product properties
        id: i,
        name: productString.split(',')[0],//splitting string into 2 - first part is index 0, before comma, is name
        price: Number(productString.split(',')[1]),//second part is index 1, the price, converted to a Number bc its a number
    }));
    const productsInArray = products.map(product => [
        product.id,
        product.name,
        product.price,
    ]);

    connection.query(
        'INSERT INTO products (id, name, price) VALUES ?',
        [productsInArray],
        (err, products) => {
        if (err) return console.log(err);
        console.log("done inserting products");
    });

    connection.end();//close connection to mysql
});