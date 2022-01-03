//Example of Value Type
// let number = 10;

// function increase(number){
//     number++;
// }

// increase(number);
// console.log(number);

//Example of Reference type

let number = {value : 10};

function increase(number){
    number.value++;
}

increase(number);
console.log(number);