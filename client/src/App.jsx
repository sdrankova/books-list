import { Routes, Route, useNavigate } from 'react-router-dom';

import { useRef, useState } from 'react'

import * as authService from './services/AuthService';
import AuthContext from './contexts/AuthContext';

import Navigation from "./components/navigation/Navigation"
import IndexPage from "./components/index-page/IndexPage"
import AddBook from './components/add-book/AddBook';
import ListBooks from './components/list-books/ListBooks';
import Register from './components/register/Register';
import Path from './paths';

function App() {
    const formRef = useRef();
    const navigate = useNavigate();

    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');

        return {};
    });

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.firstName, values.lastName, values.username, values.email, values.password)
        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home);
    }

    const values = {
        registerSubmitHandler,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <>
            <AuthContext.Provider value={values}>
                <Navigation />
                <Routes>
                    <Route path='/' element={<IndexPage />} />
                    <Route path='/create-book' element={<AddBook formRef={formRef} />} />
                    <Route path='/list-books' element={<ListBooks />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </AuthContext.Provider>
        </>
    )
}

export default App
