let menu = {
    width: 200,
    height: 300,
    title: "My menu",
    erf: "234" // не умножится тк == приводит типы, если нужно, но в ифе уже строка и справа и слнва
};

function multiplyNumeric(obj){
    for (let key in obj){
        if( typeof obj[key] == 'number'){
            obj[key] *= 2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu);