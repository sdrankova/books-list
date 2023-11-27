import { Link } from 'react-router-dom';

import styles from './ListBookItem.module.css';

export default function ListBookItem({
    _id,
    title,
    author,
    summary,
    imageUrl,
}) {
    return (
        <div className={styles.book}>
            <img src={imageUrl} alt="Item Image" />
            <div className={styles.bookInfo}>
                <h3>{title}</h3>
                <h5>{author}</h5>
                <p>{summary}</p>
                <Link to={`/book-details/${_id}`} className="read-more">Read More</Link>
            </div>
        </div>
    );
}