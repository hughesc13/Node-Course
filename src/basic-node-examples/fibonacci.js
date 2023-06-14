// 1 1 2 3 5 8 13 21

export function sayHello(){
    console.log('hey');
}

export function generateFibonacci(howMany){//export exports function as named
    let x = 1;
    let y = 1;
    let sequence = [x, y]//array called sequence containing x and y

    //create an array w howMany elements in it
    Array(howMany).fill().forEach(() => {
        let sum = x + y;
        sequence.push(sum);
        x = y;
        y = sum;
    });

    return sequence;
}
//module.exports.generateFibonacci = generateFibonacci;
//a named export! the name is generateFibonacci

//export default generateFibonacci;