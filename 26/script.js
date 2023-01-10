// Задача 1: Выведите прямоугольник, используя числа 0-9, с входными размерами n*m, где n — длина и m — высота.
// Пример ввода 1: 5 3
// Пример ввода 2: 8 4

// prompt () для получения данных от пользователя
// parseInt () переводит строковые данные в числовые
// * умножение
// count + 1 = count ++

// Как будем решать:
// Получить число



let nString = prompt("Enter a lenght");
let mString = prompt("Enter a height");

let n = parseInt(nString);
let m = parseInt(mString);

let filler = 0;
let result = [];

for (let mShagi = 0; mShagi < m; mShagi ++){
    let row = "";
    for(let nShagi = 0; nShagi < n; nShagi ++){
        row = row + " " + filler;
        filler ++;
        if(filler==10){
            filler = 0;
        }
    }
    result.push(row);
    }

console.log("------------------------");
for(var i = 0; i < m; i++){
    console.log(result[i]);
}
