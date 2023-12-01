import { Link } from 'react-router-dom';

import styles from './BookListItem.module.css';

export default function BookListItem({
    _id,
    title,
    author,
    summary,
    imageUrl,
    createdBy
}) {
    return (
        <div className={styles.book}>
            <img src={imageUrl} alt="Item Image" />
            <div className={styles.bookInfo}>
                <h3>Title: {title}</h3>
                <h5>By: {author}</h5>
                <p>Short summary: {summary}</p>
                <Link to={`/book-details/${_id}`} className="read-more">Read More</Link>

                {createdBy && (
                    <p>Created By: {createdBy}</p>
                )}
            </div>
        </div>
    );
}