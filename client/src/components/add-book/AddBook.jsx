import { useRef, useState, useEffect, useContext } from "react";
import { create } from "../../services/bookService";
import styles from './AddBook.module.css'
import AuthContext from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Path from "../../paths";
import ActiveButtonContext from "../../contexts/ActiveButtonContext";

export default function AddBook({
}) {
    const navigate = useNavigate();
    const { username } = useContext(AuthContext);
    const [formError, setFormError] = useState('');
    const { setActiveButtonHandler } = useContext(ActiveButtonContext);

    const formInitialState = {
        'title': '',
        'author': '',
        'genre': '',
        'imageUrl': '',
        'rating': '',
        'opinion': '',
        'summary': '',
        createdBy: username,
    }

    const titleInputRef = useRef();
    const [formValues, setFormValues] = useState(formInitialState);

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

        if (Object.values(formValues).some(value => value.trim() === '')) {
            setFormError('Please fill out all fields before submitting.');
            return;
        };

        try {
            await create(formValues);
            resetFormHandler();
            navigate(Path.BooksList)
        } catch (err) {
            console.log(err);
        }
    };


    const resetFormHandler = () => {
        setFormValues(formInitialState);
        // setErrors({});
    };

    return (


        <section className="form_section ">
            <div className="container">
                <h2>
                    Add New Book
                </h2>
                <div className="form_container">
                    {formError && (
                        <p className="errorText">{formError}</p>
                    )}
                    <form onSubmit={submitHandler} className="create" >

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


                        <button type="submit" onClick={() => setActiveButtonHandler(3)}>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}