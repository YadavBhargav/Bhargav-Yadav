const numbres = [1,2,3];

const output = expect(numbres,[1]);

console.log(output);

function expect(array, excluded){
    const output = [];
    for(let element of array)
        if(!excluded.includes(element))
            output.push(element);
        return output;
}