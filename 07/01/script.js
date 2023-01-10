
// alert("ваш возраст" + myAgeString); //выводит значение myAgeString
// console.log(myAgeString); //выводит значение myAgeString
/*
int, integer = числовые значения
str, string = строковые значения
bool = логические значения (правда или ложь)
*/

// function ageCategorization(ageInFunction){
//         if(ageInFunction >= 16 && ageInFunction <= 22) {
//         alert('yunost')
//     }
//     else if (ageInFunction > 22) {
//         alert('molodost')
//     }
//     else if(ageInFunction  <16) {
//         alert('podrostok')
//     }
// }
// var myAgeString = prompt("Введите ваш возраст");
// ageCategorization(myAgeString);

// var additionalAgeString = prompt("Введите ваш возраст второй раз");
// ageCategorization(additionalAgeString);

// var thirdTimeString = prompt("Введите ваш возраст третий раз");
// ageCategorization(thirdTimeString);

// alert(" первому " + myAgeString + " лет, второму " + additionalAgeString + " лет и третьему " + thirdTimeString + "лет")

function ageCategorization(ageInFunctionString){
            var ageInFunction = parseInt(ageInFunctionString);
            if(ageInFunction >= 16 && ageInFunction <= 22) {
            alert('yunost')
        }
        else if (ageInFunction > 22) {
            alert('molodost')
        }
        else if(ageInFunction  <16) {
            alert('podrostok')
        }
    }
var howMAnyTimesString = prompt("Сколько раз будем определять возраст?");
var HowManyTimes = parseInt(howMAnyTimesString);
var finalMessage = "";

for(var counter=0; counter < HowManyTimes; counter ++){
    var myAgeString = prompt("Введите ваш возраст " + (counter + 1) + " раз");
    ageCategorization(myAgeString)
    finalMessage = finalMessage + (counter + 1) + " раз: Возраст " + myAgeString + " .";
}

alert(finalMessage)