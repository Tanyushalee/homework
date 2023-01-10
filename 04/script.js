/*
Циклы (loops)
array переводится с англ как массив/множество
*/
var productApple = "Apple";
var productOrange = "Orange";
var productArray = ["Mandarin", "Kiwi", "Banana"];

console.log(productApple);
console.log(productOrange);
console.log(productArray);

// сколько раз что то повторять, со скольки начать и до скольки делать 
// var count это обьявление шага, счетчика цикла и счетчик = 0
// цикл будет работать пока count меньше 10
// расстояние роста шаг/ счетчика count это +1 на предыдущее значение

for(var count = 0; count < 10; count = count+1)
{console.log(count);}

console.log("tut budem vyvodit dannye iz massiva");
console.log(productArray[1])
console.log(productArray[0])


// вывод значений из массива используя цикл

console.log(productArray);
console.log("length:", productArray.lenght);

for(var count = 0; count < productArray.length; count = count+1)
{console.log(count, productArray[count]);}

var numsArray = [1, 2, 3, 4];

console.log(numsArray);
console.log("length:", numsArray.lenght);

for(var count = 0; count < numsArray.length; count = count+1)
{console.log(count, numsArray[count]);}

var numsArray = [23, 223, 453, 445, 2, 93, 409];
var sumOfNums = numsArray [0] + numsArray [1] + numsArray [2] + numsArray [3]

console.log(sumOfNums);
var finalSum = 0;
for(var count = 0; count < numsArray.length; count = count+1)
{finalSum = finalSum + numsArray[count];
console.log(finalSum);}

var strokovoeZnachenie = "banana";
console.log(strokovoeZnachenie[0]);

for(var count=0; count < strokovoeZnachenie.length; count = count + 1)
{console.log(strokovoeZnachenie[count]);}
