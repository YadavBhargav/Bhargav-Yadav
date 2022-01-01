//Logical AND (&&)
//Returns TRUE if both opranda are TRUE
let highIncome = false;
let goodCreditScore = false;
let eligibleForLone = highIncome && goodCreditScore;
console.log('Eligible',eligibleForLone);

//Logical OR(||)
//Returns TRUE if one of the operands is TRUE
// let highIncome1 = true;
// let goodCreditScore1 = false;
// let eligibleForLone1 = highIncome1 || goodCreditScore1;
// console.log(eligibleForLone1);

// NOT (!)
let applicationRefused = !eligibleForLone; 
console.log('Application Refused' ,applicationRefused);


// Logical

let userColor = 'red';
let defaultColor  = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);