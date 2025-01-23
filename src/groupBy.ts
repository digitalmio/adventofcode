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

const transactions = [
  { date: "2021-01-14", category: "Electronics", amount: 100 },
  { date: "2021-01-22", category: "Clothing", amount: 150 },
  { date: "2021-02-05", category: "Electronics", amount: 200 },
  { date: "2021-02-18", category: "Clothing", amount: 120 },
  { date: "2021-03-10", category: "Electronics", amount: 180 },
];
const groupedTransactions = groupBy(
  transactions,
  (transaction) => transaction.date.slice(0, 7),
);

console.log(groupedTransactions);
