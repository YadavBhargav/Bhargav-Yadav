function intrest(principal, rate = 3.5, years = 5){

    // rate = rate || 3.5;
    // years = years || 5

    return principal * rate / 100 * years;
}

console.log(intrest(10000));