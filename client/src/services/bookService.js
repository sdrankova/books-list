const baseUrl = 'http://localhost:3030/jsonstore/books';

export const create = async (bookData) => {

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
    });

    const result = await response.json();

    return result;
};