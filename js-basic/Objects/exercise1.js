//street
//city
//pincode
//showAddress

let address = {

    street : 'Gujarat',
    city : 'Bagdu',
    pincode : '362263'
};

function showAddress(address){
    for(let key in address)
    console.log(key,address[key]);
}

showAddress(address);