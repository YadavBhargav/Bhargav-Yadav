let address1 = new Address('a','b','c');
let address2 = new Address('a','b','c');
let address3 = address1

console.log(areEqual(address1,address2));
console.log(areSame(address1,address2));
console.log(areSame(address1, address3));

//constructor function

function Address(street, city, pincode){
    this.street = street;
    this.city = city;
    this.pincode = pincode;
}

function areEqual(address1, address2){
    return address1.street === address2.street &&
           address1.city === address2.city &&
           address1.pincode === address2.pincode

    }

function areSame(address1,address2){
    return address1 === address2;
}