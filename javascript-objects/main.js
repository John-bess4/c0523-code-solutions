const student = {
  firstName: 'John',
  lastName: 'Bess',
  age: '23',
};
const fullName = student.firstName + '' + student.lastName;
console.log('student');
console.log('fullName');

student.livesInIrvine = true;
student.previousOccupation = 'student';

console.log('student.livesInIrvine');
console.log('student.previousOccupation');

const vechile = {
  make: 'Ford',
  model: 'Mustang',
  year: 2022,
};

vechile['color'] = 'red';
vechile['isConvertible'] = true;

console.log('vechicle');

const pet = {
  name: 'reina',
  type: 'dog',
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
