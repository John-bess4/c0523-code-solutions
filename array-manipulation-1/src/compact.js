/* exported compact */
function compact(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (value || value === 0) {
      result.push(value);
    }
  }
  return result;
}
console.log('compact:', compact);
