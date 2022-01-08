// Function Declaration

function walk() {
    console.log('walk');
}
walk();

//Anonymous Function Expression

let run = function(){
    console.log('run');
}
let move = run;
run();
move();
