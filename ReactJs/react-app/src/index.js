import React from 'react';
import ReactDOM from 'react-dom';
import { Teacher } from './teacher';
const element = <h1>Hello World</h1>;
ReactDOM.render(element,document.getElementById('root'));

//var -> function
// let -> block , where you can define, you can changed the value, while allready assing 
// const -> block, not a reapet assign value 

// function sayHello(){
//     for(let i = 0; i < 5; i++){
//         console.log(i);

//         // const x = 1;
//         // x = 2; // you can not reassign constant variable
//     }
    
// }
// sayHello();

//ES6 - > Video 8
// const colors = ["pink","red","blue"];
// const items = colors.map(color => `<li>${color}</li`);
// console.log(items);

//ES6 - > video 9 -> objet Destructuring
// const address = {
//     street: '',
//     city: '',
//     country: ''
// };
// const street = address.street;
// const city = address.city;
// const country = address.country;

// const { street, city, country } = address;// object destructuring
// const { street : st } = address; // allias name with ....

// const first = { name : "Bhargav"};
// const second = { age : "20"};

// const clone = {...first};
// console.log(clone);
// const combined = { ...first, ...second, location: "Bagdu"};
// console.log(combined);



        //inheritance vide -> 12

const teacher = new Teacher("BM","BSCIT");
teacher.teach();
