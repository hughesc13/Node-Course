"use strict";

var fs = require('fs');
fs.writeFile('hello.txt', 'hello world', function (err) {
  console.log('done!');
});