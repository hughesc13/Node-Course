import fs from 'fs';
import path from 'path';

//const data = fs.readFileSync(path.join(__dirname, 'example.txt'), 'utf8');
//data will contain the file we're reading
//__dirname //refers to absolute path of directory where file resides

//console.log(data);

//fs.writeFileSync(path.join(__dirname, 'my-new-file.txt'), 'the text im writing');

//fs.appendFileSync(path.join(__dirname, 'my-json-file.json'), JSON.stringify({message: "hello!"}));

//lets delete files!
//fs.unlinkSync(path.join(__dirname, 'my-new-file.txt'));

//fs.mkdirSync(path.join(__dirname, 'my-parent-directory', 'my-directory'), { recursive: true });
//{recursive: true} object tells mkirsync to create all specified directories if they dont already exist

//const exExists = fs.existsSync(path.join(__dirname, 'example.txt')) //returns boolean true if file/directory exists at specified path
//console.log(exExists);

//const contents = fs.readdirSync(__dirname);//equivalent to typing ls in cmd line
//console.log(contents);

//how 2 get stats of file or directory
const stats = fs.lstatSync(path.join(__dirname, 'example.txt'));
console.log(stats.isFile());