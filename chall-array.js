// 1. Récupérer tous les nombres pairs

// A: avec .filter()
const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];
const numbers = data.filter (num => num %2 === 0);
console.log(numbers);

//  B: avec boucle for
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
const evennumbers = data.filter(num => num %2 === 1);
console.log(evennumbers)

//  B: avec boucle for
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
const doublenumbers = data.map( num => num * 2);
console.log (doublenumbers);

//  B: boucle
const doublenumbers = [];

for (let i = 0; i < data.length; i++){
    let currentnumber = data [i];
    doublenumbers.push(currentnumber * 2);
}
console.log (doublenumbers);

// 4. Trouver le plus grand nombre :

// A: Math.max(...data) ou .reduce()
const maxnumber = Math.max(...data);
console.log(maxnumber);

//  B: boucle + comparaison
let maxnumber = data [0];

for ( let i = 0; i < data.length; i++ ){
    if (data[i] > maxnumber){
        maxnumber = data [i];
    }
}
console.log(maxnumber);

// 5. Trouver le plus petit nombre :

// A: Math.min(...) ou .reduce()
const minnumbers = Math.min(...data);
console.log(minnumbers);

//  B: boucle
let minnumbers = data[0];

for ( let i = 0; i < data.length; i++){
    if (data[i] < minnumbers){
        minnumbers = data [i];
    }
}
console.log (minnumbers);

// 6. Calculer la somme du tableau :

// A: .reduce()
const sum = data.reduce ((somme, num) => somme + num, 0);
console.log (sum)

//  B: boucle
let sum = 0;

for (let i = 0; i < data.length; i++ ){
    sum = sum + data[i]
}
console.log (sum)


// 7. Calculer la moyenne:

// A: .reduce()
const sum = data.reduce((total, num) => total + num, 0)
const average = sum / data.length;
console.log(average);

//  B: boucle
let sum = 0;

for (let i = 0; i < data.length; i++){
    sum = sum + data[i];
}
let average  = sum / data.length;
console.log(average);

// 8. Trouver un nombre donné (ex : 77) :

// A: .includes() ou .find()
const found = data.includes(77);
console.log(found);

const found = data.find( num => num === 77);
console.log(found)



//  B: boucle + condition
let found = false ;
for (let i= 0; i < data.length; i++){
    if (data[i] === 77){
        found = true
        break;
    }
}
console.log(found)

// 9. Récupérer les nombres supérieurs à 20 :

// A: .filter()
const supnum = data.filter(num => num > 20);
console.log(supnum);

//  B: boucle
const supnum = [];
for (let i = 0; i < data.length; i++){
    if ( data[i] > 20){
        supnum.push(data[i]);
    }
}
console.log(supnum);


// 10. Vérifier si tous les nombres sont positifs :

// A: .every()
const posnumb = data.every(num => num > 0);
console.log(posnumb)

//  B: boucle
let posnumb = false;

for (let i= 0; i < data.length; i++){
    if (data[i] >= 0){
        posnumb = true;
        break;
    }
}

console.log(posnumb)

// 11. Vérifier si au moins un nombre est supérieur à 100 :

// A: .some()
const supnum = data.some(num => num > 100)
console.log (supnum)

//  B: boucle
const supnum = [];

for (let i = 0; i < data.length; i++){
    if (data[i] > 100){
    supnum.push(data[i])
    }
}
console.log(supnum);
// 2 ème methode :
let supnum = false;

for (let i = 0; i < data.length; i++){
    if (data[i] > 100){
        supnum = true;
        break;
    }
}
console.log (supnum)

// 12. Compter combien de nombres sont > 50 :

// A: .filter().length
const count = data.filter(num => num > 50).length;
console.log (count);

//  B: boucle + compteur
const data = [12, 5, 8, 130, 44, 9, 2, 77, 21, 56, 3, 99, 14, 28, 1, 65, 7, 38, 11, 50];
let count = 0
for (let i = 0; i < data.length; i++){
    if (data[i] > 50){
        count ++;
    }
}
console.log (count);