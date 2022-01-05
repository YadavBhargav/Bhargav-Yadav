const numbers = [3,4];

//End (Add value from end)
numbers.push(5, 6);

//Beginning (Add the value of first)
numbers.unshift(1, 2);

//Middle (add the value of middle)
numbers.splice(2, 0, 'a', 'b'); 

console.log(numbers);