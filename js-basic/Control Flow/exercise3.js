//Divisible by 3 => Fizz
//Divisible by 5 => Buzz
//Divisible by both 3 and 5 => FizzBuzz
//Not Divisible by 3 and 5  => imput
//Not a number => 'Not A Number'
const output = fizzbuzz(15);
console.log(output);


function fizzbuzz(input){
    if(typeof input !== 'number')
    return 'not a number';

    if((input % 3 === 0) && (input % 5 === 0))
    return 'FizzBuzz';

    if(input % 3 === 0) 
    return 'Fizz';

    if(input % 5 === 0)
    return 'Buzz';

    return input;
}