import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as BookService from "../../services/bookService";

export default function BookEdit() {
    const { bookId } = useParams();
    const [book, setBook] = useState({
        'title': '',
        'author': '',
        'genre': '',
        'imageUrl': '',
        'rating': '',
        'opinion': '',
        'summary': '',
    });

    useEffect(() => {
        BookService.getOne(bookId)
            .then(result => {
                setBook(result);
            });
    }, [bookId]);

    const EditBookSubmitHandler = async (e) => {
        e.preventDefault();
        
        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await BookService.edit(bookId, values);
        } catch (err) {
            console.log(err);
        }
    }


    const changeHandler = (e) => {
        setBook(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };



    return (
        <section className="form_section ">
        <div className="container">
            <h2>
                Add New Book
            </h2>
            <div className="row">
                <div className="col-md-7">
                    <div className="form_container">

                        <form className="create" onSubmit={EditBookSubmitHandler} >

                            <label htmlFor="title">Book Title:</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={book.title}
                                onChange={changeHandler}
                            />

                            <label htmlFor="author">Author:</label>
                            <input
                                type="text"
                                id="author"
                                name="author"
                                value={book.author}
                                onChange={changeHandler}
                            />

                            <label htmlFor="genre">Genre:</label>
                            <input
                                type="text"
                                id="genre"
                                name="genre"
                                value={book.genre}
                                onChange={changeHandler}
                            />

                            <label htmlFor="imageUrl">Image URL:</label>
                            <input
                                type="text"
                                id="imageUrl"
                                name="imageUrl"
                                value={book.imageUrl}
                                onChange={changeHandler}
                            />

                            <label htmlFor="rating">Rating:</label>
                            <select
                                className="rating"
                                name="rating"
                                value={book.rating}
                                onChange={changeHandler}
                            >
                                <option value="" disabled>Select rating</option>
                                <option value="1">1 - Poor</option>
                                <option value="2">2 - Fair</option>
                                <option value="3">3 - Good</option>
                                <option value="4">4 - Very Good</option>
                                <option value="5">5 - Excellent</option>
                            </select>


                            <label htmlFor="opinion">Your Opinion:</label>
                            <textarea
                                className="opinion"
                                rows="4"
                                type="text"
                                id="opinion"
                                name="opinion"
                                value={book.opinion}
                                onChange={changeHandler}
                            ></textarea>

                            <label htmlFor="opinion">Short Summary:</label>
                            <textarea
                                className="summary"
                                rows="4"
                                type="text"
                                id="summary"
                                name="summary"
                                value={book.summary}
                                onChange={changeHandler}
                            ></textarea>


                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}