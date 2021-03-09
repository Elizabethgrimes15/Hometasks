const customConsole = require('prompt-sync')();

//Объявление переменных
let action: any;
let a: number;
let b: number;
let c: number;


//Массив возможных действий
let array: string[] = ["Сложение", "Вычитание", "Умножение", "Деление"];
for (let i = 0; i <= array.length - 1; i++) {
    console.log("Действие:" + array[i] )
};

//Выбор действия с циклом
action = 0;
while (action < 1 || action > 4) {
    action = customConsole("Выберите одно из действий, где 1 - Сложение, 2 - Вычитание, 3 - Умножение, 4 - Деление")
};
//New changes
//New changes3

a = customConsole ("Введите число a");
b = customConsole ("Введите число b");

//Объявление функций
function Сложение() {
    return +a + +b
};
function Вычитание() {
    return a - b
};
function Умножение() {
    return a * b
};
function Деление() {
    return a / b
};


if (action == 1) {
    c = Сложение();
} else if (action == 2) {
    c = Вычитание ();
}  else if (action == 3) {
    c = Умножение ();
} else if (action == 4) {
    c = Деление ();
}


//Вывод в консоль
console.log(`Итог: ${c}`);