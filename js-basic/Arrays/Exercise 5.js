    const numbers = [1, 2, 3, 4, 1];

    const count = countOccurences(numbers, 1);

    console.log(count);

    function countOccurences(array, searchElement){
        //let count = 0;
        // for(let element of arrat)
        //  if(element === searchElement)  
        //count ++;
        //return count;

        return array.reduce((accumulator, current) => {
            const occerence = (current === searchElement)
            console.log(accumulator,current,searchElement);
            return accumulator + occerence;
        },0) 
    }