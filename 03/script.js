var myAgeCategory = "undefined";

switch(myAgeCategory)
{
    case("yunost"):
        console.log("you are between 16 and 22");
        break;
    case("molodost"):
        console.log("you are older then 22");
        break;
    case("podrostok"):
        console.log("you are between 11 and 16");
        break;
    default:
        console.log("age is undefined");
        break;    
}

var myAge = 10
var isStudent = true;

// == сравнение =присвоение

if(myAge < 16 && isStudent == true){console.log("you are schooler");}
else if (myAge > 16 && isStudent == true){console.log("you are student")};