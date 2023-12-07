import { useContext, useEffect, useState } from "react";

import { getBestSellers } from "../../services/BestSellersService";
import BestSellerItem from "../best-seller-item/BestSellerItem";
import { getFavourites, create, remove } from "../../services/bookService";
import AuthContext from "../../contexts/AuthContext";

export default function BestSellersList() {
    const [bestSellersList, setBestSellersList] = useState([]);
    const [favouriteBooks, setFavouriteBooks] = useState([]);
    const { username } = useContext(AuthContext);

    useEffect(() => {
        const storedBestSellers = JSON.parse(localStorage.getItem('bestSellersBooks')) || [];

        if (storedBestSellers.length > 0) {
            setBestSellersList(storedBestSellers);
        } else {
            getBestSellers()
                .then(data => {
                    setBestSellersList(data);
                    localStorage.setItem('bestSellersBooks', JSON.stringify(data));
                })
                .catch(err => console.log(err));
        }
    }, []);

    useEffect(() => {
        const handleBeforeUnload = () => {
          localStorage.removeItem('bestSellersBooks');
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }, []);

    useEffect(() => {
        getFavourites(username)
            .then(result => setFavouriteBooks(result))
            .catch(err => {
                console.log(err);
            });
    }, [username]);

    const toggleFavourite = async (bookTitle, isCurrentlyFavourite) => {
        try {
            if (!isCurrentlyFavourite) {
                const selectedBook = bestSellersList.find(book => book.title === bookTitle);
                console.log('CREATE')
                await create({
                    'bookId': selectedBook.primary_isbn10,
                    'title': selectedBook.title,
                    'author': selectedBook.author,
                    'genre': '',
                    'imageUrl': selectedBook.book_image,
                    'rating': selectedBook.rank,
                    'opinion': '',
                    'summary': selectedBook.description,
                    createdBy: username,
                });
            } else {
                console.log('DELETE')
                const bookId = getBookIDByTitle(bookTitle);
                await remove(bookId);
            };
            const updatedFavourites = await getFavourites(username);
            setFavouriteBooks(updatedFavourites);
        } catch (err) {
            console.log(err);
        }
    };

    const getBookIDByTitle = (title) => {
        const book = favouriteBooks.find(book => book.title === title);
        return book ? book._id : null;
    };

    return (
        <div className="best-books-wrapper" id="list-top10">
            <h1>Top 10 Print & E-Book Fiction</h1>
            <p className="source-text">Source: <a href="https://www.nytimes.com/books/best-sellers/">The New York Times</a></p>
            <div className="best-sellers-list">
                {bestSellersList.map(book => (
                    <BestSellerItem
                        key={book.primary_isbn10}
                        title={book.title}
                        author={book.author}
                        description={book.description}
                        image={book.book_image}
                        isFavourite={favouriteBooks.some(favBook => favBook.title === book.title)}
                        onToggleFavourite={() => toggleFavourite(book.title, favouriteBooks.some(favBook => favBook.title === book.title))}
                    />
                ))}
            </div>
        </div>
    );
}
