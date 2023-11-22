const baseUrl = 'http://localhost:3030/users';

export const register = async (firstName, lastName, username, email, password) => {
    const userData = { firstName, lastName, username, email, password }

    const response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    const result = await response.json();
    return result;
};

export const login = async (email, password) => {
    const userData = { email, password }
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    return await response.json();
};

export const logout = () => {
    const response = fetch(`${baseUrl}/logout`);
    return response;
}