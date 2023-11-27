import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as bookService from '../../services/bookService';

export default function BookDetails() {
    const [book, setBook] = useState({});
    const { bookId } = useParams();
    console.log(bookId)

    useEffect(() => {
        bookService.getOne(bookId)
            .then(setBook);
    }, [bookId]);


    return (
        <div className="container">
            <div className="row">
                <img src={book.imageUrl} alt="" />
                <div className="col-md-6">
                    <h2>
                        {book.title}
                    </h2>
                    <p>{book.summary}</p>
                </div>
            </div>
        </div>
    );
}