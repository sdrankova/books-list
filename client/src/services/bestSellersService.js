// Request to the New York Times Books API to get best sellers data
// const nytApiUrl = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=q93nfB5dC9GqIzuvfpsZsD0SPYafAvuV';
const nytApiUrl = 'https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=ppL8Ic5VzuDqrQ2VXefUViKR9gjTq8Pk';
// const nytApiUrl = 'https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=vIMwIGGtE3jvP9oIxo9fAgxsGVhBm1uX';

export const getBestSellers = async() => {
    const response = await fetch(nytApiUrl);
    const result = await response.json();

    const data = result.results.books.slice(0, 10);

    return data;
  }

  