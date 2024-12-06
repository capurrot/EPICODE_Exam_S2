/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("ESERCIZIO 1");

const pets = ['dog', 'cat', 'hamster', 'redfish']
const petsArr = () => pets;
console.log(petsArr());
console.log("Gli elementi presenti nell'array sono: " + petsArr().join(", ") + ".               // Versione in stringa");
console.log("");
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("ESERCIZIO 2");

const petsArrSort = () => pets.sort();
console.log(petsArrSort());
console.log("Gli elementi ordinati alfabeticamente sono: " + petsArrSort().join(", ") + ".               // Versione in stringa");
console.log("");

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log("ESERCIZIO 3");

const petsArrInv = () => pets.sort((a, b) => (a > b ? -1 : 1));
console.log(petsArrInv());
console.log("Gli elementi in ordine invertito sono: " + petsArrInv().join(", ") + ".               // Versione in stringa");
console.log("");

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("ESERCIZIO 4");

const moveArrLast = () => pets.push(pets[0]) && pets.shift() && pets;
console.log(moveArrLast());
console.log("");

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

console.log("ESERCIZIO 5");

function addLicPla() {
  for (const i of cars) {
    i.licensePlate = "GF" + Math.round(Math.random() * 999) + "BC";
  }
  return cars;
}
console.log(addLicPla());
console.log("");

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("ESERCIZIO 6");

cars.push({brand: 'Fiat',  model: 'Panda',  color: 'green',  trims: ['4X4', 'style', 'r-line'], licensePlate: 'GF456CC'});
const addObj = function() {
  for (let i = 0; i < cars.length; i++) {
    cars[i].trims.pop();
  }
  return cars;
}
console.log(addObj());
console.log("");

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("ESERCIZIO 7");

const justTrims = []
const firstTrim = () => {
  for (const i in cars) {
     justTrims.push(cars[i].trims.slice(0, 1).join());
  }
  return justTrims;
}
console.log(firstTrim());
console.log("");

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("ESERCIZIO 8");

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0)==='b') {
    console.log(cars[i].color + " -> Fizz"); 
  } else {
    console.log(cars[i].color + " -> Buzz")
  }
}

console.log("");
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("ESERCIZIO 9");

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let i=0;
while (i < numericArray.length) {
  if(numericArray[i] === 32) {
    console.log(numericArray[i]);
    break;
  }
    console.log(numericArray[i]);
  i++;
}

console.log("");
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log("ESERCIZIO 10");

const charactersArray = ['g', 'n', 'u', 'z', 'd']
const charactersNum = [];

for (let i = 0; i < charactersArray.length; i++) {
      switch (charactersArray[i]) {
        case 'a':
          charactersNum.push(1);
          break;
        case 'b':
          charactersNum.push(2);
          break;
        case 'c':
          charactersNum.push(3);
          break;
        case 'd':
          charactersNum.push(4);
          break;
        case 'e':
          charactersNum.push(5);
          break;
        case 'f':
          charactersNum.push(6);
          break;
        case 'g':
          charactersNum.push(7);
          break;
        case 'h':
          charactersNum.push(8);
          break;
        case 'i':
          charactersNum.push(9);
          break;
        case 'l':
          charactersNum.push(10);
          break;
        case 'm':
          charactersNum.push(11);
          break;
        case 'n':
          charactersNum.push(12);
          break;
        case 'o':
          charactersNum.push(13);
          break;
        case 'p':
          charactersNum.push(14);
          break;
        case 'q':
          charactersNum.push(15);
          break;
        case 'r':
          charactersNum.push(16);
          break;
        case 's':
          charactersNum.push(17);
          break;
        case 't':
          charactersNum.push(18);
          break;
        case 'u':
          charactersNum.push(19);
          break;
        case 'v':
          charactersNum.push(20);
          break;
        case 'z':
          charactersNum.push(21);
          break;
        default:
          break;
      }
  }

  console.log(charactersNum);





