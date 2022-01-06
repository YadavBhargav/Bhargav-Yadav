let number = [1, 2, 3, 4];
let another = number;

//Solution 1
number = [];

//Solution 2
number.length = 0;

// Solution 3
number.splice(0, number.length);

//Solution 4 
while(number > 0)
    number.pop();


    console.log(another);
    console.log(number);
                