// Задача 1: Дано целое положительное число N. Найти сумму квадратов всех натуральных чисел от 0 до N.

// prompt () для получения данных от пользователя
// parseInt () переводит строковые данные в числовые
// * умножение
// count + 1 = count ++

// Как будем решать:
// Получить число



var NumberString = prompt("Enter a number");
var N = parseInt(NumberString);
var squareSumm = 0;

for (var count = 0; count <= N; count ++){
    if(count > 0){
     var square = count * count;
     squareSumm = squareSumm + square;
    }
}
alert("Square Summ to N=" + N + " equal to " + squareSumm)
