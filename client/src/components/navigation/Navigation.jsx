import { useContext, useState } from "react";

import { Link } from 'react-router-dom';
import AuthContext from "../../contexts/AuthContext";
import ActiveButtonContext from "../../contexts/ActiveButton";
import Path from "../../paths";

export default function Navigation() {
    const { isAuthenticated } = useContext(AuthContext);
    const { activeButton, setActiveButtonHandler } = useContext(ActiveButtonContext);

    return (
        <>
            <nav className="navbar custom_nav-container">
                <Link
                    to="/"
                    className="navbar-brand"
                    onClick={() => setActiveButtonHandler(0)}
                >
                    <span>
                        GoodBooks
                    </span>
                </Link>

                <div className="navigation-items">
                    {isAuthenticated ? (
                        <div id="user">

                            <Link
                                className={activeButton === 3 ? "active" : ""}
                                onClick={() => setActiveButtonHandler(3)}
                                to="/list-books">YOUR BOOKS</Link>
                            <Link
                                className={activeButton === 4 ? "active" : ""}
                                onClick={() => setActiveButtonHandler(4)}
                                to={Path.OthersBooks}>OTHER'S BOOKS</Link>
                            <Link
                                className={activeButton === 5 ? "active" : ""}
                                onClick={() => setActiveButtonHandler(5)}
                                to={Path.BookCreate}>ADD BOOK</Link>
                            <Link
                                to={Path.Logout}>LOGOUT</Link>
                        </div>
                    ) : (
                        <div id="guest">
                            <Link
                                className={active === 4 ? "active" : ""}
                                onClick={() => setActive(4)}
                                to={Path.OthersBooks}>OTHER'S BOOKS</Link>
                            <Link
                                className={activeButton === 1 ? "active" : ""}
                                onClick={() => setActiveButtonHandler(1)}
                                to={Path.Login}>Log In</Link>
                            <Link
                                className={activeButton === 2 ? "active" : ""}
                                onClick={() => setActiveButtonHandler(2)}
                                to={Path.Register}>Register</Link>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}