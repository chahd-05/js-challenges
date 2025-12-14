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