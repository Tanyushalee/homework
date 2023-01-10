// Задача 1: Дано 3 целых числа. Вывести их в порядке возрастания. 

// prompt () для получения данных от пользователя
// parseInt () переводит строковые данные в числовые
// alert() чтобы вывести результат

// Как будем решать:
// Получить первое число
// Получить второе число
// Получить третье число


// вывести сообщение в порядке возрастания

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