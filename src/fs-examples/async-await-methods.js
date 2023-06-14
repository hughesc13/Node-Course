import fsBase from 'fs';
const fs = fsBase.promises; //renaming imports bc names r shorter! 
import path from 'path';

const exPath = path.join(__dirname, 'example.txt');
//in order to have an await keyword, u need to have it inside an async function
//below is our async function
//this is WILD syntax. can someone explain this to me youtube can :)
const execute = async () => {
    //let's write a file, read a file, then delete the file
    await fs.writeFile(exPath, 'this is an example!');//write file
    const data = await fs.readFile(exPath, 'utf8');//read file
    console.log(data);//print file out
    await fs.unlink(exPath);
}

execute();

/* fs.readFile(path.join(__dirname, 'example.txt'))
    .then(result => console.log(result))
    .catch(err => console.log(err)); */

const writeF = async () => { 
    await fs.writeFile(path.join(__dirname, 'my-new-file.txt'), 'the text im writing');
    await fs.appendFile(path.join(__dirname, 'my-new-file.txt'), '\nhere is more text');
    const data = await fs.readFile(path.join(__dirname, 'my-new-file.txt'), 'utf8');
    console.log(data);
    await fs.unlink(path.join(__dirname, 'my-new-file.txt'));
    console.log('my-new-file.txt has been deleted!');
}
writeF();

async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; // wait until the promise resolves (*)

    console.log(result); // "done!"
}
  
f();
  