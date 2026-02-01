//Что выведет этот скрипт?
let name = "Ilya";

alert( `hello ${1}` ); // hello undefined сначала подумал, забыл что в фигурных можно выражение фигануть, получается hello 1

alert( `hello ${"name"}` ); // hello name, тут верно

alert( `hello ${name}` ); // hello Ilya, тут верно