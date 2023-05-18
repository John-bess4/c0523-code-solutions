const width = 4;
const height = 7;

const area = width * height;

console.log('value of area:', area);
console.log('typeof area:', typeof area);
// the log method of the console object is being
// called on two arguments one string and variable area

const bill = 14.5;
const payment = 20;

const change = payment - bill;

console.log(' value of change:', change);
console.log('typeof change:', typeof change);

const quizzes = 60;
const midterm = 70;
const final = 80;

const grade = (quizzes + midterm + final) / 3;

console.log('value of grade:', grade);
console.log('typeof grade:', typeof grade);

const firstName = 'Joe';
const lastName = 'Bill';

const fullName = firstName + '' + lastName;

console.log('value of firstName:', firstName);
console.log(typeof 'firstName:', typeof firstName);

const pH = 4;
const isAcidic = pH < 7;

console.log('value of isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

const headCount = 1;

const isSparta = headCount === 300;

console.log('value of isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

let motto = fullName;

motto += ' is the GOAT';

console.log('value of motto:', motto);
console.log('typeof motto:', typeof motto);
