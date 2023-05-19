const student = {
  firstName: 'John',
  lastName: 'Bess',
  age: '23',
};
const fullName = student.firstName + '' + student.lastName;
console.log('student.fristName:', student.fristName);
console.log('fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'student';

console.log('student.livesInIrvine:', student.livesInIrvine);
console.log('student.previousOccupation:', student.previousOccupation);

const vehicle = {
  make: 'Ford',
  model: 'Mustang',
  year: 2022,
};

vehicle['color'] = 'red';
vehicle['isConvertible'] = true;

console.log('vehicle:', vehicle);

const pet = {
  name: 'reina',
  type: 'dog',
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
