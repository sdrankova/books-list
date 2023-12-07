import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    };

    return (
        <footer className="navbar custom_nav-container">
                <span className={`navbar-brand ${styles.footerLogo}`} onClick={handleScrollToTop}>
                    GoodBooks
                </span>
        </footer>
    );
};