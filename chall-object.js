const users = [
  { id: 1, name: "Kamal", age: 22, city: "Marrakech", score: 45 },
  { id: 2, name: "Sami", age: 30, city: "Rabat", score: 72 },
  { id: 3, name: "Issam", age: 28, city: "Marrakech", score: 60 },
  { id: 4, name: "Oualid", age: 19, city: "Agadir", score: 33 },
  { id: 5, name: "Hassan", age: 33, city: "Casablanca", score: 80 },
  { id: 6, name: "Farah", age: 25, city: "Marrakech", score: 50 },
  { id: 7, name: "Salma", age: 40, city: "Rabat", score: 90 },
  { id: 8, name: "Hanae", age: 21, city: "Marrakech", score: 41 },
  { id: 9, name: "Ibrahim", age: 27, city: "Casablanca", score: 55 },
  { id: 10, name: "Jade", age: 24, city: "Agadir", score: 48 }
];

// 1. Récupérer la liste des noms : 

//  A: Object.values / map
const names = users.map(user => user.name);
console.log(names);

//  B: boucle sur tableau + accès user.name
const noms = [];

for (let i = 0; i < users.length; i++){
    names.push(users[i].name);
}
console.log(noms);

// 2. Récupérer la liste des villes :

//  A: map
const villes = users.map(user => user.city)
console.log(villes);

//  B: boucle
const cities = [];

for (let i = 0; i < users.length; i++){
    cities.push(users);
}
console.log(cities.city);

// 3. Trouver l’utilisateur avec l’id = 3 :

//  A: find
const utilisateur = users.find(user => user.id === 3);
console.log(utilisateur);

//  B: boucle + condition
let user = null;

for (let i = 0; i < users.length; i++){
    if (users[i].id === 3){
        user = users[i];
        break;
    }
}
console.log(user);

// 4. Trouver l’utilisateur le plus jeune :

//  A: reduce
const youngest = users.reduce((min, old) => old.age < min.age ? old : min);
console.log(youngest);


//  B: boucle + comparaison
let youngeste = users[0];

for (let i = 0; i < users.length; i++){
    if (users[i].age < youngeste.age){
        youngeste = users[i];
    }
}
console.log(youngeste);

// 5. Trouver l’utilisateur le plus âgé :

//  A: reduce
const oldest = users.reduce((max, old) => old.age > max.age ? old : max);
console.log(oldest);


//  B: boucle
let oldeste = users[0];

for (let i = 0; i < users.length; i++){
    if (users[i].age > oldeste.age){
        oldeste = users[i];
    }
}
console.log(oldeste);


// 6. Calculer la somme des scores :

//  A: reduce
const somme = users.reduce((sum, e) => sum + e.score, 0);
console.log(somme);


//  B: boucle
let total = 0;

for (let i = 0; i < users.length; i++){
    total = total + users[i].score
}
console.log(total);


// 7. Calculer la moyenne d’âge :

//  A: reduce
const moyenne = users.reduce((moy, e) => moy + e.age, 0) / users.length;
console.log(moyenne);

//  B: boucle
let average = 0;

for (let i = 0; i < users.length; i++){
    average = average + users[i].age;
}
const avg = average / users.length;
console.log(avg);

// 8. Vérifier si tous les utilisateurs ont un score > 30 :

//  A: every
const Vérifier = users.every(e => e.score > 30);
console.log(Vérifier);

//  B: boucle
let controle = false;

for (let i = 0; i < users.length; i++){
    if (users[i].score > 30);
    controle = true;
    break;
}
console.log(controle);

// 9. Vérifier si au moins un utilisateur est de Agadir :

//  A: some
const Agadir = users.some(e => e.city === 'Agadir');
console.log(Agadir);

//  B: boucle
let agcity = false;

for (let i = 0; i < users.length; i++){
    if (users[i].city === 'Agadir'){
        agcity = true;
        break;
    }
}
console.log(agcity);


// 10. Obtenir la liste des id :

//  A: map
const liste = users.map(e => e.id);
console.log(liste);

//  B: boucle
const list = [];

for (let i = 0; i < users.length; i++){
    list.push(users[i].id);
}
console.log(list)


// 11. Filtrer les utilisateurs ayant un score supérieur à 50
//  A: filter
//  B: boucle + push
// 12. Filtrer les utilisateurs vivant à Marrakech
//  A: filter
//  B: boucle
