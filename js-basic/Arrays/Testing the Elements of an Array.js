const numbers = [1,-1,2,3];

//every()
//some()

const check = numbers.every(function(value){
    return value  >= 0;
});

const check = numbers.some(function(value){
    return value  >= 0;
});
console.log(check);