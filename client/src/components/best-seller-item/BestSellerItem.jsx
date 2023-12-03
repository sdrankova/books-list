import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import styles from './BestSellerItem.module.css';
import { useContext, useEffect, useState } from 'react';
import { create, remove } from '../../services/bookService';
import AuthContext from '../../contexts/AuthContext';

export default function BestSellerItem({
    _id,
    title,
    author,
    description,
    image,
    rank,
    summary,
    isFavourite,
    idForDelete,
}) {
    const [isStarClicked, setStarClicked] = useState(false);
    const [redStar, setRedStar] = useState(false);
    const [books, setBooks] = useState({});
    const { username } = useContext(AuthContext);

    useEffect(() => {
        setStarClicked(isFavourite ? true : false);
      }, []);

    const handleStarClick = async () => {
        if (!isStarClicked && !isFavourite) {
            try {
                const selectedBook = {
                    'bookId': _id,
                    'title': title,
                    'author': author,
                    'genre': '',
                    'imageUrl': image,
                    'rating': rank,
                    'opinion': '',
                    'summary': summary,
                    createdBy: username,
                };
                console.log('CREATE')
                await create(selectedBook);
                setStarClicked(true);
            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                console.log('DELETE')
                await remove(idForDelete);
                setStarClicked(false)
                isFavourite = false
            } catch (err) {
                console.log(err);
            }
        }
      };

    return (
        <div className={styles.book}>
            {/* <i class="fa-regular fa-star"></i> */}
            <FontAwesomeIcon
                icon={faHeart}
                onClick={handleStarClick}
                style={{ fontSize: '2em', color: isStarClicked || isFavourite ? 'red' : 'gray' }}
            />
            <img src={image} />
            <section>
                <h3>{title}</h3>
                <h5>{author}</h5>

                <p>{description}</p>
            </section>
        </div>
    );
}