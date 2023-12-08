import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import styles from './IndexPage.module.css'
import { Link } from 'react-router-dom';
import BestSellersList from '../best-sellers-list/BestSellersList';
import AuthContext from '../../contexts/AuthContext';
import { useContext } from 'react';
import ActiveButtonContext from '../../contexts/ActiveButton';


export default function IndexPage() {
    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext);
    const { setActiveButtonHandler } = useContext(ActiveButtonContext);

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

                            <img src="images/undraw_book_lover_mkck.svg" className={styles.headerImage} />

                        </div>
                        <div className={`col-md-5 offset-md-1 ${styles.siteDetails}`}>
                            {!isAuthenticated ? (
                                <div className={styles.detailBox}>
                                    <h1>
                                        Good Books
                                    </h1>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                        alteration in some form, by injected humour, or randomised words
                                    </p>

                                    <div className={styles.btnBox}>
                                        <Link
                                            to='/login'
                                            onClick={() => setActiveButtonHandler(1)}
                                            className={`button ${styles.login}`}
                                        >
                                            Log In
                                        </Link>
                                        <Link
                                            to='/register'
                                            className={`button ${styles.register}`}
                                            onClick={() => setActiveButtonHandler(2)}
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <div className=" col-md-5 offset-md-1">
                                    <div className={styles.detailBox}>
                                        <h1>
                                            Hello, {username}
                                        </h1>
                                        <Link to="/list-books" className="button your-books" onClick={() => setActiveButtonHandler(3)}>YOUR BOOKS</Link>
                                    </div>
                                </div>
                            )}

                            <div className={styles.arrowBox} onClick={() => document.getElementById('list-top10').scrollIntoView({ behavior: 'smooth' })}>
                                <p className={styles.arrowText}>Discover the bestsellers below.</p>
                                <FontAwesomeIcon
                                    icon={faAngleDown}
                                    className={styles.arrow}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BestSellersList />
        </div>
    );
}