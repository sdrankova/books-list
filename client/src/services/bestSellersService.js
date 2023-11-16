// Request to the New York Times Books API to get best sellers data
// const nytApiUrl = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=q93nfB5dC9GqIzuvfpsZsD0SPYafAvuV';
const nytApiUrl = 'https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-fiction.json?api-key=q93nfB5dC9GqIzuvfpsZsD0SPYafAvuV';

export const getBestSellers = async() => {
    const response = await fetch(nytApiUrl);
    const result = await response.json();

    const data = result.results.books.slice(0, 5);

    return data;
  }
