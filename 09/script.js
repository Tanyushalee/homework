// Задача 1: Пользователь вводит 2 числа, вывести квадрат каждого числа.

// prompt () для получения данных от пользователя
// parseInt () переводит строковые данные в числовые
// * умножение
// alert() чтобы вывести результат

// Как будем решать:
// Получить первое число
// Получить второе число

// Возвести в квадрат первое число
// и вывести в квадрат первое число
// Возвести в квадрат второе число
// и вывести в квадрат второе число

// получили числа от пользователя
var firstNumberString = prompt("First number");
var secondNumberString = prompt("Second number");

// из строковых значений перевели в числовые
var firstNumber = parseInt(firstNumberString);
var secondNumber = parseInt(secondNumberString);

// возвдение в квадрат, два варианта: умножить на себя или возвести в 2 степень
var squareOfFirstNumber = firstNumber * firstNumber;
var squareofSecondNumber = secondNumber ** 2;

// выведение результата
alert("Square of first number = " + squareOfFirstNumber);
alert("Square of second number = " + squareofSecondNumber);