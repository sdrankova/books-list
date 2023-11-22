import { Link } from 'react-router-dom';
import BestSellersList from '../best-sellers-list/BestSellersList';
import AuthContext from '../../contexts/AuthContext';
import { useContext } from 'react';


export default function IndexPage() {
    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext);

    return (
        <div className="hero_area">
            <section className=" slider_section position-relative">
                <div className="side_heading">
                    <h5>
                        G
                        o
                        o
                        d
                        B
                        o
                        o
                        k
                        s
                    </h5>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div id="carouselExampleIndicators">

                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="img-box b-1">
                                            <img src="images/books.png" alt="" />
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        {!isAuthenticated && (
                            <div className=" col-md-5 offset-md-1">
                                <div className="detail-box">
                                    <h1>
                                        Good Books
                                    </h1>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                        alteration in some form, by injected humour, or randomised words
                                    </p>

                                    <div className="btn-box">
                                        <Link
                                            to='/login'
                                            className="btn-1"
                                        >
                                            Log In
                                        </Link>
                                        <Link
                                            to='/register'
                                            className="btn-2"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}

                        {isAuthenticated && (
                            <div className=" col-md-5 offset-md-1">
                                <div className="detail-box">
                                    <h1>
                                        Hello, {username}
                                    </h1>
                                        <Link to="/list-books">YOUR BOOKS</Link>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </section>
            <BestSellersList />
        </div>
    );
}