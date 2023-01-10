class User{
    firstname = "";
    lastname = "";
    birthdate = "";
    gender = "";

    constructor(name, surname, comingBirthdate, comingGender){
        this.firstname = name;
        this.lastname = surname;
        this.birthdate = birthdate;
        this.gender = comingGender;
    }

}


var user = {
    name: "Meerim",
    lastname: "Zhanuzakova",
    age: 27,
    gender: "female"
}
var user2 ={
    name: "Tatiana",
    lastname: "Li",
    age: 38,
    gender: "female"
}
var book = {
    name: "War and Piece",
    author: "Lev Tolstoy",
    cover: "hard cover",
    price: "100"
}
console.log(user.lastname);
console.log(user.age);
console.log(user2);
console.log(book.name);
console.log(book.author);

var someUser = new User
