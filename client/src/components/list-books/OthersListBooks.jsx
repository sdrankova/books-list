import { useContext, useEffect, useState } from "react";

import ListBookItem from "./list-book-item/ListBookItem";
import { getAll } from "../../services/bookService";
import AuthContext from "../../contexts/AuthContext";

export default function OthersListBooks() {
    const [books, setBooks] = useState([]);

    const {
        userId,
    } = useContext(AuthContext);

    useEffect(() => {
        getAll()
            .then(result => setBooks(result))
            .catch(err => {
                console.log(err)
            });
    }, []);

    return (
        <div className="books-list">
            <h1>Other's Books</h1>

            
        {books.map(book => {
            if (book._ownerId !== userId.toString() ) {
                return <ListBookItem key={book._id} _id={book._id} title={book.title} author={book.author} summary={book.summary} imageUrl={book.imageUrl} createdBy={book.createdBy} />
            }
        }
        )}
        </div>
    );
}