import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello World</h1>;
ReactDOM.render(element,document.getElementById('root'));

//var -> function
// let -> block , where you can define, you can changed the value, while allready assing 
// const -> block, not a reapet assign value 

function sayHello(){
    for(let i = 0; i < 5; i++){
        console.log(i);

        // const x = 1;
        // x = 2; // you can not reassign constant variable
    }
    
}
sayHello();