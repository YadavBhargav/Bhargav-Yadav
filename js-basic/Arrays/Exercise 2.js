const numbres = [1,2,3];

console.log(includes(numbres, 1));

function includes(array, searchElement){
    for(let element of array)
    if(element === searchElement)
    return true;
return false
}