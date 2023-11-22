import styles from './BestSellerItem.module.css';

export default function BestSellerItem({
    title,
    author,
    description,
    image,
}) {
    return (
        <div className={styles.book}>
            {/* <i class="fa-regular fa-star"></i> */}
            <img src={image} />
            <section>
                <h3>{title}</h3>
                <h5>{author}</h5>
                
                <p>{description}</p>
            </section>
        </div>
    );
}