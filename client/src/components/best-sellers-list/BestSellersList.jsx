import { useEffect, useState } from "react";

import { getBestSellers } from "../../services/BestSellersService";
import BestSellerItem from "../best-seller-item/BestSellerItem";

export default function BestSellersList() {
    const [BestSellersList, setBestSellersList] = useState([]);

    useEffect(() => {

        getBestSellers()
            .then(data => setBestSellersList(data))
            .catch(err => console.log(err));
    }, []);
    return (
        <div className="best-books-wrapper">
            <h1>Top 10 Print & E-Book Fiction</h1>
            <p className="source-text">Source: <a href="https://www.nytimes.com/books/best-sellers/">The New York Times</a></p>
            <div className="best-sellers-list">
                {BestSellersList.map(book => (
                    <BestSellerItem 
                        key={book.primary_isbn10}
                        title={book.title}
                        author={book.author}
                        description={book.description}
                        image={book.book_image}
                    />
                ))}
            </div>
        </div>
    );
}
