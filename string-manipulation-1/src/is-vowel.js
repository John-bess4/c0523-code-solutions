/* exported isVowel */

function isVowel(char) {
  if (typeof char !== 'string' || char.length !== 1) {
    return false;
  }
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return vowels.includes(char);
}
console.log('isVowel:', isVowel);
