let address = new Address('a','b','c');

console.log(address);

//factory function
function createAddress(street, city, pincode){

    return{
        street,
        city,
        pincode
    }
}

//constructor function

function Address(street, city, pincode){
    this.street = street;
    this.city = city;
    this.pincode = pincode;
}