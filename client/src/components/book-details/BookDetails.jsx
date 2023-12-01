import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as bookService from '../../services/bookService';

export default function BookDetails() {
    const [book, setBook] = useState({});
    const { bookId } = useParams();

    useEffect(() => {
        bookService.getOne(bookId)
            .then(setBook);
    }, [bookId]);


    return (
        <div className="container">
            <div className="row">
                <img src={book.imageUrl} alt="" />
                <div className="col-md-6 book-details">
                    <h2>{book.title}</h2>
                    <p>Genre: {book.genre}</p>
                    <p>Rate: {book.rating}</p>
                    <h4>About the book:</h4>
                    <p>{book.summary}</p>
                    <h4>Your opinion:</h4>
                    <p>{book.opinion}</p>
                </div>
            </div>
        </div>
    );
}