/*
+, -, /, *, **, %
*/

// создадим массив чисел
// мы отклроем цикл для перебора числа
// условие проверки (если это четное число) я буду их складывать
// условие проверки (если это НЕчетное число) я буду их умножать друг на друга
// выведу результат

// var numsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var chetnyeChisla = 0;
// var nechetnyeChisla = 1;
// for(var count = 0; count < numsArray.length; count = count + 1)
// {
//     if(numsArray[count] % 2 == 0) 
//     {
//         chetnyeChisla = chetnyeChisla + numsArray[count];
//     }
//     else if(numsArray[count]%2 == 1)
//     {
//         nechetnyeChisla =  nechetnyeChisla * numsArray[count];
//     }

// }

// console.log("Summa chetnyh chisel", chetnyeChisla);
// console.log("Summa umnojeniy nechetnyh chisel", nechetnyeChisla);


var myAge = 20;
var gender = true; 
var isStudent = true;

if(isStudent == true){
    if(myAge >= 16 && myAge <= 22){
        if(gender == true){
            console.log("vy studentka kolledja")
        }
        else if(gender == false){
            console.log("vy student kolledja");
        }
    }
    else if(myAge < 16){
        if(gender == true){
            console.log("vy shkolnica");
        }
        else if(gender == false){
            console.log("vy shkolnik");
        }
    }
}
