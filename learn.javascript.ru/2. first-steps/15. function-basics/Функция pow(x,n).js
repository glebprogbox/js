let x, n;
do {
    x = prompt("Введите натуральное число, которое хотите возвести в степень", 1);
    if (x === null) { //ловлю отмену
        alert('Программа завершена');
        break;
    }
} while (Number(x) < 1 || isNaN(Number(x)) || x % 1 !== 0);

if (x === null) throw new Error("Отмена"); //это я выхожу из программы

do {
    n = prompt("Введите натуральное число, которое обозначает степень", 1);
    if (n === null) { //ловлю отмену
        alert('Программа завершена');
        break;
    }
} while(Number(n) < 1 || isNaN(Number(n)) || n % 1 !== 0);

if (x === null) throw new Error("Отмена");  //это я выхожу из программы

x = Number(x);
n = Number(n);

function pow(x, n){
    return x ** n;
}

alert(pow(x, n));


/*
в решении такой код
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n >= 1 && n % 1 == 0) {
  alert( pow(x, n) );
} else {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
}
 */
