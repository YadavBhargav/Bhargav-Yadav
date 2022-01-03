//Factory Function

function createRadius(radius){
    return{
        radius,
        draw(){
            console.log('draw');
        }
    };
}

const circel = createRadius(1);
console.log(circel);

const circle2 = createRadius(2);
console.log(circle2);