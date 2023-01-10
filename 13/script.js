// Задача 1: Даны 3 целых числа. Вывести наибольшее из них.

// prompt () для получения данных от пользователя
// parseInt () переводит строковые данные в числовые
// if - условие
// else if - условие
// alert() чтобы вывести результат

// Как будем решать:
// Получить 1 число
// Получить 2 число
// Получить 3 число
// выведем результат

// maxNumber = x  
// если maxNumber < y тогда maxNumber = y
// если maxNumber < z тогда maxNumber = z


// 
var firstNumberString = prompt("First Number");
var secondNumberString = prompt("Second Number");
var thirdNumberString = prompt("Third Number");


var firstNumber = parseInt(firstNumberString);
var secondNumber = parseInt(secondNumberString);
var thirdNumber = parseInt(thirdNumberString);

// 
var maxNumber = firstNumber;

if(maxNumber < secondNumber){
    maxNumber = secondNumber;
}
if(maxNumber < thirdNumber){
    maxNumber = thirdNumber;
}

// выведение результата
alert("Maximum number = " + maxNumber);
