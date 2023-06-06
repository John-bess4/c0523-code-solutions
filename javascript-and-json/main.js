const books = [
  {
    isbn: '978-0-345-47632-4',
    title: 'The catfher in the Rye ',
    author: 'J.D. Salinger',
  },
  {
    ibsn: '978-0-553-21356-7',
    title: 'Pride and Predjuice',
    author: 'Jane Austen',
  },
  {
    ibsn: '978-1-4516-2731-9',
    title: 'To Kill A MockingBird',
    author: 'Harper Lee',
  },
];

console.log('Array of books:', books);
console.log('typeof books:', typeof books);

const booksJSON = JSON.stringify(books);

console.log('JSON String of books:', booksJSON);
console.log('typeof booksJSON:', typeof booksJSON);

const studentJSON = '{"id": 98765, "name": "Jane Smith"}';

console.log('JSON String of student:', studentJSON);

console.log('typeof studentJSON:', typeof studentJSON);

const student = JSON.parse(studentJSON);

console.log('Object representation of student:', student);
console.log('typeof student:', typeof student);
