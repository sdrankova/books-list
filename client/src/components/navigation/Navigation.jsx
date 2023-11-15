import { Link } from 'react-router-dom';


export default function Navigation() {
    function openNav() {
        document.getElementById("myNav").classList.toggle("menu_width");
        document
            .querySelector(".custom_menu-btn")
            .classList.toggle("menu_btn-style");
    }

    function closeNav() {
        document.getElementById("myNav").classList.toggle("menu_width");
        document
            .querySelector(".custom_menu-btn")
            .classList.remove("menu_btn-style");
    }

    return (
        <div className="hero_area hero_area_navigation">
            <header className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container">
                        <Link to="/" className="navbar-brand">
                            <img src="images/logo.png" alt="" />
                            <span>
                                GoodBooks
                            </span>
                        </Link>

                        <div className="navbar-collapse" id="">
                            <div className="custom_menu-btn">
                                <button onClick={openNav}>
                                    <span className="s-1"> </span>
                                    <span className="s-2"> </span>
                                    <span className="s-3"> </span>
                                </button>
                            </div>
                            <div id="myNav" className="overlay">
                                <div className="overlay-content">
                                    <Link to="/" onClick={closeNav}>HOME</Link>
                                    <Link to="food.html">YOUR BOOKS</Link>
                                    <Link to="food.html">OTHER'S BOOKS</Link>
                                    <Link to="/create-book" onClick={closeNav}>ADD BOOK</Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
}