// let arr = [] - массив
// let number = 5
// let string = "Строковое значение"
// let someObj = {} - объект
// Объекты это предметы

let user = {
    name: "Meerim",
    lastname: "Zhanuzakova",
    age: 27,
    gender: "female"
}

let user2 = {
    firstname: "Zhamilia",
    secondname: "Some Second Name",
    age: 25,
    gender: "female"
}


class Users{
    firstname;
    lastname;
    age;
    gender;

    constructor(firstname, lastname, age, gender){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
    }

    sayHi() {
        alert("Привет от " + this.firstname);
    }

    fullName(){
        var fullName = this.firstname + " " + this.lastname;
        return fullName;
    }
}

var user3 = new Users("Hermione", "Granger", 26, "female");
console.log(user3.lastname);
user3.lastname = "Gean Granger";
console.log(user3.lastname);

user3.sayHi();
alert("Привет от " + user3.firstname);

var user4 = new Users("Ronald", "Weasley", 26, "male");
user4.sayHi();
alert("Привет от " + user4.firstname);




var fullnameOfuser3 = user3.fullName();
console.log(fullnameOfuser3);


//
var string = "Longer sentence";
console.log(string);

string.toUpperCase();
console.log(string);

string = string.toUpperCase();
console.log(string);
//