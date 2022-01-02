const movie = {
    title : 'a',
    realeseYear : 2021,
    rating : 5,
    director : 'b'
}

showProperties(movie);

function showProperties(obj){
    for(let key in obj){
        if(typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
}