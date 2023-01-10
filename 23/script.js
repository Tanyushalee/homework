// Задача 1: Пользователь вводит произвольное число N. Далее программа просит ввести N раз числа на каждый ввод, выводится alert с сообщением что число четное (если делится на 2 без остатка) или нечетное.

// prompt () для получения данных от пользователя
// parseInt () переводит строковые данные в числовые
// alert() чтобы вывести результат
// %- остаток деления, это деление и в результате выводится остаток деления
// /- просто деление

// Как будем решать:
// Получить число


// вывести четное или нечетное

var HowManyTimesString = prompt("Enter a number");
var HowManyTimes = parseInt(HowManyTimesString);

for (var count = 0; count < HowManyTimes; count = count + 1){
    var numberstring = prompt ("Enter a namber");
    var number = parseInt(numberstring);
    if(number % 2 == 0) 
    {
        alert("Eto chetnoe chislo " + number);
    }
    else if(number%2 == 1)
    {
        alert("Eto nechetnoe chislo " + number)
    }
}

