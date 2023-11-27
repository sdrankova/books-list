import { useEffect, useState } from "react";

import ListBookItem from "./list-book-item/ListBookItem";
import { getAll } from "../../services/bookService";

export default function ListBooks() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getAll()
            .then(result => setBooks(result));
    }, []);
    console.log(books)

    return (
        <div className="books-list">
            <h1>Your Books</h1>

            
        {books.map(book => (
            <ListBookItem key={book._id} _id={book._id} title={book.title} author={book.author} summary={book.summary} imageUrl={book.imageUrl} />
        ))}
        </div>
    );
}