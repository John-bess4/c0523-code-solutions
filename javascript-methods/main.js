//  Prob 1-3 assigned the numbers to the varialbes below
// assigned method to variabe maxValue
// console.log(Math.max(333, 222, 444));

const numOne = [111];
const numTwo = [222];
const numThree = [333];

const maxValue = Math.max(numOne, numTwo, numThree);
//  const minValue = Math.min(numOne,numTwo,numThree);

console.log('maxValue:', maxValue);
//  console.log('minValue:',minValue);

//  problems 4-10

const heroes = ['Batman', 'Goku', 'Naruto', 'Superman'];

let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

//  assigning two arguments string heroes and method randomINdex to variable

//  the log method of the console object is being
// called on two arguments one string and variable area //

const library = [
  {
    title: 'Stay Hard',
    author: 'David Goggins',
  },

  {
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien',
  },
];

const lastBook = library.pop();
console.log('lastBook:', lastBook);

const firstBook = library.shift();
console.log('firstbook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};

const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

//   string methods
const fullName = 'John Bess';
const firstAndLastName = fullName.split(' ');

console.log('firstAndLastName:', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);
