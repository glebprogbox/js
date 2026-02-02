let answer = prompt("Какое «официальное» название JavaScript?");
if(answer==="ECMAScript") //тут в целом без разницы, можно и ==, тк промт возвращает строку, null объект вернет только при cancel и они не будут равны, null равен только undefined
    {
        alert("Верно!");
    }
    else
    {
        alert("Не знаете? “ECMAScript”!");
    }
