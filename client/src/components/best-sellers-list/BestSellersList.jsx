import { useContext, useEffect, useState } from "react";

import { getBestSellers } from "../../services/BestSellersService";
import BestSellerItem from "../best-seller-item/BestSellerItem";
import { getAll, getFavourites } from "../../services/bookService";
import AuthContext from "../../contexts/AuthContext";

export default function BestSellersList() {
    const [BestSellersList, setBestSellersList] = useState([]);
    const [favouriteBooks, setFavouriteBooks] = useState([]);
    const { username } = useContext(AuthContext);

    useEffect(() => {

        getBestSellers()
            .then(data => setBestSellersList(data))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {

        getFavourites(username)
            .then(result => setFavouriteBooks(result))
            .catch(err => {
                console.log(err)
            });
    }, []);

    const bookTitles = favouriteBooks.map(book => book.title);

    const getBookIDByTitle = (title) => {
        const book = favouriteBooks.find(book => book.title === title);
        return book ? book._id : null;
    };

    return (
        <div className="best-books-wrapper">
            <h1>Top 10 Print & E-Book Fiction</h1>
            <p className="source-text">Source: <a href="https://www.nytimes.com/books/best-sellers/">The New York Times</a></p>
            <div className="best-sellers-list">
                {BestSellersList.map(book => (
                    <BestSellerItem 
                        key={book.primary_isbn10}
                        _id={book.primary_isbn10}
                        title={book.title}
                        author={book.author}
                        description={book.description}
                        image={book.book_image}
                        rank={book.rank}
                        summary={book.description}
                        isFavourite={bookTitles.includes(book.title)}
                        idForDelete={getBookIDByTitle(book.title)}
                    />
                ))}
            </div>
        </div>
    );
}
