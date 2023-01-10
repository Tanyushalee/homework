// Задача 1: Пользователь вводит предложение. Вывести каждый символ из предложения отдельно в каждой строке. 

// prompt () для получения данных от пользователя
// parseInt () переводит строковые данные в числовые
// alert() чтобы вывести результат

// Как будем решать:
// Ввести предложение


// вывести каждый символ

var senteceString = prompt("Enter a sentence");


for (var count = 0; count < HowManyTimes; count = count + 1){
    var numberstring = prompt ("Enter a number");
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

