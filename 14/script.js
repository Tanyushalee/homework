// Задача 1: Даны 3 вещественных числа a,b,c. Существует ли треугольник со сторонами a,b,c.

// prompt () для получения данных от пользователя
// parseInt () переводит строковые данные в числовые
// if - условие
// else if - условие
// alert() чтобы вывести результат

// Как будем решать:
// Получить 1 число
// Получить 2 число
// Получить 3 число

// Проверим: все числа больше 0
// Проверим: сумма двух маленьких сторон больше длины самой большой стороны
// Проверирм: каждая сторона треугольника меньше суммы двух других сторон
// a, b, c
// a + b > c
// a + c > b
// b + c > a
// выведем результат

var firstNumberString = prompt("First Number");
var secondNumberString = prompt("Second Number");
var thirdNumberString = prompt("Third Number");


var firstNumber = parseInt(firstNumberString);
var secondNumber = parseInt(secondNumberString);
var thirdNumber = parseInt(thirdNumberString);

var triangleExist = false;

if(firstNumber > 0 && secondNumber > 0 && thirdNumber > 0){
    if(firstNumber + secondNumber > thirdNumber
        && firstNumber + thirdNumber > secondNumber
        && secondNumber + thirdNumber > firstNumber)
        {
            triangleExist = true;
        }
}

if(triangleExist){
    alert("Triangle exists")
} else{
    alert("Triangle doesn't exist")
}
