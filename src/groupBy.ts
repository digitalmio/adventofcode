const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
  },
  { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic" },
  { title: "1984", author: "George Orwell", genre: "Dystopian" },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Coming-of-age",
  },
  { title: "Pride and Prejudice", author: "Jane Austen", genre: "Classic" },
];

const groupBy = <Book extends Record<string, any>>(
  input: Array<Book>,
  fn: (book: Book) => string,
) =>
  input.reduce((acc, el) => {
    const key = fn(el);
    acc[key] = [
      ...(acc[key] || []),
      el,
    ];
    return acc;
  }, {} as Record<string, any[]>);

const groupedBooks = groupBy(books, (book) => book.genre);

console.log(groupedBooks);
