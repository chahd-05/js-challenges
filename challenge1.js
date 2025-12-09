// 1. Récupérer tous les nombres pairs

// A: avec .filter()
const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];
const numbers = data.filter (num => num %2 === 0);
console.log(numbers);

//  B: avec boucle for
const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];
const numbers = [];

for (let i = 0; i < data.length; i++ ){
    let currentnumber = data [i];

    if (currentnumber %2 === 0){
        numbers.push(currentnumber);
    }
}
console.log(numbers)

// 2. Récupérer tous les nombres impairs:

// A: avec .filter()
const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];
const evennumbers = data.filter(num => num %2 === 1);
console.log(evennumbers)

//  B: avec boucle for
const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];
const evennumbers = [];

for (let i = 0; i < data.length; i++){
    let currentnumber = data [i];
    if ( currentnumber %2 === 1){
        evennumbers.push(currentnumber);
    }
}
console.log (evennumbers)

// 3. Doubler chaque nombre du tableau:

// A: .map()
const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];
const doublenumbers = data.map( num => num * 2);
console.log (doublenumbers);

//  B: boucle
const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];
const doublenumbers = [];

for (let i = 0; i < data.length; i++){
    let currentnumber = data [i];
    doublenumbers.push(currentnumber * 2);
}
console.log (doublenumbers);

// 4. Trouver le plus grand nombre :

// A: Math.max(...data) ou .reduce()
const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];
const maxnumber = Math.max(...data);
console.log(maxnumber);

//  B: boucle + comparaison
const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];
let maxnumber = data [0];

for ( let i = 0; i < data.length; i++ ){
    if (data[i] > maxnumber){
        maxnumber = data [i];
    }
}
console.log(maxnumber);

// 5. Trouver le plus petit nombre :

// A: Math.min(...) ou .reduce()
const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];
const minnumbers = Math.min(...data);
console.log(minnumbers);

//  B: boucle
const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];
let minnumbers = data[0];

for ( let i = 0; i < data.length; i++){
    if (data[i] < minnumbers){
        minnumbers = data [i];
    }
}
console.log (minnumbers);

// 6. Calculer la somme du tableau :

// A: .reduce()
const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];
const sum = data.reduce ((somme, num) => somme + num, 0);
console.log (sum)

//  B: boucle
const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];
let sum = 0;

for (let i = 0; i < data.length; i++ ){
    sum = sum + data[i]
}
console.log (sum)


// 7. Calculer la moyenne:

// A: .reduce()

//  B: boucle





