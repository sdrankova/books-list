import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className="navbar custom_nav-container">
            <Link
                to="/"
                className={`navbar-brand ${styles.footerLogo}`}
            >
                <span>
                    GoodBooks
                </span>
            </Link>
        </footer>
    );
};