import { useRef, useState, useEffect } from "react";
import { create } from "../../services/bookService";
import styles from './AddBook.module.css'

export default function AddBook({
    formRef
}) {

    const formInitialState = {
        'title': '',
        'author': '',
        'genre': '',
        'imageUrl': '',
        'rating': '',
        'opinion': '',
        'summary': '',
    }

    const titleInputRef = useRef();
    const [formValues, setFormValues] = useState(formInitialState);
    const [rangeValue, setRangeValue] = useState(5); // Initial value, change as needed

    useEffect(() => {
        titleInputRef.current.focus();
    }, []);

    const changeHandler = (e) => {
        let value = e.target.value;

        setFormValues(state => ({
            ...state,
            [e.target.name]: value
        }));
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await create(formValues);
            resetFormHandler();
        } catch (err) {
            console.log(err);
        }
    };


    const resetFormHandler = () => {
        setFormValues(formInitialState);
        // setErrors({});
    };

    return (


        <section className="form_section layout_padding-bottom ">
            <div className="container">
                <h2>
                    Add New Book
                </h2>
                <div className="row">
                    <div className="col-md-7">
                        <div className="form_container">

                            <form ref={formRef} onSubmit={submitHandler} className="create" >

                                <label htmlFor="title">Book Title:</label>
                                <input
                                    ref={titleInputRef}
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formValues.title}
                                    onChange={changeHandler}
                                />

                                <label htmlFor="author">Author:</label>
                                <input
                                    type="text"
                                    id="author"
                                    name="author"
                                    value={formValues.author}
                                    onChange={changeHandler}
                                />

                                <label htmlFor="genre">Genre:</label>
                                <input
                                    type="text"
                                    id="genre"
                                    name="genre"
                                    value={formValues.genre}
                                    onChange={changeHandler}
                                />

                                <label htmlFor="imageUrl">Image URL:</label>
                                <input
                                    type="text"
                                    id="imageUrl"
                                    name="imageUrl"
                                    value={formValues.imageUrl}
                                    onChange={changeHandler}
                                />

                                <label htmlFor="rating">Rating:</label>
                                <select
                                    className="rating"
                                    name="rating"
                                    value={formValues.rating}
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
                                    value={formValues.opinion}
                                    onChange={changeHandler}
                                ></textarea>

                                <label htmlFor="opinion">Short Summary:</label>
                                <textarea
                                    className="summary"
                                    rows="4"
                                    type="text"
                                    id="summary"
                                    name="summary"
                                    value={formValues.summary}
                                    onChange={changeHandler}
                                ></textarea>


                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}