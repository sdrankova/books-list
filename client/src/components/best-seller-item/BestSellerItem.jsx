import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import styles from './BestSellerItem.module.css';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/AuthContext';

export default function BestSellerItem({
    title,
    author,
    description,
    image,
    isFavourite,
    onToggleFavourite,
}) {
    const [isStarClicked, setStarClicked] = useState(false);

    useEffect(() => {
        setStarClicked(isFavourite);
    }, [isFavourite]);

    const handleStarClick = async () => {
        try {
            setStarClicked(!isStarClicked);
            onToggleFavourite();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={styles.book}>
            <FontAwesomeIcon
                icon={faHeart}
                onClick={handleStarClick}
                style={{ fontSize: '2em', color: isStarClicked ? 'red' : 'gray' }}
            />
            <img src={image} alt={title} />
            <section>
                <h3>{title}</h3>
                <h5>{author}</h5>
                <p>{description}</p>
            </section>
        </div>
    );
}
