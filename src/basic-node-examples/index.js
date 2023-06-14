import * as stuff from "./fibonacci.js";
//* takes all exports from fibonacci, names them stuff

//a person object w nested properties!
const person = {
    name: {
        first: 'claire',
        last: 'hughes',
    }
}

const first = person?.name?.first; //this is where babel optional chanining plugin is used
//the ? allows us to check if person or name exists, and keep going even if they dont

console.log(stuff.generateFibonacci(10));
stuff.sayHello();