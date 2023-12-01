import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as bookService from '../../services/bookService';
import AuthContext from "../../contexts/AuthContext";
import Path from "../../paths";
import { pathToUrl } from "../../utils/pathUtils";
import ConfirmationModal from "../confirmation-modal/ConfirmationModal";

export default function BookDetails() {
    const navigate = useNavigate();
    const [book, setBook] = useState({});
    const [showConfirmation, setShowConfirmation] = useState(false);
    const { bookId } = useParams();

    const { userId } = useContext(AuthContext);

    useEffect(() => {
        bookService.getOne(bookId)
            .then(setBook);
    }, [bookId]);

    const onDeleteButtonClickHandler = async () => {
        await bookService.remove(bookId);

        navigate(Path.Home)
    }

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
                            <button className="button" onClick={() => setShowConfirmation(true)}>Delete</button>

                            {showConfirmation && (
                                <ConfirmationModal onConfirm={onDeleteButtonClickHandler} onHide={() => setShowConfirmation(false)} title={book.title} />
                            )}

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}