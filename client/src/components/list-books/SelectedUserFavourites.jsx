import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getFavourites } from "../../services/bookService";
import BookListItem from "./book-list-item/BookListItem";

export default function SelectedUserFavourites () {
    const [books, setBooks] = useState([]);
    const { username } = useParams();

    useEffect(() => {
        getFavourites(username)
            .then(setBooks);
    }, [username]);

    return (
        <div className="books-list">
        <h1>{username}'s Books</h1>

        {books.map(book => {
            return <BookListItem key={book._id} _id={book._id} title={book.title} author={book.author} summary={book.summary} imageUrl={book.imageUrl} />
        })}
    </div>
    );
};