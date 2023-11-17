const baseUrl = 'http://localhost:3030/jsonstore/books';

export const getAll = async (bookData) => {
    const response = await fetch(baseUrl);
    const result = await response.json();
    const data = Object.values(result);

    return data;
}


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