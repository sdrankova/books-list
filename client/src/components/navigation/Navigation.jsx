import { useContext, useState } from "react";

import { Link } from 'react-router-dom';
import AuthContext from "../../contexts/AuthContext";


export default function Navigation() {
    const {
        isAuthenticated,
    } = useContext(AuthContext);

    const [active, setActive] = useState(0);

    return (
        <div className="hero_area hero_area_navigation">
            <header className="header_section">
                <div className="container-fluid">
                    <nav className="navbar custom_nav-container">
                        <Link
                            to="/"
                            className="navbar-brand"
                            onClick={() => setActive(0)}
                        >
                            <img src="images/logo.png" alt="" />
                            <span>
                                GoodBooks
                            </span>
                        </Link>
                        <div className="navigation-items">
                            {isAuthenticated && (
                                <div id="user">

                                    <Link
                                        className={active === 1 ? "active" : ""}
                                        onClick={() => setActive(1)}
                                        to="/list-books">YOUR BOOKS</Link>
                                    <Link
                                        className={active === 2 ? "active" : ""}
                                        onClick={() => setActive(2)}
                                        to="/others-books">OTHER'S BOOKS</Link>
                                    <Link
                                        className={active === 3 ? "active" : ""}
                                        onClick={() => setActive(3)}
                                        to="/create-book">ADD BOOK</Link>
                                    <Link
                                        className={active === 4 ? "active" : ""}
                                        onClick={() => setActive(3)}
                                        to="/logout">LOGOUT</Link>
                                </div>
                            )}
                            {!isAuthenticated && (
                                <div id="guest">

                                    <Link
                                        className={active === 1 ? "active" : ""}
                                        onClick={() => setActive(1)}
                                        to="/login">Log In</Link>
                                    <Link
                                        className={active === 2 ? "active" : ""}
                                        onClick={() => setActive(2)}
                                        to="/register">Register</Link>
                                </div>
                            )}
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
}