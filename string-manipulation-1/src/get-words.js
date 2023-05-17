/* exported getWords */
function getWords(string) {
  if (typeof string !== 'string') {
    throw new Error('Input mus tbe a string');
  }

  const words = string
    .trim()
    .split(/\s+/)
    .filter((word) => word !== '');
  return words;
}
console.log('getWords:', getWords);
