import styles from './ListBookItem.module.css';

export default function ListBookItem({
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
                <a href="#" className="read-more">Read More</a>
            </div>
        </div>
    );
}