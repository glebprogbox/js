a = prompt("a?", 0); // или +promt
b = prompt("b?", 0);
if(isFinite(a) && isFinite(b)){
    alert(Number(a) + Number(b));
} else {
    alert("Введите корректно только числа");
}
