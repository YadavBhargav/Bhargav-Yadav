try{
    const numbers = [1,2,3,4];
    const count = countOccurences(null,1);
    console.log(count);
}
catch(e) {
    console.log(e.message);
}


function countOccurences(array, serachElement){
    if(!Array.isArray(array))
        throw new Error('Invalid array.');

    return array.reduce((accumulator, current)=> {
        const occurence = (current === serachElement) ? 1 : 0;
        return accumulator + occurence;
    }, 0);
}