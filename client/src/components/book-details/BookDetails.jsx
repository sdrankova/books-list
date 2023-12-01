import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import * as bookService from '../../services/bookService';
import AuthContext from "../../contexts/AuthContext";
import Path from "../../paths";
import { pathToUrl } from "../../utils/pathUtils";

export default function BookDetails() {
    const [book, setBook] = useState({});
    const { bookId } = useParams();

    const { userId } = useContext(AuthContext);

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
                    <p>{book.opinion}</p>~

                    {userId === book._ownerId && (
                        <div className="buttons">
                            <Link to={pathToUrl(Path.BookEdit, { bookId })} className="button">Edit</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}