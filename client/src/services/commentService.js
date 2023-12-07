import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async(bookId) => {
    const query = new URLSearchParams({
        where: `bookId="${bookId}"`,
        load: `owner=_own erId:users`
    });
    
    const result = await request.get(`${baseUrl}?${query}`);

    return result
};

export const create = async(bookId, text) => {
    const newComment = await request.post(baseUrl, {
        bookId,
        text,
    });

    return newComment;
};