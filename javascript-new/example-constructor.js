function ExampleConstructor() {}
console.log('value of prototype property:', ExampleConstructor.prototype);
console.log('typeof prototype property:', typeof ExampleConstructor.prototype);

const instance = new ExampleConstructor();
console.log('Value of instance:', instance);

const isInstanceOfExampleConstructor = instance instanceof ExampleConstructor;
console.log(
  'Is this an instance of ExampleConstructor?',
  isInstanceOfExampleConstructor
);
