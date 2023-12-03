import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/books';

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getOne = async (bookId) => {
    const result = await request.get(`${baseUrl}/${bookId}`,);

    return result;
}

export const getFavourites = async (username) => {
    // http://localhost:3030/data/books?where=createdBy%20LIKE%20%22stefi%22
    const result = await request.get(`${baseUrl}?where=createdBy%20LIKE%20%22${username}%22`);
    return result;
}

export const create = async (bookData) => {

    const result = await request.post(baseUrl, bookData);

    return result;
};

export const edit = async (bookId, bookData) => {
    const result = await request.put(`${baseUrl}/${bookId}`, bookData);

    return result;
}

export const remove = async (bookId) => request.remove(`${baseUrl}/${bookId}`)
