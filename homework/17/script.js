// Задача 1: Дано число x. Выведите x, 2x, 3x, 4x и 5x, разделенных тремя дефисами, как показано ниже.

// prompt () для получения данных от пользователя
// parseInt () переводит строковые данные в числовые
// * умножение
// alert() чтобы вывести результат

// Как будем решать:
// Получить число 

// Высчитать число 2
// Высчитать число 3
// Высчитать число 4
// Высчитать число 5
// вывести значение

// получили число от пользователя
var numberString = prompt("Enter a number");

// из строковых значений перевели в числовые
var number = parseInt(numberString);

// высчитываем числа
var secondNumber = 2 * number;
var thirdNumber = 3 * number;
var forthNumber = 4 * number;
var fifthNumber = 5 * number;


// выведение результата
alert(number + "---" + secondNumber + "---" + thirdNumber + "---" + forthNumber + "---" + fifthNumber);
