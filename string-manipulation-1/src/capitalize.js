/* exported capitalize */
function capitalize(word) {
  if (typeof word !== 'string') {
    throw new Error('Input must be a string');
  }
  if (word.length === 0) {
    return ' ';
  }
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
console.log('capitalize:', capitalize);
