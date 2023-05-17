/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;

  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }

  return numbers;
}

console.log(getNumbersToTen());

function getEvenNumbersToTwenty() {
  const evenNumbers = []; // creates an empty array
  let currentNumber = 2; // sets currentNumber to 2

  while (currentNumber <= 20) {
    // loops through even numbers from 2 to 20
    evenNumbers.push(currentNumber); // adds currentNumber to the end of the array
    currentNumber += 2; // increases currentNumber by 2
  }

  return evenNumbers; // returns the array after the loop terminates
}

console.log(getEvenNumbersToTwenty());
