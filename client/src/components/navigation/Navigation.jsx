import { useContext, useState } from "react";

import { Link } from 'react-router-dom';
import AuthContext from "../../contexts/AuthContext";
import Path from "../../paths";


export default function Navigation() {
    const {
        isAuthenticated,
    } = useContext(AuthContext);

    const [active, setActive] = useState(0);

    return (
        <>
            <nav className="navbar custom_nav-container">
                <Link
                    to="/"
                    className="navbar-brand"
                    onClick={() => setActive(0)}
                >
                    <span>
                        GoodBooks
                    </span>
                </Link>
                <div className="navigation-items">
                    {isAuthenticated ? (
                        <div id="user">

                            <Link
                                className={active === 3 ? "active" : ""}
                                onClick={() => setActive(3)}
                                to="/list-books">YOUR BOOKS</Link>
                            <Link
                                className={active === 4 ? "active" : ""}
                                onClick={() => setActive(4)}
                                to={Path.OthersBooks}>OTHER'S BOOKS</Link>
                            <Link
                                className={active === 5 ? "active" : ""}
                                onClick={() => setActive(5)}
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
                                className={active === 1 ? "active" : ""}
                                onClick={() => setActive(1)}
                                to={Path.Login}>Log In</Link>
                            <Link
                                className={active === 2 ? "active" : ""}
                                onClick={() => setActive(2)}
                                to={Path.Register}>Register</Link>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}