// Задача 5: Напишите программу, которая просит пользователя ввести три числа (используйте три отдельных оператора ввода). Создайте переменные с именами total и average, которые содержат сумму и среднее значение трех чисел, и распечатайте значения total и average.

// prompt () для получения данных от пользователя
// parseInt () переводит строковые данные в числовые
// * умножение
// alert() чтобы вывести результат

// Как будем решать:
// Получить 1 число 
// Получить 2 число 
// Получить 3 число 

// Высчитать total (Сумма чисел)
// Высчитать average (Сумма/3)
// вывести значение

// получили число от пользователя
var firstNumberString = prompt("Enter first number");
var secondNumberString = prompt("Enter second number");
var thirdNumberString = prompt("Enter third number");

// из строковых значений перевели в числовые
var firstNumber = parseInt(firstNumberString);
var secondNumber = parseInt(secondNumberString);
var thirdNumber = parseInt(thirdNumberString);

// высчитываем числа
var total = firstNumber + secondNumber + thirdNumber;
var average = total / 3


// выведение результата
alert("Total " + total + " Average " + average);
